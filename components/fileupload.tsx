'use client'

import modelpreview from '@/public/images/modelpreview.png'


// FileUpload.tsx
import { useState, useRef } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image'

export default function FileUpload() {
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onModelDataChange = (modelData: any, edgeData: any) => {
    // Do something with modelData and edgeData
    console.log("Model Data:", modelData);
    console.log("Edge Data:", edgeData);
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUploading(true);

    if (e.target.files && e.target.files.length > 0) {
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
    }
  }; // Moved this closing brace here to properly close the function

    return (
      <div className="flex items-start justify-center h-screen pt-32">
        <form className="p-4 w-1/2 rounded-lg h-1/2 text-center flex flex-col items-center justify-center border-2 border-dashed border-gray-400">

          <div className="mb-4 flex flex-col items-center">
            <Image src={modelpreview} alt="Model Preview" className="w-16 mb-2"/>
            <span className="text-lg font-semibold">Upload your models</span>
            <p className="text-sm text-gray-500">Uploading your CAD is the best way to get an instant quote</p>
          </div>

          <input
            className="hidden"
            ref={inputRef}
            type="file"
            onChange={handleChange}
            accept=".stp,.step,.igs,.iges"
          />
          <button
            className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3"
            onClick={() => inputRef.current?.click()}
            disabled={uploading}
          >
            {uploading ? 'Analyzing...' : 'Upload your models'}
          </button>

          <div className="mt-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            <p className="text-sm text-gray-500">All uploads are secure and confidential</p>
          </div>

        </form>
      </div>
    );

}
