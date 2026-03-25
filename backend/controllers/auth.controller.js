import { User } from "../src/models/User.js";
import bcryptjs from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import { sendVerificationEmail } from "../mailtrap/emails.js";

export const signup = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    if (!email || !password || !name) {
      throw new Error("Todas as lacunas são obrigatórias");
    }

    const userAlreadyExists = await User.findOne({ email });

    if (userAlreadyExists) {
      return res
        .status(400)
        .json({ success: false, message: "esse usuario ja existe" });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
    const verificationToken = Math.floor(
      10000 + Math.random() * 90000,
    ).toString();

    const user = new User({
      email,
      password: hashedPassword,
      name,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 15 * 60 * 1000,
    });

    await user.save();

    console.log("User saved successfully");

    generateTokenAndSetCookie(res, user._id);

    console.log("Sending verification email to:", user.email);

    await sendVerificationEmail(user.email, verificationToken);

    console.log("Verification email sent successfully");

    res.status(201).json({
      sucess: true,
      message: "Usuario Criado com Sucesso!",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    console.error("SIGNUP ERROR:", error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  res.send("login routes");
};

export const logout = async (req, res) => {
  res.send("logout routes");
};
