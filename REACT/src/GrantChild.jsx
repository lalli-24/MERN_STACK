import {useContext} from "react";
import UserContext from "./UserContact.jsx";
function GrandChild(){
    const name=useContext(UserContext);
    return <h2>{name}</h2>
}
export default GrandChild