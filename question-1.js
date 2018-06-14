//Sort the letters in the string s by the order they occur in the string t. You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".

const sortByString = (s, t) => {
  let str = {}
  let result = ''
  for (var i = 0; i < s.length; i++) {
    let char = s[i]
    if (str.hasOwnProperty(char)) {
      str[char]++
    } else {
      str[char] = 1
    }
  }
  for (var j = 0; j < t.length; j++) {
    let ch = t[j]
    if (str.hasOwnProperty(ch)) {
      result += ch.repeat(str[ch])
    }
  }
  return result
}