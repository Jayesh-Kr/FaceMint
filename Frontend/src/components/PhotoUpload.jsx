import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Upload, X } from 'lucide-react';

const PhotoUpload = ({ onPhotoSelect, className = "" }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileSelect = (file) => {
    if (file && file.type.startsWith('image/')) {
      setSelectedPhoto(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewUrl(e.target.result);
      };
      reader.readAsDataURL(file);
      onPhotoSelect && onPhotoSelect(file);
    }
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const clearPhoto = () => {
    setSelectedPhoto(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    onPhotoSelect && onPhotoSelect(null);
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={`w-full max-w-md mx-auto ${className}`}>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileInputChange}
        className="hidden"
      />
      
      {!previewUrl ? (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={openFileDialog}
          className={`
            relative border-2 border-dashed p-12 text-center cursor-pointer
            transition-all duration-200 hover:border-black
            ${isDragOver ? 'border-black bg-gray-50' : 'border-gray-300'}
          `}
        >
          <div className="flex flex-col items-center space-y-4">
            <Upload className="w-8 h-8 text-gray-400" />
            
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-black">
                Drop your photo here
              </h3>
              <p className="text-sm text-gray-600">
                or click to browse your files
              </p>
            </div>
            
            <div className="text-xs text-gray-500">
              JPG, PNG, JPEG up to 10MB
            </div>
          </div>
        </div>
      ) : (
        <div className="relative">
          <img
            src={previewUrl}
            alt="Selected photo"
            className="w-full h-64 object-cover border border-gray-200"
          />
          
          <button
            onClick={clearPhoto}
            className="absolute top-2 right-2 p-1 bg-white border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            <X className="w-4 h-4 text-gray-600" />
          </button>
          
          <div className="absolute bottom-4 left-4 right-4">
            <Button 
              onClick={(e) => {
                e.stopPropagation();
                console.log('Transform to NFT clicked');
              }}
              className="w-full bg-black text-white hover:bg-gray-800"
            >
              Transform to NFT
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoUpload;