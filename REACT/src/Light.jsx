import { useState } from "react";
function Lights(){
    const [isOn,setIsOn]=useState(false)
    return(<>
        <div
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          backgroundColor: isOn ? "yellow" : "gray",
          margin: "20px auto",
          boxShadow: isOn ? "0 0 30px yellow" : "none",
          transition: "3s",
        }}
      ></div>
        
        <button onClick={()=>setIsOn(!isOn)}>
            {isOn ? "Turn OFF" : "Turn ON"}
        </button>
        </>
    )
}
export default Lights