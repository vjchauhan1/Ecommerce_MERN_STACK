import React, { useState } from 'react'
import Layout from '../../layouts/Layout';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/ecommerce/auth/forget-password`,
        { email, newPassword, answer });
      if (res && res.data.success) {

        //console.log("before toats")
        //console.log("Toast message:", res.data);
        //  toast.success("");
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
          <h4 className='title'>Reset Password</h4>

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
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="form-control"
              id="inputEmail"
              placeholder='Enter Your New Password'
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="inputEmail"
              placeholder='What is your Favourite Sport'
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>


  )
}

export default ForgetPassword
