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
