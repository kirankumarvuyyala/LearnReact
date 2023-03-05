import axios from "axios";
export function Myinterceptor2(){
axios.interceptors.response.use((res)=>res,
(err)=>{
    alert("interceptor called");
    // if(err.response.status==="404")
    //     {
    //     throw new Error(`${err.confing.url} not found`);

});
}