import { Router } from "express";
import multer, { diskStorage } from "multer";
import { extname, join } from "path";
import Seed from "../models/seeds.model.js";

const router = Router();

// Multer configuration
const storage = diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Ensure the "uploads/" directory exists
  },
  filename: (req, file, cb) => {
    const ext = extname(file.originalname);
    const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
    cb(null, uniqueName);
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png/;
    const ext = extname(file.originalname).toLowerCase();
    if (allowedTypes.test(ext)) {
      cb(null, true);
    } else {
      cb(new Error("Only images are allowed"));
    }
  },
});

// POST /api/seeds - Add a new seed
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name, code, stock } = req.body;

    // Validate input fields
    if (!name || !code || !stock) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    const image = req.file.filename;

    const seed = new Seed({ name, code, stock, image });
    await seed.save();

    res.status(201).json({ message: "Seed added successfully", seed });
  } catch (err) {
    console.error("Error adding seed:", err.message);
    res.status(500).json({ message: "Error adding seed" });
  }
});

// GET /api/seeds - Get all seeds
router.get("/", async (req, res) => {
  try {
    const seeds = await Seed.find();

    const seedsWithImageURL = seeds.map(seed => ({
      ...seed._doc,
      image: `${req.protocol}://${req.get("host")}/uploads/${seed.image}`
    }));

    res.json(seedsWithImageURL);
  } catch (err) {
    console.error("Error fetching seeds:", err.message);
    res.status(500).json({ message: "Error fetching seeds" });
  }
});


export default router;