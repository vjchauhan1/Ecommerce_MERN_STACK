import React from 'react';
import Layout from '../layouts/Layout';

const Policy = () => {
    return (
        <Layout>
          <div className="row contactUs ">
            <div className="col-md-6 ">
              <img
                src="/assests/privacy.jpg"
                alt="contactus"
                style={{ width: "50%" }}
              />
            </div>
            <div className="col-md-4">
            <h2>Privacy Policy</h2>
    <p><strong>Effective Date:</strong>  30/02/2023</p>

    <p>At AlphaMart, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you visit our website or make a purchase from us.</p>

    <h3>Information We Collect</h3>
    <p>We collect the following types of information:</p>
    <ul>
        <li><strong>Personal Information:</strong> When you create an account, make a purchase, or subscribe to our newsletter, we may collect personal information such as your name, email address, phone number, billing address, and shipping address.</li>
        <li><strong>Payment Information:</strong> We do not store your payment information. All payment transactions are processed through a secure third-party payment processor.</li>
        <li><strong>Browsing Information:</strong> We may collect information about your browsing activity, including your IP address, browser type, and pages visited on our site through cookies and similar technologies.</li>
    </ul> 
            </div>
          </div>
        </Layout>
      );
    };

export default Policy;
