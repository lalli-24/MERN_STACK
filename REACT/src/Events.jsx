function Events(){
    function press(){
        alert("key is pressed ")
    }
    return (
        <>
        <div>
            <button
            onMouseOver={
                ()=>alert("Jerry Files.")
            }
            >Jerry</button>

            <button
            onMouseOver={
                ()=>alert("Tom Files.")
            }
            >Tom</button>
        </div>
        <input onKeyDown={press}/>
        <input onFocus={()=>console.log("focused")} />
        <input onBlur={()=>console.log("blurred")} />
        </>
    )
}
export default Events