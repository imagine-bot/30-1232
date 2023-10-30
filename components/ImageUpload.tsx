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
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {image && <img src={image.toString()} alt="Preview" />}
    </div>
  );
};

export default ImageUpload;