import { useNavigate } from "react-router-dom";
import { useState } from "react";


function Login(){

    const navigate = useNavigate();
    const [email ,setEmail] = useState("");
    const [password ,setPassword] = useState("");

    const mockUser = {
        email:"admin@gmail.com",
        password:"bhupendra"
    }

    const handleLogin = () =>{
        if (email === mockUser.email && password === mockUser.password){
            localStorage.setItem("isAuth","true");
            navigate("admin");
        }else(
            alert("Invalid credentials")
        )
    }

    return (
            <div  className="h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-6 rounded shadow w-80">
                    <h2 className="text-xl font-bold mb-4">Login</h2>

                    <input type="email"  placeholder="Email" className="w-full border p-2 mb-3" onChange={(e)=>setEmail(e.target.value)} />
                    <input type="password"  placeholder="Password" className="w-full border p-2 mb-3" onChange={(e)=>setPassword(e.target.value)} />

                    <button onClick={handleLogin} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                        Submit
                    </button>
                </div>
            </div>  
    )
}
export default Login;