import {useEffect, useState} from "react";
import userContext from "./UserContact.jsx";
import Parent from "./Parent.jsx"
import "./Count.css";
function Count(){
    const [count,setCount]=useState(0);
    const [Mobile,BuyMobile]=useState(false);
    const [Lunch,FinishLunch]=useState("");
    useEffect(
        ()=>{document.title=`Count :$(count)`;
        },[count]
    );
    return (
        <>
        <h1 className="count">Count:{count}</h1>
        <div className="counting">
            <button
                onDoubleClick={
                    ()=>setCount(count+1)
                }> 
                +1
            </button>
            <button
                onDoubleClick={
                    ()=>setCount(count-1)
                }> 
                -1
            </button>
        </div>
        <h2>Mobile:{Mobile ? "Android": "iphone"}</h2>
        <button onClick={()=>{
            BuyMobile(!Mobile)
        }}>
            Change
        </button>
        <h2>I ate my {Lunch} for Lunch.</h2>
        <input type="text" placeholder="Dal Rice"
        value={Lunch}
        onChange={
            (e)=>FinishLunch(e.target.value)
        } 
        />
        <div>

        </div>
        <userContext.Provider value="Suri">
            <Parent />
        </userContext.Provider>
        </>
    );
}
export default Count;