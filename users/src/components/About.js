import React from 'react'
import Layout from '../layouts/Layout'

const About = () => {
  return (
    <Layout>
      <div className="row contactUs ">
        <div className="col-md-6 ">
          <img
            src="/assests/aboutUs.jpg"
            alt="contactus"
            style={{ width: "85%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2 " >
          Welcome to AlphaMart, your one-stop destination for all your shopping 
          needs! We are dedicated to providing our customers with a seamless and enjoyable 
          online shopping experience. Our extensive range of high-quality products spans 
          categories such as electronics, fashion, and home essentials, all carefully selected 
          to meet diverse tastes and preferences.
          <br></br>
          We believe in exceptional customer service and strive to exceed your expectations.
           Our team is passionate about curating the best products and ensuring that each order
            is handled with care. Join us on this exciting shopping journey and discover great 
            deals and unique finds tailored just for you!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
