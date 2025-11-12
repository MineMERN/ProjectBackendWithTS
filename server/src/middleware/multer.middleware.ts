import multer from "multer";
import path from "path";
import fs from "fs";

const filePath = path.join(process.cwd(), "public");
if(!fs.existsSync(filePath)){
    fs.mkdirSync(filePath, {recursive: true})
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, filePath)
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, `${file.fieldname}-${Date.now()}${ext}`);
    }
});

const fileFilter = (req: any, file: any, cb: Function) => {
    cb(null, true)
}

export const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 10 * 1024* 1024
    }
})