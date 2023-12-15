const enddate = "16 December 2023 10:00 PM"
document.getElementById('end-date').innerHTML = enddate;
const inputs = document.querySelectorAll("input")


function clock(){
    const end = new Date(enddate);
    const now = new Date();
   const diff = (end - now)/ 1000;
//    console.log(diff);
if(diff<0) return ;
//    convert in to days
inputs[0].value = (Math.floor(diff/3600/24));
inputs[1].value = (Math.floor(diff/3600) % 24); 
inputs[2].value = (Math.floor(diff/60) % 60); 
inputs[3].value = (Math.floor(diff) % 60); 

}
clock();

 function setinerval(){
     setInterval ( clock,1000);
 }
 setinerval();

// 1 day =24 h
// 1 hr =60 min
// 60 min =3600 sec