import React from 'react'
import Layout from '../layouts/Layout'
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout>
      <div className="row contactUs ">
        <div className="col-md-6 ">
          <img
            src="/assests/contactUs.avif"
            alt="contactus"
            style={{ width: "85%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Any query and info about prodduct feel free to call anytime.<br></br>
             We 24X7 Available
          </p>
          <p className="mt-3">
            <BiMailSend /> : alphaMart-contact@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 0123-456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};
export default Contact;
