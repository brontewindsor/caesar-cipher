let encryptBtn = document.getElementById('encrypt-btn')
let eInput = document.getElementById('encryptedInput-1')
let pInput = document.getElementById('plainInput')
let inputs = [eInput,pInput]
// let rInput = document.getElementById('reverseCipher')

// x

 function encrypt(){
     let pInput = document.getElementById('plainInput-1').value;
     let solved = []
     let shiftInput = parseInt(document.getElementById('shiftInput').value)

     


    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    pInput.split("").forEach(element => {
       let current = alphabet.lastIndexOf(element)
       if(current + shiftInput > 25
){
    console.log(current, shiftInput)
    current = current - 26
}
console.log(current)
        solved.push(alphabet[current + Number(shiftInput)])
    });
// console.log(solved.join(""))
document.getElementById('encryptedInput-1').value = solved.join("")
 }

 function decode(){
    let pInput = document.getElementById('plainInput-1').value;
    let solved = []
    let shiftInput = parseInt(document.getElementById('shiftInput').value)
 }

// encryptBtn.addEventListener('click', encrypt)



/*function caesarCipher(str, num) {
    var lowerCaseStr = str.toLowerCase();
    var newStr = '';

    for(var i = 0; i < lowerCaseStr.length; i++) {
        var currentLetter = lowerCaseStr[i];
        if(currentLetter === '') {
            newStr += currentLetter;
            continue;
        }

        var currentIndex = alphabet.indexOf(currentLetter);
        var newIndex = currentIndex + num;
        if(newIndex > 25) newIndex = newIndex - 26;
        if(newIndex < 0) newIndex = newIndex + 26;
        if(str[i] === str[i].toUpperCase()) {
            newStr += alphabet[newIndex].toUpperCase();
        }
        else newStr += alphabet[newIndex];
        
    }
    return newStr;
} 
*/
//  console.log(pInput, shiftInput)

    //  for(var i = 0; i< pInput.length; i++){
    //      console.log(pInput[i])
    //     //  let ascii_num = pInput[i].charCodeAt()
    //     //  let sum = ascii_num + shiftInput
    //     //  sum >= 65 && sum <=90 ? solved += String.fromCharCode(sum) : sum > 90 ? solved += String.fromCharCode(65 + (sum & 91)) : solved += pInput[i]

    //  }