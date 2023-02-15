// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

let MaxValue = 2147483647;

function balanced(small, caps) {
    for (let i = 0; i < 26; i++) {
        if (small[i] != 0 && (caps[i] == 0))
            return false;

        else if ((small[i] == 0) && (caps[i] != 0))
            return false
    }
    return true;
}

function solution(S) {
    // Implement your solution here
    let small = new Array(26);
    let i;

    let caps = new Array(26);
    small.fill(0);
    caps.fill(0);

    for (i = 0; i < S.length; i++) {
        if (S[i].charCodeAt() >= 65 && S[i].charCodeAt() <= 90)
            caps[S[i].charCodeAt() - 65]++;
        else
            small[S[i].charCodeAt() - 97]++;
    }

    let map = new Map();

    for (i = 0; i < 26; i++) {
        if (small[i] != 0 && caps[i] == 0) {
            map.set(String.fromCharCode(i + 97), 1);
        }
        else if (caps[i] != 0 && small[i] == 0)
            map.set(String.fromCharCode(i + 65), 1);
    }

    small.fill(0);
    caps.fill(0);

    i = 0;
    let string = 0;

    let start = -1, end = -1;

    let min = MaxValue;

    while (i < S.length) {
        if (map.has(S[i])) {
            while (string < i) {
                if (S[string].charCodeAt() >= 65 &&
                    S[string].charCodeAt() <= 90)
                    caps[S[string].charCodeAt() - 65]--;
                else
                    small[S[string].charCodeAt() - 97]--;

                string++;
            }
            i += 1;
            string = i;
        }

        else {
            if (S[i].charCodeAt() >= 65 && S[i].charCodeAt() <= 90)
                caps[S[i].charCodeAt() - 65]++;
            else
                small[S[i].charCodeAt() - 97]++;


            while (true) {
                if (S[string].charCodeAt() >= 65 &&
                    S[string].charCodeAt() <= 90 &&
                    caps[S[string].charCodeAt() - 65] > 1) {
                    caps[S[string].charCodeAt() - 65]--;
                    string++;
                }
                else if (S[string].charCodeAt() >= 97 &&
                    S[string].charCodeAt() <= 122 &&
                    small[S[string].charCodeAt() - 97] > 1) {
                    small[S[string].charCodeAt() - 97]--;
                    string++;
                }
                else
                    break;
            }

            if (balanced(small, caps)) {
                if (min > (i - string + 1)) {
                    min = i - string + 1;
                    start = string;
                    end = i;
                }
            }
            i += 1;
        }
    }

    if (start == -1 || end == -1)
        return -1;

    else {
        let ans
        for (let j = start; j <= end; j++)
            ans += S[j];
            return ans.replace('undefined', "").length;
    }
}


console.log(solution("azABaabza")) //Output: 5
console.log(solution("TacoCat")) // Output: -1
console.log(solution("AcZCbaBz")) // Output: 8
console.log(solution("abcdefghijklmnopqrstuvwxyz")) // Output: -1
