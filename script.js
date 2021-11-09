/*
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

const pangrams = (s) => {
    const sLowercase = s.toLowerCase();
    
    if(new Set(sLowercase).size > 26) {
      return "pangram"
    } else {
      return "not pangram"
    }
    
}

// Set is a datatype which is used to hold only the unique values. 
// So converting the strint to a set will contain only unique alphabets if the length of the string is >26 then its a pangram.
