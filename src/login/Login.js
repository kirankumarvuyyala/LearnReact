import React, {useEffect,  useState} from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import client from "../interceptor/Api";
import './SignUp.css'

export default function Login() {
  const navigateTo = useNavigate();

  const [Number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  let [userdata,setUserdata]=useState({});

  useEffect(()=>{
    window.localStorage.removeItem('authorized');
  },[]);

  const handleLogin=async()=> 
  {
    let res1="";
    setUserdata(userdata={MobileNumber:Number,password:password})
    console.log(JSON.stringify(userdata));
    // await axios.post('http://localhost:64790/api/Selfcare/validateUser',userdata).then(
     await client.post('/validateUser',userdata).then(
     (res) => {
      res1=res.data;
     console.log(res);
     console.log("dd"+res.data);
        
   
     })
        .catch((err) => {
          console.log(err);
        });
  
  console.log(res1+"login after ");
    if (res1) 
    {
        localStorage.setItem('authorized',true);
        navigateTo("/Form");
      }
    else
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: "<em>Username and Password do not match!</em>",
      });
    }

  return (
    <>
      <div className="container">
        <form>
          <div className="form-outline mb-4 md-5">
            <label className="form-label" htmlFor="Mobilenumber">
              Mobile Number :
            </label>
            <input
              type="number"
              id="Mobilenumber"
              className="form-control"
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>

          <div className="form-outline mb-4 md-5">
            <label className="form-label">
              Password :{" "}
            </label>
            <input
              type="password"
              id="Password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="button"
            className="btn btn-success"
            onClick={handleLogin}
          >
            Sign in
          </button>

          <div className="signup">
            New User ?<br />
            <button
              type="button"
              id="signUp"
              className="btn btn-outline-warning btn-md"
              onClick={() => {
                navigateTo("/SignUp");
              }}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
}