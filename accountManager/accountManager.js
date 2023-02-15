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
