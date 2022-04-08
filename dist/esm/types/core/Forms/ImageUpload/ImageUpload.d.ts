import React from "react";
interface ImageUploadProps {
    onChange: (file: File | null) => void;
    path?: string;
}
declare const ImageUpload: React.FC<ImageUploadProps>;
export default ImageUpload;
