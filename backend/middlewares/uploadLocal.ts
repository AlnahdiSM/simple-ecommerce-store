import multer, { FileFilterCallback, StorageEngine } from 'multer';
import { promises as fs } from 'fs';
import path from 'path';
import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';


dotenv.config();

const profileDir = './Profiles'; // Ensure the backslashes are correctly escaped
const MAX_SIZE = 2 * 1024 * 1024;
const ALLOWED_TYPES = ['application/pdf', 'image/jpeg', 'image/png', 'image/webp'];

const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback): void => {
  if (ALLOWED_TYPES.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only PDF, JPG, PNG, and WEBP files are allowed.'));
  }
};

const upload = multer({
  storage: multer.memoryStorage() as StorageEngine,
  limits: { fileSize: MAX_SIZE },
  fileFilter: fileFilter,
});

const copyFileToProfileDir = () => async (req: Request, res: Response, next: NextFunction): Promise<void> => {

  if (!req.files) {
    return next(new Error('No file uploaded'));
  }

  try {
    // Ensure the directory exists
    await fs.mkdir(profileDir, { recursive: true });

    if (req.files) {
      const files = req.files as { [fieldname: string]: Express.Multer.File[] };

      if (files.cardCover) {
        const fileName = (files.cardCover[0].originalname);
        console.log("🚀 ~ copyFileToProfileDir ~ fileName:", fileName)
        
        const destPath = path.join(profileDir, fileName);

        req.cardCover = fileName;
        await fs.writeFile(destPath, files.cardCover[0].buffer);
      }
      if (files.img1) {
        const fileName = (files.img1[0].originalname);
        const destPath = path.join(profileDir, fileName);

        req.img1 = fileName;
        await fs.writeFile(destPath, files.img1[0].buffer);
      }
      if (files.img2) {
        const fileName = (files.img2[0].originalname);
        const destPath = path.join(profileDir, fileName);

        req.img2 = fileName;
        await fs.writeFile(destPath, files.img2[0].buffer);
      }
      if (files.img3) {
        const fileName = (files.img3[0].originalname);
        const destPath = path.join(profileDir, fileName);

        req.img3 = fileName;
        await fs.writeFile(destPath, files.img3[0].buffer);
      }
      if (files.img4) {
        const fileName = (files.img4[0].originalname);
        const destPath = path.join(profileDir, fileName);

        req.img4 = fileName;
        await fs.writeFile(destPath, files.img4[0].buffer);
      }

   
    }

    

    next();
  } catch (error) {
    console.error('Failed to write file in profile directory', error);
    next(error);
  }
};

export { upload, copyFileToProfileDir };

// Additional TypeScriimage2 definitions
declare module 'express-serve-static-core' {
  interface Request {
    cardCover?: string;
    img1?: string;
    img2?: string;
    img3?: string;
    img4?: string;
    file?: Express.Multer.File & { local?: string };
    files?: { [fieldname: string]: Express.Multer.File[] };
  }
}
