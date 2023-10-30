import React, { useState } from 'react';

const ImageUpload: React.FC = () => {
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="p-4 bg-white rounded shadow-xl">
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleImageUpload} 
          className="p-2 mb-4 border border-gray-300 rounded"
        />
        {image && <img src={image.toString()} alt="Preview" className="mt-4 rounded shadow" />}
      </div>
    </div>
  );
};

export default ImageUpload;