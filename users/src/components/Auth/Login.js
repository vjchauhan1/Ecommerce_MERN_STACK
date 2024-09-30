import React, { useState } from 'react'
import Layout from '../../layouts/Layout';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/authProvider';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/ecommerce/auth/login`,
        { email, password });
      if (res && res.data.success) {
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        //console.log("before toats")
        //console.log("Toast message:", res.data);
        //  toast.success("");
        //toast.success(res.data.message)
        navigate('/')

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
          <h4 className='title'>Login</h4>

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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <div className='mt-3'>
            <button
              type="button"
              className="btn btn-link"
              style={{ textDecoration: 'underline', background: 'none', border: 'none', padding: 0, color: 'green', cursor: 'pointer' }}
              onClick={() => { navigate('/forget-password') }}>
              Forget Password?
            </button>
          </div>


        </form>
      </div >
    </Layout>
  )
}
export default Login
