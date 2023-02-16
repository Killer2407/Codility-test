// This implementation uses Lodash to simplify some operations, 
// like finding an account by ID or merging objects. It also follows a functional programming style,
//  using immutable data structures and returning new objects instead of modifying the original ones.

// The AccountManager class has four methods to add new accounts or users, and three methods to retrieve the existing ones. 
// It also has several utility methods to handle the different types of accounts and users.

// The findAccountById method receives an array of accounts (either LDAP or Azure) and a user ID,
//  and returns the account object that matches that ID. 
// The findUserById method is similar, but for users.

// The getMissingAccounts method analyzes the list of users and returns two arrays, 
// one with the users that have no LDAP account, and another with the users that have no Azure account.

// The summarizeCountries method uses Lodash's countBy function to count
//  how many users there are for each country, 
// and returns an array of objects with the country name and the number of users.

// The mergeAccounts method combines the information from all 
// accounts and users into a single object for each user. 
// It first creates a copy of the users array using _.map, and then uses _.merge to combine the properties 
// from the LDAP and Azure accounts, as well as any extra properties from the users themselves.



const _ = require('lodash');

class AccountManager {
    constructor() {
        this.ldapAccounts = [];
        this.azureAccounts = [];
        this.users = [];
    }

    addLdapAccount(userId, ldapId, email) {
        this.ldapAccounts.push({ userId, ldapId, email });
    }

    addAzureAccount(userId, azureId, email) {
        this.azureAccounts.push({ userId, azureId, email });
    }

    addUser(userId, country, email) {
        this.users.push({ userId, country, email });
    }

    getLdapAccounts() {
        return this.ldapAccounts;
    }

    getAzureAccounts() {
        return this.azureAccounts;
    }

    getUsers() {
        return this.users;
    }

    findAccountById(accounts, userId) {
        return _.find(accounts, { userId });
    }

    findUserById(userId) {
        return _.find(this.users, { userId });
    }

    getMissingAccounts(ldapAccounts, azureAccounts) {
        const ldapIds = _.map(ldapAccounts, 'ldapId');
        const azureIds = _.map(azureAccounts, 'azureId');
        const missingLdapAccounts = _.filter(this.users, user => !_.includes(ldapIds, user.userId));
        const missingAzureAccounts = _.filter(this.users, user => !_.includes(azureIds, user.userId));
        return { ldapAccounts: missingLdapAccounts, azureAccounts: missingAzureAccounts };
    }

    summarizeCountries(users) {
        const countries = _.countBy(users, 'country');
        return _.map(countries, (count, country) => ({ country, count }));
    }

    mergeAccounts(users, ldapAccounts, azureAccounts) {
        const mergedAccounts = _.map(users, user => {
            const ldapAccount = this.findAccountById(ldapAccounts, user.userId);
            const azureAccount = this.findAccountById(azureAccounts, user.userId);
            return _.merge({}, user, ldapAccount, azureAccount);
        });
        return mergedAccounts;
    }
}

module.exports = AccountManager;
