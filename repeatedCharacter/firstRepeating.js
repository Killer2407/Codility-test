// Given a String. A js function that will find a first character thats 
// repeated from left to right. Your output should be that repeated or if there is no
// repeated character it will say that the string is not repeated.


function firstRepeating(str)
{
    // Creates an empty hashset
    let h = new Set();
     
    // Traverse the input array from left to right
    for(let i = 0; i <= str.length - 1; i++)
    {
        let c = str[i];

        // If element is already in hash
        // set, update x and then break
        if (h.has(c))
            return c;
        // Else add element to hash set
        else
            h.add(c);
    }
    return '\0';
}

console.log(firstRepeating("foobar"));
