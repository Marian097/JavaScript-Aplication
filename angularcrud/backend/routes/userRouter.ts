import express, {Request, Response} from "express";
import * as bodyParser from "body-parser";
import * as userModel from "../models/user";
import {User} from "../types/User";
import { UploadedFile } from "express-fileupload";
import path from "path";
import sharp from "sharp";




const userRouter = express.Router();
var jsonParser = bodyParser.json()
userRouter.get("/", async (req: Request, res: Response) => {
  userModel.findAll((err: Error, users: User[]) => {
    if (err) {
      return res.status(500).json({"errorMessage": err.message});
    }

    res.status(200).json({"data": users});
  });
});


userRouter.get("/:id", async (req: Request, res: Response) => {
  const userId: number = Number(req.params.id);
  userModel.findOne(userId, (err: Error, user: User) => {
    if (err) {
      return res.status(500).json({"message": err.message});
    }
    res.status(200).json({"data": user});
  })
});

userRouter.post("/",jsonParser, async (req: Request, res: Response) => {
  console.log(req.body);
  console.log(req.files);
  
  let fileToUplad:any;
  let uploadPath;
  fileToUplad = req.files!.poza as UploadedFile;
  const newFileName = `${Date.now()}-_${fileToUplad.name}`
  uploadPath = path.join(__dirname, "..", "/uploads/", newFileName)
  await sharp(fileToUplad.data)
  .resize({width: 300,})
  .toFile(uploadPath)


  const newUser: User = req.body;
  newUser["poza"] = newFileName;
  userModel.create(newUser, (err: Error, userId: number) => {
    if (err) {
      return res.status(500).json({"message": err.message});
    }

    res.status(200).json({"userId": userId});
  });
});

// Edit user
userRouter.put("/:id", async (req: Request, res: Response) => {
  let fileToUplad: any;
  let uploadPath;

  if (req.files && req.files.poza) {
    fileToUplad = req.files.poza as UploadedFile;
    const newFileName = `${Date.now()}-_${fileToUplad.name}`;
    uploadPath = path.join(__dirname, "..", "/uploads/", newFileName);

    await sharp(fileToUplad.data)
      .resize({ width: 300 })
      .toFile(uploadPath);

    req.body.poza = newFileName;
  }

  const user: User = req.body;
  user.id = Number(req.params.id); // 🟢 FIX: adaugă ID-ul userului

  console.log("User primit pentru update:", user);

  userModel.update(user, (err: Error) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    res.status(200).json({ message: "success" });
  });
});

// Delete user
userRouter.delete("/:id", async (req: Request, res: Response) => {
  const userId = Number(req.params.id);
  userModel.deleteUser({ id: userId } as User, (err: Error) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.status(200).json({ message: 'success' });
  });
});

export {userRouter};