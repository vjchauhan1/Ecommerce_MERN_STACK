import React, { useState } from 'react';
import Layout from '../../layouts/Layout';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [answer, setAnswer] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/ecommerce/auth/register`,
                { name, email, password, phone, address, answer });
            if (res && res.data.success) {
                //console.log("before toats")
                //console.log("Toast message:", res.data);
                toast.success(res.data.message);
                //toast.success(res.data.message)
                navigate('/login')

            }
            else {
                toast.error("Something wrong")
            }

        } catch (error) {
            console.log(error);
            toast.error("Something Went Wrog")

        }
    }
    return (
        <Layout>
            <div className='form-container '  >
                <form onSubmit={handleSubmit}>
                    <h4 className='title'>Register Account</h4>
                    <div className="mb-3">
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="form-control"
                            id="inputEmail"
                            placeholder='Enter Your Name'
                            required
                        />
                    </div>
                    <div className="mb-3">

                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            id="inputEmail"
                            placeholder='Enter Your Email'
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            id="inputEmail"
                            placeholder='Enter Your Password'
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            className="form-control"
                            id="answer"
                            placeholder='What is your Favourite Sports'
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="form-control"
                            id="inputEmail"
                            placeholder='Enter Your Phone number'
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="form-control"
                            id="inputEmail"
                            placeholder='Enter Your Address'
                            required
                        />
                    </div>



                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>

            </div >
        </Layout>


    )
}

export default Register
