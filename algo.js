// 557. Reverse Words in a String III



// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.









/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
    let arr = s.split(' ')
    let result = []

    for(let i = 0; i < arr.length; i++){

        let rev = arr[i].split('').reverse().join('')

        result.push(rev)
    }

    return result.join(' ')
};