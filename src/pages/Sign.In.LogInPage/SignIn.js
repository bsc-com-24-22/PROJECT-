    import React from "react";
    import './Signin.css';
    import {Router} from 'react-router-dom'; 

    export default function Signin() {
        const handleSubmit = (event) => {
            event.preventDefault();
            const email = document.getElementById("Email").value;
            const password = document.getElementById("password").value;

        
            console.log("Email:", email);
            console.log("Password:", password);
        };

        return (
            <div className="container" style={{ maxWidth: '400px', margin: '50px auto', backgroundColor: '#FFF', padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                <form onSubmit={handleSubmit}>
                    <div className=" flex items-center justify-center">
                    <div className=" border rounded-full w-[200px] h-[200px] border-black"></div>
                    </div>
                    <h2 style={{ marginBottom: '20px', textAlign: 'left' }} className=" font-bold">Sign In</h2>
                    <div className="input-group" style={{ marginBottom: '15px' }}>
                        <label type="email" style={{ display: 'block', marginBottom: '5px' }}>Email</label>
                        <input className=" bg-gray-200" type="text" id="email" name="Email" placeholder="John Doe" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} required />
                    </div>
                    <div className="input-group" style={{ marginBottom: '15px' }}>
                        <label type="password" style={{ display: 'block', marginBottom: '5px' }}>Password</label>
                        <input className=" bg-gray-200" type="password" id="password" name="Password" placeholder="*******" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} required />
                    </div>
                    <button type="submit" style={{  width: '100%', padding: '10px', backgroundColor: '#74512D', color: '#fff', border: 'none', borderRadius: '20px', cursor: 'pointer'}}>Sign In</button>
                </form>
                <div className=" flex justify-between">
                    <button style= { {textAlign: 'left'}} className=" text-black ">Forgot password</button>
                    < button style= { {textAlign: 'right'}} className=" text-blue-700 hover:bg-red-300 ">Sign Up</button>
                </div>
            </div>

            
        );
    }       