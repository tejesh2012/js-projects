const inputSlider = document.querySelector("[data-lengthSlider]") ;
const lengthDisplay = document.querySelector('[data-lengthNumber]') ;

const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~!@#$%^&*()_-+={[}]|:;"<,>.?/';


let password ="";
let passwordLength = 10 ;
let checkCount = 0;
handleSlider();
console.log(passwordLength);
// set strngth  circle color grey


//set pssword length
 function handleSlider(){
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;

 }

 function setIndicator(color){
    indicator.style.backgroundColor = color;
    //shadow

 }

 function getRndInteger(min,max){
   return Math.floor(Math.random()* (max - min) + min);
 }

 function generateRandomNumber(){
    return getRndInteger(0,9);
 }

 function generateLowerCase(){
    return String.fromCharCode(getRndInteger(97,123));

 }
 function generateUpperrCase(){
    return String.fromCharCode(getRndInteger(65,91));
    
 }

 function generateSymbol(){
    const randNum = getRndInteger(0, symbols.length);
    return symbols.charAt(randNum);

 }

 function calcStrength(){
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if (uppercaseCheck.checked) hasUpper = true;
    if (lowercaseCheck.checked) hasLower = true;
    if (numbersCheck.checked) hasNum = true;
    if (symbolsCheck.checked) hasSym = true;
  
    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
      setIndicator("#0f0");
    } else if (
      (hasLower || hasUpper) &&
      (hasNum || hasSym) &&
      passwordLength >= 6
    ) {
      setIndicator("#ff0");
    } else {
      setIndicator("#f00");
    }
 }

  async function copyContent(){

   try {
      await navigator.clipboard.writeText(passwordDisplay.value);
      copyMsg.innerText = "copied";

   }
   catch(e)
   {
      copyMsg.innerText = "failed";
   }
   // to make copy span visible
   copyMsg.classList.add("active");
   setTimeout( () => {
      copyMsg.classList.remove("active");
   } , 2000
   

   );
   
 }



 function shufflePassword(array){
//fisher yates method
for (let i = array.length - 1; i > 0; i--) {
   //random J, find out using random function
   const j = Math.floor(Math.random() * (i + 1));
   //swap number at i index and j index
   const temp = array[i];
   array[i] = array[j];
   array[j] = temp;
 }
let str = "";
array.forEach((el) => (str += el));
return str;

 }
 function handleCheckboxChange(){
   checkCount = 0;
   allCheckBox.forEach((checkbox) =>{
      if(checkbox.checked)
      checkCount++;
   })
 }
 //special condition
 if(passwordLength < checkCount) {
   passwordLength = checkCount;
   handleSlider();
 }

 allCheckBox.forEach((checkbox) =>{
   checkbox.addEventListener('change', handleCheckboxChange);

 })

 inputSlider.addEventListener('input',(e) =>{
   passwordLength = e.target.value;
   handleSlider();
 })

 copyBtn.addEventListener('click' , ()=>{
   if(passwordDisplay.value)
     copyContent();

 })

 generateBtn.addEventListener('click',() => {
// NONE OF THE CHECKBOX are selected
if(checkCount <= 0) return;

if(passwordLength < checkCount){
   passwordLength = checkCount;
   handleSlider();
}

// let start the journy to find new password
console.log('starting the journy');
// remove old password
password = "";
 
// let put the stuff mentioned by checkboxes

// if( uppercaseCheck.checked){
//    password += generateUpperrCase();

// }
// if( lowercaseCheck.checked){
//    password += generateLowerCase();
   
// }
// if( numbersCheck.checked){
//    password += generateRandomNumber();
   
// }
// if( symbolsCheck.checked){
//    password += generateSymbol ();
   
// }

let funArr = [];

if(uppercaseCheck.checked){
   funArr.push(generateUpperrCase);
}

if(lowercaseCheck.checked){
   funArr.push(generateLowerCase);
}

if(numbersCheck.checked){
   funArr.push(generateRandomNumber);
}

if(symbolsCheck.checked){
   funArr.push(generateSymbol);
}

//compulsory addition
for(let i=0; i<funArr.length; i++){
   password += funArr[i]();
}
console.log('compulsory addition');

//reamaining adition

for (let i=0; i<passwordLength-funArr.length; i++){
   let randIndex = getRndInteger (0, funArr.length);
   //  console.log("randIndex" + randIndex);
   password += funArr[randIndex] () ; 
}
console.log('reamaining adition');

//suffle password
password = shufflePassword(Array.from(password));

console.log('shuffle password');
//show in ui
passwordDisplay.value = password;

console.log('show in ui');
//call clculate stregth

calcStrength();

 });



  
