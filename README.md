# E-Commerce Website

## Overview
This project is an e-commerce platform that allows users to browse products, manage their accounts, and make purchases. Admins have additional capabilities to manage products and orders.

## Features

### User Features
- **Product Sorting**: Users can sort products based on categories and prices.
- **Cart Management**: Users can add products to their cart.
- **Product Descriptions**: Users can view detailed descriptions of each product.
- **Order Status**: Users can check the status of their orders.
- **User Registration and Login**: Users can register, log in, and manage their accounts.
- **Password Recovery**: Users can reset their passwords using security questions and answers.
- **Change Password**: Users can change their passwords.
- **Payment Options**: Users can complete purchases using PayPal or credit/debit cards.

### Admin Features
- **Manage Products**: Admins can add new products and update existing ones.
- **Manage Categories**: Admins can add or delete product categories.
- **Change Product Status**: Admins can change the status of products.
- **View Orders**: Admins can view all orders placed by users.

## Technologies Used
- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [PayPal API](https://developer.paypal.com/docs/api/overview/)
- [Braintree](https://www.braintreepayments.com/)

## Installation

1. **Create a `.env` file** in the root directory and add the following environment variables:

   ```plaintext
   REACT_APP_API=http://localhost:YourPort
   PORT=8080  # for backend
   MONGO_URL=your_mongo_db_url
   JWT_SECRET=your_jwt_secret
   BRAINTREE_MERCHANT_ID=your_braintree_merchant_id
   BRAINTREE_PUBLIC_KEY=your_braintree_public_key
   BRAINTREE_PRIVATE_KEY=your_braintree_private_key
  
 2. **Create a Braintree account:**
   - Go to the [Braintree website](https://www.braintreepayments.com/).
   - Sign up for a developer account to obtain your Braintree keys.

3. **Install the dependencies:**
   ```bash
   npm install

3. **Start the application:**
   ```bash
   npm start


  
## Getting Admin Access
**To gain admin access in the application:**
```plaintext
-Create an account through the user registration process.

-Access your database (e.g., MongoDB) where user accounts are stored.

-Find the user account you created and update the role field:

-Change the role to 1 for admin access.

-Change the role to 0 for regular user access.
