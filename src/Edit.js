import React, { Component } from 'react'
import MyModal from './Form'
export default class Edit extends Component {
    constructor(props,{handeladd}) {
      super()
    
      this.state = {
         id:0,
         userName:" ",
         address:" ",
         skill:"React"
      }
    }
    // handelChange=(event)=>{
    // // event.prevent.default();
    //   if(event.target.name==="id")
    //   this.setState({id:event.target.value})
    //   if(event.target.name==="name")
    //   this.setState({userName:event.target.value})
    //   if(event.target.name==="address")
    //   this.setState({address:event.target.value})
    //   if(event.target.name==="skill")
    //   this.setState({skill:event.target.value})
    // }
  render() {
    return (
    <>
     <MyModal heading="Registration Form">
        <form id="modalBody">
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input type="password" className="form-control" id="pwd" />
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" /> Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-default">
            Submit
          </button>
        </form>
      </MyModal> 
    {/* <form>
             <div className='border p-2'>
             
             <div className='m-2'>Id:<input type="text" onChange={this.handelChange} name="id" /></div>
           
             
            
             <div className='m-2'>Name:<input type="text"  onChange={this.handelChange} name="name" /></div>
            
          
          
             <div className='m-2'>Address:<input type="text" onChange={this.handelChange} name="address"  /></div>
      
             <div className='m-2'>Skill:
             <select onChange={this.handelChange} name="skill"  >
                     <option value="react" >React</option>
                     <option value="node js">Node Js</option>
                     <option value="Angular">Angular</option>
                 </select>
             </div>
             <div><button className='btn btn-primary' onClick={()=>{
              const objuser={
              id:this.state.id,
              userName:this.state.userName,
              address:this.state.address,
              skill:this.state.skill

             };
             this.handeladd({objuser})}}>Save</button></div>
             </div>
         </form> */}
    </>
    )
  }
}
