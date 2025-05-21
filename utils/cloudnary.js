import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDNARY_CLOUD_NAME,
  api_key: process.env.CLOUDNARY_API_KEY,
  api_secret: process.env.CLOUDNARY_API_SECRET,
});

const uploadOnCloudnary = async (locaFilePath) => {
  try {
    if (!locaFilePath) return null;
    const response = await cloudinary.uploader.upload(locaFilePath, {
      resource_type: "auto",
    });
    fs.unlinkSync(locaFilePath)
    return response;
  } catch (error) {
    fs.unlinkSync(locaFilePath);
    return null;
  }
};
export { uploadOnCloudnary };
