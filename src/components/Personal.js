import React ,{useEffect , Fragment}from "react";
import  AOS from "aos";
import "aos/dist/aos.css";
import './Personal.css';
const Personal=()=>{
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
        AOS.refresh();
      }, []);
    
return(<Fragment>
  <div style={{textAlign:"center"}}>
    Dashbord
</div>

</Fragment>)
}
export default Personal