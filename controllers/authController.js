import userModel from "../models/userModel.js";
import orderModel from "../models/orderModel.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address, answer } = req.body;
        if (!name) {
            return res.send({ message: `Name is required` })
        }
        if (!email) {
            return res.send({ message: `Email is required` })
        }
        if (!password) {
            return res.send({ message: `Password is required` })
        }
        if (!phone) {
            return res.send({ message: `Phone.No is required` })
        }
        if (!address) {
            return res.send({ message: `Address is requires` })
        }
        if (!answer) {
            return res.send({ message: `Answer is requires` })
        }

        //exixsing user
        const existinguser = await userModel.findOne({ email });
        //verify if exist
        if (existinguser) {
            return res.status(200).send({
                success: false,
                message: `Already Register Please Login`
            })
        }


        // hashing password
        const hashedPassword = await hashPassword(password);

        //Saving User
        const user = await new userModel({
            name,
            email,
            phone,
            address,
            password: hashedPassword,
            answer
        }).save();

        res.status(200).send({
            success: true,
            message: `User Register Successfully`,
            user,
        })



    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: `Error in registertaion`,
            error
        })
    }

}

//for login
export const loginController = async (req, res) => {
    try {
        //validation
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: "Invalid email or password",
            });
        }
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(500).send({
                success: false,
                message: "Email is not Regrister"
            })
        }
        //comparing password with hashPassword
        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.status(200).send({
                success: false,
                message: "Invalid Password",
            });
        }
        //jwt
        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });
        res.status(200).send({
            success: true,
            message: "login successfully",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                adddress: user.address,
                role: user.role,
            },
            token,
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in login",
            error,
        });
    }
}

export const testController = (req, res) => {
    res.send('protetced')

}

export const forgetPasswordController = async (req, res) => {
    try {
        const { email, newPassword, answer } = req.body
        if (!email) {
            res.status(400).send({ message: "Email is required" })
        }
        if (!answer) {
            res.status(400).send({ message: "answer is required" })
        }
        if (!newPassword) {
            res.status(400).send({ message: "New Password is required" })
        }
        const user = await userModel.findOne({ email, answer })
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User Not found"
            })
        }
        const hashed = await hashPassword(newPassword);
        await userModel.findByIdAndUpdate(user._id, { password: hashed });
        res.status(200).send({
            success: true,
            message: "Password reset Sucessfully"
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Something Went wrong"
        })
    }
};

//update profile
export const updateProfileController = async (req, res) => {
    try {
      const { name, email, password, address, phone } = req.body;
      const user = await userModel.findById(req.user._id);
      //password
      if (password && password.length < 6) {
        return res.json({ error: "Passsword Should be atleast 6 Charactres" });
      }
      const hashedPassword = password ? await hashPassword(password) : undefined;
      const updatedUser = await userModel.findByIdAndUpdate(
        req.user._id,
        {
          name: name || user.name,
          password: hashedPassword || user.password,
          phone: phone || user.phone,
          address: address || user.address,
        },
        { new: true }
      );
      res.status(200).send({
        success: true,
        message: "Profile Updated SUccessfully",
        updatedUser,
      });
    } catch (error) {
      console.log(error);
      res.status(400).send({
        success: false,
        message: "Error WHile Update profile",
        error,
      });
    }
  };


 //orders
export const getOrdersController = async (req, res) => {
    try {
      const orders = await orderModel
        .find({ buyer: req.user._id })
        .populate("products", "-photo")
        .populate("buyer", "name");
      res.json(orders);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error WHile Geting Orders",
        error,
      });
    }
  };
  //all orders for admin only
  export const getAllOrdersController = async (req, res) => {
    try {
      const orders = await orderModel
        .find({})
        .populate("products", "-photo")
        .populate("buyer", "name")
        .sort([["createdAt", -1]]);
      res.json(orders);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error WHile Geting Orders",
        error,
      });
    }
  };
  
  
  
  //order status
  export const orderStatusController = async (req, res) => {
    try {
      const { orderId } = req.params;
      const { status } = req.body;
      const orders = await orderModel.findByIdAndUpdate(
        orderId,
        { status },
        { new: true }
      );
      res.json(orders);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error While Updateing Order",
        error,
      });
    }
  };