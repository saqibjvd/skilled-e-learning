"use client"
import Reaxt, {useState} from "react";
import Link from "next/link";


export default function Register() {

// const [name, setName ] = useState("");
// const [email, setEmail ] = useState("");
// const [password, setPasswrd] = useState("");


// const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name , email && password) {
  
//       let newUser = {
//         name: name,
//         email: email,
//         password: password
//       }
//       setName("");
//       setEmail("");
//       setPasswrd("")
    
//       };
    


    return (
        <div className="flex min-h-screen flex-col item-center justify-between p-24">
        <div className="bg-[#212121] p-8 rounded shadow-md w-96">
        <h1 className="text-4xl text-center font-semibold mb-8 text-white">Register</h1>
        <form>
        <input type="text"
            className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus: outline-none focus: border-blue-400 focus: text-black"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
            required />

            <input type="text"
            className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus: outline-none focus: border-blue-400 focus: text-black"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            required />

             <input type="paswword"
            className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus: outline-none focus: border-blue-400 focus: text-black"
            placeholder="password"
            onChange={(e) => setPasswrd(e.target.value)}
            required />
            <button type="submit" 
            // onClick={handleSubmit}
            className="w-full bg-blue-500 text-white py-2 rounded hover: bg-blue 600"
            >Register</button>
        
        </form>
        <div className="text-center text-gray-500 mt-4 ">- OR -</div>
        <Link className="black text-center text-blue-500 hover: undeline mt-2 " 
        href="/login">Login with existig account</Link>
    
        </div>
        </div>
    )

}
// };