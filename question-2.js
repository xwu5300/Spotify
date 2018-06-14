// Given an encoded string, return its corresponding decoded string. 

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer. 

// For s = "4[ab]", the output should be decodeString(s) = "abababab" 
// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

const decodeString = (s) => {
    let result = ''
    let count = ''
    let str = ''
    let brackets = 0
    for (let char of s) {
      if (brackets > 0) {
        str += char
      }
      if (char === '[') {
        brackets++
      } else if (char === ']') {
        brackets--
        if (brackets === 0) {
          result += decodeString(str).repeat(count);
          count = ''
          str = ''
        }
      } else {
        if (brackets === 0) {
          if (!!parseInt(char) && char === '0') {
            count += char
          } 
          else result += char;
        }
      }
    }
    return result
}