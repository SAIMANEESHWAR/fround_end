//  ('#menu-btn').click(function(){
//     ('#menu').toggleClass("active")
// })
const register=()=>{
    var x=document.getElementById("login");
 var y=document.getElementById("register");
var z=document.getElementById("btn");
    x.style.left="-400px";
   y.style.left="50px";
  z.style.left="135px";

}

const login=()=>{
    var x=document.getElementById("login");
 var y=document.getElementById("register");
var z=document.getElementById("btn");
x.style.left="50px";
   y.style.left="450px";
  z.style.left="0px";
}
export default{register,login};

