<!-- 
Description of the invert function

invert function accepts a string and returns a string.
 - When the string is empty it returns empty string.
 - When the argument passed to the method is "null" Or "undefined" it
returns an empty string
 - When the string has exactly one  character the same string is
    returned
 - When the string is longer then 1 character its inverted version is
returned.

Examples of invert function usage:

    const { invert } = require("./inverter");
    invert ("a"); / returns "a"
    invert(null); // returns " "
    invert (abcd); // return "dcba"

Requirements:

 - Your task is to implement a suite of tests In Jest that Will test all the possible behaviours of the invert function, as described above.
 - Your suite of tests will be run against multiple (wrong and correct)
 - Implementations of invert function.
 - All tests must pass for correct implementation. Otherwise you will
receive 0%, so make sure that all tests pass for the correct one before the submitting the task! 
 - For a wrong implementation of the invert tunction. at least one of the test cases should fail.
 
-->
