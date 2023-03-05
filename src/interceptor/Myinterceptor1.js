import axios from "axios";
export function Myinterceptor1(){
    axios.interceptors.request.use((req)=>{
      //  console.log(req);
        req.headers["authorize"]="welcome";
        req.headers["position"]="admin";
        return req;


    })

}