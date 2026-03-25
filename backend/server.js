import dotenv from "dotenv";
import express from "express";
import connectDB from "./src/config/db.js";
import Patient from "./src/models/Patient.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const startServer = async () => {
  await connectDB();

  // try {
  //   const existingPatient = await Patient.findOne({
  //     email: "susilveira1@gmail.com",
  //   });

  //   if (!existingPatient) {
  //     const newPatient = await Patient.create({
  //       name: "Suzana Aparecida Silveira",
  //       age: 23,
  //       email: "susilveira1@gmail.com",
  //       phone: "12 0000-0000",
  //     });

  //     console.log("Patient created successfully:");
  //     console.log(newPatient);
  //   } else {
  //     console.log("Test patient already exists:");
  //     console.log(existingPatient);
  //   }
  // } catch (error) {
  //   console.error("Error creating patient:", error.message);
  // }

  const app = express();

  app.use(express.json());

  app.use("/api/auth", authRoutes);

  const PORT = process.env.PORT || 5000;

  app.use(express.json());

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
