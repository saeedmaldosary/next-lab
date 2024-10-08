"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");

  const handleUploadSuccess = (result: any) => {
    console.log("Upload result:", result);
    if (result.info && result.info.public_id) {
      setPublicId(result.info.public_id);
    }
  };

  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">UploadPage</h1>
      <CldUploadWidget
        uploadPreset={uploadPreset}
        onSuccess={handleUploadSuccess}
      >
        {({ open }) => {
          return (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => open()}
            >
              Upload
            </button>
          );
        }}
      </CldUploadWidget>
      {publicId && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Uploaded Image:</h2>
          <CldImage
            width="400"
            height="300"
            src={publicId}
            sizes="100vw"
            alt="Uploaded image"
          />
        </div>
      )}
    </div>
  );
};

export default UploadPage;
