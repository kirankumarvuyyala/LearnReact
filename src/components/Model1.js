import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

export default function Model1() {
    const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [employee,setEmployee]=useState([{id:0,Name:"",address:"",skill:""}])
  

  function openModal1() {
    setFlag1(true);
  }
  function closeModal1() {
    setFlag1(false);
  }
  function openModal2() {
    setFlag2(true);
  }
  function closeModal2() {
    setFlag2(false);
  }
  const handelChange=(event)=>{
    event.preventdefault();
    if(event.target.name==="Id")
    {
        setEmployee(employee.Id=event.target.value);
    }
    if(event.target.name==="Name")
    {
        setEmployee(employee.Name=event.target.value);
    }
    if(event.target.name==="Address")
    {
       setEmployee(employee.address=event.target.value);
    }
    if(event.target.name==="skill")
    {
        setEmployee(employee.skill=event.target.value);
    }

  }
  const handleSubmit=()=>{

  }
  return (
    <>
      <Button className="m-1" onClick={openModal1}>
        Form inside Modal
      </Button>
      <Button className="m-1" onClick={openModal2}>
        Form inside Modal
      </Button>

      <Modal show={flag1} onHide={closeModal1}>
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form >
        <div className='container'>
            <div className="row">
                <div  className="col-sm-8  text-center">
        <label>user ID</label>
      <input type="number" name="Id"></input>
      </div>
      <div  className="col-sm-8 text-center">
      <label>user name</label>
      <input  type="text" name="Name"></input>
      </div>
      <div  className="col-sm-8 text-center">
      <label>Address</label>
      <input type="text" name="Address"></input>
      </div>
      <div  className="col-sm-8 text-center bold">
      <label>skill</label>

      <select value={employee.skill} name="select" onChange={handelChange}>
                <option value="react">React</option>
                <option value="node js">Node Js</option>
                <option value="Angular">Angular</option>
            </select>
            </div>
            </div>
        </div>
        <div>
           {/* <button type='submit' className='btn btn-outline-primary sm-3' onClick={handelUpdate}>Update</button> */}
        
        
            <button type="submit" className="btn btn-outline-primary" onClick={handleSubmit}>submit</button>
        
       
        
        
     
        </div>
        </form>
      
        </Modal.Body>
        <Modal.Footer>
          <h2>This is My Footer</h2>
          <Button variant="secondary" onClick={closeModal1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={flag2} onHide={closeModal2}>
        <Modal.Header closeButton>
          <Modal.Title>Modal 2 heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal2}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
