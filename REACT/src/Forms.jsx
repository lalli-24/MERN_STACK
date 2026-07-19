import { useState } from "react";
function Forms(){
    const [User, setUser]=useState(
        {
            name:"",
            email:"",
            password:"",
            phone:"",
            gender:"",
            skills:""
        }
    );
    const change=(e)=>{
        setUser(
            {
                ...User,[e.target.name]:e.target.value
            }
        );
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("Form Submitted.")
    };
    return(
        <>
        <div style={{margin:"20px"}}>
        <h1>Forms</h1>
        <form onSubmit={handleSubmit}>
            <label><b>Name:</b></label>
            <input type="text" name="name" value={User.name} onChange={change} /><br />

            <label><b>Email:</b></label>
            <input type="email" name="email" value={User.email} onChange={change} /><br />
            
            <label><b>Password:</b></label>
            <input type="password" name="password" value={User.password} onChange={change} /><br />

            <label><b>Phone:</b></label>
            <input type="number" name="phone" value={User.phone} onChange={change} /><br />
            
            <label><b>Gender:</b></label>
            <input type="radio" name="gender" value="Male" onChange={change}/>Male
            <input type="radio" name="gender" value="Female" onChange={change} />Female
            <br />
            <label><b>Skills:</b></label>
            <select name="skills" value={User.skills} onChange={change}>
            <option value="">skills:</option>
            <option value="React">React</option>
            <option value="HTML">html</option>
            <option value="js">js</option><br /></select><br />
            <button type="submit"> Submit</button>
        </form>
        </div>
        </>
    )
}
export default Forms