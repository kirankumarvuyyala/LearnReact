import React from 'react'
import axios from "axios";
import "./First.css"
import { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
export default function Cards() {

	let token=window.localStorage.getItem('authorized');
	let navigateBack=useNavigate();
  const [currentPage, setCurrentpage] = useState(1);
	const url = `https://reqres.in/api/=${currentPage}`;
	let cache = useRef({});
	const [arr, setArr] = useState([]);
    const[total_pages,setTotal_pages]=useState(0);
	//let [loading, setLoading] = useState(true);
	let pageNumbers=[];
	

	const fetchpost = async () => {


		if (cache.current[url]) {
			const data = cache.current[url];
			setArr(data.data);

		}
		else {
		//	setLoading(true);
		
				const res = await axios.get(`https://reqres.in/api/users?page=${currentPage}`);

		
					setArr(res.data.data);
					console.log("headers  "+res.headers);
					cache.current[url] = res.data;
					setTotal_pages(res.data.total_pages);
					// console.log(cache);
				//	setLoading(false);
		}
	}



	useEffect(() => {
  if(!token)
    {
      navigateBack("/Login");
    }
		fetchpost();
		
	},[currentPage]);
    let next = document.querySelector('.Next');
	let previous = document.querySelector('.Previous');
	

	let setPageNumber = (number) => {
		// console.log('pagenumbers '+number);
	
		if (number === 1) {

			previous.classList.add('disabled')
			next.classList.remove('disabled');

		}
		else {
			previous.classList.remove('disabled')
			next.classList.add('disabled');
		}
		setCurrentpage(number);
	}


	for (let i = 1; i <= total_pages; i++) {
		pageNumbers.push(i);
	  }
  return (
    <>
    {
    arr.map((array,index)=>{
        return(
    
            <div className="card" key={index}>
              <img className="image" src={array.avatar} alt="Card"/>
              <div >
                <h1>Id:{array.id}</h1>
                <h5> FullName:{array.first_name} {array.last_name}</h5>
                <p > Email:{array.email}</p>
                {/* <p className="card-text"><small className="text-muted">{array.last_name}</small></p> */}
              </div>
            </div>
            
            
        )
})
}
<br></br>
<div className="text-xs-center">
				<nav aria-label="Page navigation example">
					<ul className="pagination justify-content-center" >
						<li className="page-item Previous disabled" key={0}><button onClick={() => setPageNumber(currentPage-1)} className="page-link  ">&laquo;</button></li>
						{pageNumbers.map(number => (
                            <li key={number}  className={`page-item ${currentPage === number ?"active" : ""}`} >
                          <button onClick={() => setPageNumber(number)} className='page-link'>
                            {number}
                          </button>
                          </li>
                          ))}

						<li className="page-item Next" key={2}><button  onClick={() => setPageNumber(currentPage+1)} className="page-link ">&raquo;</button></li>
					</ul>
				</nav>
			</div>

</>
    
  )
}
