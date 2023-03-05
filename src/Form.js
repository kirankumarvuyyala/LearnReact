import React, { Component } from 'react'
 import "./Form.css";
 import Swal from 'sweetalert2'
 import SearchBar from 'react-js-search';
 class Form extends Component {

  
    constructor(props) {
      
      super(props)
   
      
      this.state = {
        user:[{id:1,userName:"kk",address:"hyd",skill:"React"},{id:2,userName:"kumar",address:"nlg",skill:"Angular"},{id:3,userName:"kiran",address:"hyd",skill:"React"}],
        filteredData:[{id:1,userName:"kk",address:"hyd",skill:"React"},{id:2,userName:"kumar",address:"nlg",skill:"Angular"},{id:3,userName:"kiran",address:"hyd",skill:"React"}],
        id:"",
       // values:[{id:1,userName:"kk",address:"hyd",skill:"React"}],
         userName:"",
         address:"",
         skill:"React",
         flag:false,
         update:false,
         save:true,
         token:window.localStorage.getItem('authorized')
      

      }
      // if(!this.state.token)navigateBack("/Login")
     // this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    
    OnChangeID=(event)=>{
        this.setState({
            id:event.target.value
        })
    }
    OnChangeName=(event)=>{
        this.setState({
            userName:event.target.value
        })
    }
    onChangeAdress=(event)=>
    {
        this.setState({
            address:event.target.value
        })
    }
    onChangeSkill=(event)=>
    {
        this.setState({
            skill:event.target.value
        })
    }
      handleSubmit=event=>{
        event.preventDefault();
        console.log("intial"+this.state.user);
        let  filteredData=[...this.state.user]
        //console.log("first"+input);
      filteredData.push({id:`${this.state.id}` ,userName:`${this.state.userName}` ,address:`${this.state.address}`,skill: `${this.state.skill}`})
       
      this.setState({filteredData})
      this.setState({
        flag:false,
        id:"",
        userName:"",
        address:""
    })
    Swal.fire( 'Details Added Sucessfully',	
    '',	
    'success')
        
        console.log(JSON.stringify(this.state.user));
        
        
    }
     showtable(){
        this.setState({
            flag:true,
            id:"",
            userName:"",
            address:"",
            skill:"React",
            save:true,
            update:false
        })
    }
    handelUpdate=(event)=>{
        event.preventDefault();
       let id=this.state.id
        console.log(this.state.user)
     
          Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Apply",
            denyButtonText: `Not Interested`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire("Saved!", "", "success");
              this.setState(prevState => ({

                filteredData: prevState.user.map(
                      el => el.id === id? { ...el, userName:`${this.state.userName}`,address:`${this.state.address}`,skill:`${this.state.skill}` }: el
                    ),
                    flag:false,
                    
                  
                  }))
            } else if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "info");
              this.setState({
                flag:false
              })
            }
            else if(result.isCancel)
            Swal.fire("cancel!", "", "success");
            this.setState({
                flag:false
              })
          });
        }
    handelDelete(id){
        Swal.fire({
            title: "Do you want to delete the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "delete",
            denyButtonText: `Not Interested`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire("deleted!", "", "success");
              this.setState(prevState => ({
                filteredData: prevState.filteredData.filter(el => el.id!==id)
              }))
            } else if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "info");
            }
            else if(result.isCancel)
            Swal.fire("cancel!", "", "success");
          });
        

    }
    handelEdit(id){
         // id.preventDefault();
      let values=this.state.filteredData.filter(el => el.id===id)
      this.setState({
        flag:true,
        save:false,
        update:true,
        show2:false,
        id:values[0].id,
        userName:values[0].userName,
        address:values[0].address

     })
  
    

    }
        onSearchClick = (searchText) => {

            let searchvalue= this.state.user.filter(user =>{ return JSON.stringify(user).includes(searchText)});
     this.setState({
         filteredData:[...searchvalue]
     });
      };
  handeladd=(objuser)=>{
  this.setState({filteredData:[...this.state.filteredData,objuser]})
 }


    
  render() {



    return (
        <>
     
 
    
    <form >
      <div>
      <div>
      <SearchBar
        onSearchTextChange={(term, filteredData) => {
          this.setState({
            filteredData:[...filteredData]
          });
        }}
        onSearchButtonClick={this.onSearchClick}
        placeHolderText={"Search here..."}
        data={this.state.user}
      />
      </div>
        <div className='text'>
        <img src="images\img_113133.png" width={25} height={25} alt="plus" onClick={()=>this.showtable()}></img>
        
        </div>
        </div>
        </form>
      
   
    			<table 
                className='formtable'
                border={1}
				align="center">
				<thead>
					<tr>
						<th>Id</th>
						<th>userName</th>
						<th>Address</th>
						<th>Skill</th>
                        <th>Action</th>
					

					</tr>
				</thead>

				<tbody>
					{
						this.state.filteredData.map((arr, index) => {
							return (
								<tr key={index}>

									<td>{arr.id}</td>
									<td>{arr.userName}</td>
									<td>{arr.address}</td>
									<td>{arr.skill}</td>
                                    <td>
                                        <button type="button" className="btn btn-outline-primary"  onClick={()=>this.handelEdit(arr.id)}>Edit</button>
                                        <button type='button' className="btn btn-outline-danger"  onClick={()=>this.handelDelete(arr.id)} >Delete</button></td>
								

								</tr>
							)
						})
					}
				</tbody>
			</table>
      <form >
        <div style={{display:this.state.flag?"block":"none"}}>
        <table border={1}
        align={'center'}>
            <tbody>
            <tr><td><label>user name</label></td>
            <td><input type="number" value={this.state.id} onChange={this.OnChangeID}/></td>
            </tr>
            <tr>
        <td>
            <label>user name</label>
            </td>
            <td className='inputtext'>
            <input type="text" value={this.state.userName} onChange={this.OnChangeName}/>
        </td>
        </tr>
        <tr>
        <td>
            <label>Address</label>
            </td>
            <td className='inputtext'>
            <textarea value={this.state.address} onChange={this.onChangeAdress}></textarea>
        </td>
        </tr>
        <tr>
        <td>
            <label>Skill</label>
            </td>
            <td className='inputtext'>
            <select value={this.state.skill} onChange={this.onChangeSkill}>
                <option value="react">React</option>
                <option value="node js">Node Js</option>
                <option value="Angular">Angular</option>
            </select>
        </td>
        </tr>
        <tr>
            <td></td>
        <td>{this.state.update&&
            <button type='submit' className='btn btn-outline-primary sm-3' onClick={this.handelUpdate}>Update</button>
        }
            {this.state.save&&
            <button type="submit" className="btn btn-outline-primary" onClick={this.handleSubmit}>submit</button>
        }
            </td>
        </tr>
        </tbody>
        </table>
        </div>
        </form>
      {/* <div> <Edit handeladd={this.handeladd}></Edit></div> */}
          
            </>
    )
  }
}



export default Form