import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./First.css"
import Loader from "./Loader";
const User = () => {
	let token=window.localStorage.getItem('authorized');
	let navigateBack=useNavigate();
	
	const [currentPage, setCurrentpage] = useState(1);
	const url = `https://reqres.in/api/users?page=${currentPage}`;
	let cache = useRef({});
	const [arr, setArr] = useState([]);
    const[total_pages,setTotal_pages]=useState(0);
	let [loading, setLoading] = useState(true);
	let pageNumbers=[];
	

	const fetchpost = async () => {
		if(!token)
		{
			navigateBack("/Login");
	
		}
		if (cache.current[url]) {
			const data = cache.current[url];
			setArr(data.data);

		}
		else {
			setLoading(true);
		
				const res = await axios.get(`https://reqres.in/api/users?page=${currentPage}`);

		
					setArr(res.data.data);
					// console.log("headers  "+res.headers);
					cache.current[url] = res.data;
					setTotal_pages(res.data.total_pages);
					// console.log(cache);
					setLoading(false);
		}
	}



	useEffect(() => {
		//document.body.style.overflow = "hidden";
		fetchpost();
		
	},[currentPage]);

	for (let i = 1; i <= total_pages; i++) {
		pageNumbers.push(i);
	  }

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


	return (
		<>
		
			<div >{loading ? <Loader></Loader> : " "}
			</div>
			

			<table border={1}
			className="UserTable"
				align="center">
				<thead>
					<tr>
						<th>Id</th>
						<th>Email</th>
						<th>FirstName</th>
						<th>LastName</th>
						<th>Avatar</th>

					</tr>
				</thead>

				<tbody>
					{
						arr.map((arr, index) => {
							return (
								<tr key={index}>

									<td>{arr.id}</td>
									<td>{arr.email}</td>
									<td>{arr.first_name}</td>
									<td>{arr.last_name}</td>
									<td><img width={80} height={80} alt={arr.avatar} src={arr.avatar}></img></td>

								</tr>
							)
						})
					}
				</tbody>
			</table>

			<br></br>
			<div className="text-xs-center">
				<nav aria-label="Page navigation example">
					<ul className="pagination justify-content-center" >
						<li className="page-item Previous disabled" key={0}><button onClick={() => setPageNumber(currentPage-1)} className="page-link  " >&laquo;</button></li>
						{pageNumbers.map(number => (
                            <li key={number}  className={`page-item ${currentPage === number ?"active" : ""}`} >
                          <button onClick={() => setPageNumber(number)} className='page-link'>{number}</button>
                            
                          
                          </li>
                          ))}

						<li className="page-item Next" key={2}><button  onClick={() => setPageNumber(currentPage+1)} className="page-link ">&raquo;</button></li>
					</ul>
				</nav>
			</div>


		</>
	)
}
export default User;




