import React from 'react'
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';

//now making resistration backend
import {useState} from 'react';

const Register = () => {

    //extra thing
    const [user,setUser]=useState({
        name:"",email:"",password:""
    });
    let name,value;
    const handleInputs=(e)=>{
        console.log(e);
        name=e.target.name;
        value=e.target.value;

        setUser({...user, [name]:value})
    }
    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Register</h1>
                <hr />
                <div class="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form>
                            <div class="form my-3">
                                <label for="name">Full Name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="name"
                                    placeholder="Enter Your Name"
                                    name="name"
                                    autoComplete='off'
                                    value={user.name}  
                                    onChange={handleInputs}
                                />
                            </div>
                            <div class="form my-3">
                                <label for="email">Email address</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="email"
                                    placeholder="name@example.com"
                                    name="email"
                                    autoComplete='off'
                                    value={user.email}  
                                    onChange={handleInputs}
                                />
                            </div>
                            <div class="form  my-3">
                                <label for="password">Password</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="password"
                                    placeholder="Password"
                                    name="password"
                                    autoComplete='off'
                                    value={user.password}  
                                    onChange={handleInputs}
                                />
                            </div>
                            <div className="my-3">
                                <p>Already has an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
                            </div>
                            <div className="text-center">
                                <button class="my-2 mx-auto btn btn-dark" type="submit" >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register