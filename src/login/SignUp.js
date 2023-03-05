import axios from "axios";
import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import './SignUp.css'

export default function SignUp() {
  const navigateBack = useNavigate();

  const [Number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [fName ,setFname]=useState("");
  const[lName,setLname]=useState("");
  const [response,setResponse]=useState(false);

  let [userdata,setUserdata]=useState({});
 
  function handleRegister(e) {
    e.preventDefault();
    setUserdata(userdata={FName:fName,LName:lName,MobileNumber:Number,password:password})
axios.post('http://localhost:64790/api/Selfcare/getUser',userdata).then(
     (res) => {
       setResponse(res);
     
          console.log(JSON.stringify(response.data) +"kk");
   
 })
        .catch((err) => {
          console.log(err);
        });
       if(response) {
    Swal.fire({
      title: "Perfect!",
      text: "Would you like to Login?",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, take me to Login Page!",
    }).then((result) => {
      if (result.isConfirmed) {
        navigateBack("/Login");
      }
    });
  }
    localStorage.setItem('password', password);
    localStorage.setItem('Number', Number);
    let correctPassword = window.localStorage.getItem(password);
    let number=window.localStorage.getItem(Number);
    console.log('pass:'+correctPassword+'num:'+number);
  }

  return (
    <>
      <form className="formpage">
        <table border={1}
     className='tabledata'
     align="center">
            <thead>

            </thead>
            <tbody>
            <tr>
          <td className="col-md-5 mb-3">
            <label htmlFor="validationServer01">First name</label>
            </td>
            
            <td className="col-md-45 mb-5">
                
            <input
              type="text"
              className="form-control"
              id="validationServer01"
              placeholder="First name"
              required
               onChange={(e) => setFname(e.target.value)}
            />
          </td>
          </tr>
    <tr>
          <td className="col-md-5 mb-3">
            <label >Last name</label>
            </td>
            <td className="col-md-45 mb-5">
            <input
              type="text"
              className="form-control"
              id="LName"
              placeholder="Last name"
               onChange={(e) => setLname(e.target.value)}
            />
          </td>
          </tr>
          <tr>
          
          <td className="col-md-5 mb-3">
            <label>Mobile Number</label>
            </td>
            <td className="col-md-45 mb-5">
              <input
                type="tel"
                className="form-control"
                id="MobileNumber"
                placeholder="Mobile Number"
                aria-describedby="inputGroupPrepend3"
                maxLength={10}
               onChange={(e) => setNumber(e.target.value)}
              />
             </td>
             </tr>
             <tr>
          
          <td className="col-md-5 mb-3">
            <label >Password</label>
            </td>
            <td className="col-md-45 mb-5"> 
            <input
              type="password"
              className="form-control"
              id="Password"
              required
              maxLength={10}
              onChange={(e) => setPassword(e.target.value)}
            />
          </td>
          </tr>
          <tr>
        
       
<td className="col-md-4 mb-3 text left" colSpan={2} >
        <button className="btn btn-primary" onClick={handleRegister}>
          Submit form
        </button>
        </td>
        </tr>
        </tbody>
        </table>
      </form>
    </>
  );
}