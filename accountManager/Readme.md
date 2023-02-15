<!-- 
You are required to implement the methods of a class for an application
for managing user accounts in different services. The AccountManager Class
would be responsible for managing user accounts.

- Requirements
    The AccountManager class will handle three types of object: an LDAP
account object. an Azure account oblect and a user oblect:
An LDAP account object has the following fields:
userId: number. Idenurvina the user this accounts assigned to

• ldapId: number, ID of user In the LDAP system
© email: String. emall or the user

An Azure account object has:
 - userId: number, identifying the user this account is assigned to
 - azureId: number, ID of user in Azure
 - email: String, email of the user

• A user object has
 -  userld: number. Idenurvina the user this account s assianed to
country. string, country or the user email string, email of the user.

Note: These are fake accounts details for the purposes of this task. They do not reflect real Azure or LDAP data

Important: To identify the users and match them with their accounts, use
the userld property unless there are other hints as to now vou can match
a user with their account.

In order to satisfy the task's requirements you must implement the
Following metnods in the class AccountManager (for examoles see the
Examples section):

1. missingAccountsIdapAccounts, azureAccounts)

method accents an arrav of LDAP accounts and an arrav of Azure
accounts as input
method returns an array of objects with the following properties:
userId: number, identifying the user
missinaAccounts: strind. equals Azure if Azure account is
missing or LDAP if LDAP account is missing for the given
userld.
method returns only users that have one of their accounts missing
(the order is irrelevant
the method should accept empty arrays)

2. summarizeCountries(users)

method accents an arrav or users as an inout
metnod returns an oblect wnose propertes are the names or eacn
encountered country in the users objects passed as the parameter
the value of each propertv must be the number of users who belond
to a given country
each country must appear on once and the value under countrv's
property must be accumulated
for an emotv arrav or users. the method must return an emotv oblect
you do not nave to nande problems win direrenuetter cases: the
method must treat usa and us as different countries.

3. mergeAccounts(users, ldapAccounts, azureAccounts)

method accepts an array of user objects, an array of LDAP accounts
and an arrav of Azure accounts as input
method returns an array of user objects merged with accounts with
the
• Following properties
user Id: number, identifying the
usel
country' string. countrv of the user
email. string, email of the user
accounts: an array of objects containing all found accounts for
this user (first LDAP account. if available, then Azure account
(whole account objects)

the method should accept empty arrays and return an empty array in
such a case an important preconation is that the arras are sorted in such a wal
that the user and their accounts are at the same position in al
arrays. As a Simplified Illustration, note the undefined values that are
meant to keep all accounts in the same positions (for more
examples see the Examples section.

there will be a maximum of one LDAP and one Azure account for the
same userId (Or undefined if the account is missing)

Available packages/libraries
Lodash 4.17.20
NodeS 12 14 

Examples:

    1. missingAccounts(ldapAccounts, azureAccounts)

    //given accounts
    const ldapAccounts = [
        { ldapId: 1, userId: 145, email: "john@example.com" },
        { ldapId: 2, userId: 293, email: "john@example.com" },
    ];

     const azureAccounts = [
        { id: 43, userId: 145, email: "john@example.com" },
        { id: 44, userId: 723, email: "john@example.com" },
    ];

    // when missingAccounts method is called
    const result = AccountManager.missingAccounts(ldapAccounts, azureAccounts)

    // then returned result should be as follows
    console.log(result);

    2. summarizeCountries(users)
    - when summarizeCountries method is called
    const result = AccountManager.summarizeCountries(users);

    //then returned result should be as follows console.log(result);

    {
        'USA': 2, // john & jane
        'Peru': 1 // juan
    }

    3. mergeAccounts(users, ldapAccounts, azureAccounts),

    // given accounts
    // notice undefined values
    // if juan is third in users list then his corresponding account or undefined

    const ldapAccounts = [
        {ldapId: 1, userId: 145, email: "john@example.com" },
        {ldapId: 2, userId: 293, email: "john@example.com" },
        undefined,
        undefined,
    ];

      const azureAccounts = [
        {id: 43, userId: 145, email: "john@example.com" },
        {id: 44, userId: 712, email: "john@example.com" },
        undefined,
    ];

    console.log(result);

    [
        {
            userId: 145,
            country: "USA",
            email: "john@example.com",
            accounts: [
                {ldapId: 1, userId: 145, email: "john@example.com },
                {id: 43 , userId: 145, email: "john@example.com },
            ]
        },
        {
            userId: 293,
            country: "USA",
            email: "jane@example.com",
            accounts: [{ ldapId: 2, userId: 293, email: "jane@example.com }]
        },
        {
            userId: 712,
            country: "Peru",
            email: "juan@example.com",
            accounts: [{ id: 44, userId: 712, email: 'juan@example.com' }]
        },
        {
            userId: 782,
            country: "Chile",
            email: "matias@example.com",
            accounts: [],
        }
    ];

-->