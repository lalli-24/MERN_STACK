import { useState, useEffect } from "react";
import axios from "axios";

function API() {
    const API = "https://jsonplaceholder.typicode.com/users";

    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        getUsers();
    }, []);

    async function getUsers() {
        try {
            const response = await axios.get(API);
            setUsers(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    async function addUser() {
        if (name === "" || email === "") {
            alert("Please fill all the details");
            return;
        }

        try {
            const response = await axios.post(API, {
                name,
                email,
            });

            setUsers([...users, response.data]);
            setName("");
            setEmail("");

            alert("User Added Successfully");
        } catch (error) {
            console.error(error);
        }
    }

    async function updateUser(id) {
        try {
            const response = await axios.put(`${API}/${id}`, {
                name: "Lalli",
                email: "lalli@gmail.com",
            });

            setUsers(
                users.map((user) =>
                    user.id === id ? response.data : user
                )
            );

            alert("User Updated Successfully");
        } catch (error) {
            console.error(error);
        }
    }

    async function deleteUser(id) {
        try {
            await axios.delete(`${API}/${id}`);

            setUsers(users.filter((user) => user.id !== id));

            alert("User Deleted Successfully");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div>
                <h1>React CRUD Operations</h1>

                <label><b>Name:</b></label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <br /><br />

                <label><b>Email:</b></label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br /><br />

                <button onClick={addUser}>ADD</button>

                <hr />

                {users.map((user) => (
                    <div
                        key={user.id}
                        style={{
                            margin: "20px",
                            padding: "10px",
                            border: "2px solid brown",
                        }}
                    >
                        <h2>{user.name}</h2>
                        <h3>{user.email}</h3>

                        <button onClick={() => updateUser(user.id)}>
                            Update
                        </button>

                        <button
                            onClick={() => deleteUser(user.id)}
                            style={{ marginLeft: "10px" }}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default API;