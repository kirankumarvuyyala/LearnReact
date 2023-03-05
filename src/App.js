
import './App.css';
// import Cards from './Cards';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from './Footer';
import './index.css';
import User from './User';
import Form from './Form';
import Cards from './Cards'
import { Routes, Route } from 'react-router-dom'; 
import Navbar from './Navbar';
import HttpDemo1 from './httpdemo/HttpDemo1';
import { Myinterceptor1 } from './interceptor/Myinterceptor1';
import { Myinterceptor2 } from './interceptor/Myintercepter2';
import SignUp from './login/SignUp';
import Login from './login/Login';
// import Password from './Password';


function App() {
  Myinterceptor1();
  Myinterceptor2();


  return (
 <>
    <Navbar></Navbar>
 <Routes>
     
     <Route exact path='/' element={<Login/>}></Route>
     <Route exact path='/Login' element={<Login/>}></Route>  
     <Route exact path='/SignUp' element={<SignUp/>}></Route>  
     <Route exact path='/User' element={<User/>}></Route>
     <Route exact path='/Cards' element={<Cards/>}></Route>
     <Route exact path='/Form' element={ <Form/>}></Route>
     <Route exact path='/HttpDemo1' element={<HttpDemo1/>}></Route>
   </Routes>
{/* <Form></Form> */}
{/* <HttpDemo1></HttpDemo1> */}
   {/* <Edit></Edit> */}
   {/* <Model1></Model1> */}
   {/* <Login></Login> */}
   {/* <SignUp></SignUp> */}
   <Footer></Footer>
 
    {/* <Edit></Edit> */}
 </>
  );
}

export default App;
