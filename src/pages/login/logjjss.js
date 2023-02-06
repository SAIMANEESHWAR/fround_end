
import {NavLink,Link} from "react-router-dom";
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
const login12=()=>{
  console.log("jnfksn vj");
  var user11= document.getElementById("user1").value;
  var pass11= document.getElementById("pass1").value;
          console.log("hiiiii");
          console.log(user11);
          console.log(pass11);
  if(user11==='sai@123')
          {
              if(pass11==='saimanee')
              {
                console.log("hiiiiisdf");
                  // location.replace("Dashboard/dashboard"); 
                  <Link to="/Dashboard/"></Link>
              }
          }
}
export default{register,login,login12};



// function register(){
//     x.style.left="-400px";
//     y.style.left="50px";
//     z.style.left="110px";
// }
// function login(){
//     x.style.left="50px";
//     y.style.left="450px";
//     z.style.left="0px";
// }