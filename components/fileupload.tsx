'use client'

// FileUpload.tsx
import { useState, useRef } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function FileUpload() {
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef(null);

  const onModelDataChange = (modelData, edgeData) => {
    // Do something with modelData and edgeData
    console.log("Model Data:", modelData);
    console.log("Edge Data:", edgeData);
  };

  const handleChange = async (e) => {
    e.preventDefault();
    setUploading(true);

    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:8080/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.data.success) {
        onModelDataChange(response.data.modelData, response.data.edgeData);
      } else {
        console.error('File upload failed');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }

    setUploading(false);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="p-4 w-1/2 rounded-lg h-1/2 text-center flex flex-col items-center justify-center border-2 border-dashed border-gray-400">
        <input
          className="hidden"
          ref={inputRef}
          type="file"
          onChange={handleChange}
          accept=".stp,.step,.igs,.iges"
        />
        <button
          className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3"
          onClick={() => inputRef.current.click()}
          disabled={uploading}
        >
          {uploading ? 'Analyzing...' : 'Upload Your Model'}
        </button>
      </form>
    </div>
  );
}
