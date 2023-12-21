const getColor = () =>
{
    // hex code
    const randomNumber = Math.floor (Math.random() * 16777215);
   const randomCode = '#' + randomNumber.toString(16);
   document.body.style.backgroundColor = randomCode ;
   document.getElementById('color-code').innerText = randomCode ;
    

//    auto copy colorcode
navigator.clipboard.writeText(randomCode)


}
// event call
document.getElementById('btn').addEventListener('click',
 getColor)


//  initial call
 getColor();