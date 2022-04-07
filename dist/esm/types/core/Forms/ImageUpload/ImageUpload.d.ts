import React from "react";
import "antd/dist/antd.css";
interface ImageUploadProps {
    onChange: (file: File | null) => void;
    path?: string;
}
declare const ImageUpload: React.FC<ImageUploadProps>;
export default ImageUpload;
