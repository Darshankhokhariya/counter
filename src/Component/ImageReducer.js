import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ImageQualityReducer = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [quality, setQuality] = useState(1); // Set your default quality value here
  const [imageSize, setImageSize] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [modifiedPreviewUrl, setModifiedPreviewUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      updateImageSize(quality);
    }
  }, [quality, selectedImage]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedImage(file);

      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleQualityChange = (event) => {
    const newQuality = parseFloat(event.target.value);
    setQuality(Math.min(1, Math.max(0, newQuality)));
  };

  const updateImageSize = (newQuality) => {
    const img = new Image();
    const reader = new FileReader();

    reader.onload = () => {
      img.src = reader.result;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        // Convert the canvas content to a Blob with reduced quality
        canvas.toBlob(
          (blob) => {
            // Get the size of the Blob and convert it to kilobytes
            const imageSizeInBytes = blob.size;
            const imageSizeInKb = imageSizeInBytes / 1024;

            setImageSize(imageSizeInKb.toFixed(2));

            // Set the preview URL for the modified image
            const modifiedDataUrl = canvas.toDataURL("image/jpeg", newQuality);
            setModifiedPreviewUrl(modifiedDataUrl);
          },
          "image/jpeg",
          newQuality
        );
      };
    };

    reader.readAsDataURL(selectedImage);
  };

  const handleDownload = () => {
    if (selectedImage) {
      const img = new Image();
      const reader = new FileReader();

      reader.onload = () => {
        img.src = reader.result;

        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          canvas.width = img.width;
          canvas.height = img.height;

          ctx.drawImage(img, 0, 0);

          // Convert the canvas content to a Blob with reduced quality
          canvas.toBlob(
            (blob) => {
              // Create a temporary link and trigger a download
              const downloadLink = document.createElement("a");
              downloadLink.href = URL.createObjectURL(blob);
              downloadLink.download = "modified_image.jpg";
              downloadLink.click();
            },
            "image/jpeg",
            quality
          );
        };
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  return (
    <>
      <div className="flex w-full justify-center mt-10 ">
        <div>
          <div class="grid w-full max-w-xs items-center gap-1.5">
            <label class="text-sm text-gray-500 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Picture
            </label>
            <input
              id="picture"
              type="file"
              onChange={handleImageChange}
              accept="image/*"
              className="cursor-pointer flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
            />
            <p>Select an image you want to reduce size</p>
          </div>
          {/* <input type="file" " /> */}
          <br />
          {selectedImage && (
            <label>
              Image Quality:
              {" " + quality.toFixed(2)}
              <input
                min="0"
                max="1"
                step="0.01"
                value={quality}
                onChange={handleQualityChange}
                type="range"
                className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600  "
              />
              {imageSize && <p>Image Size: {imageSize} KB</p>}
              {/* <input type="range" /> */}
            </label>
          )}
          <br />
          <div className="flex gap-10">
            {selectedImage && (
              <div>
                <h3>Original Image</h3>
                <img
                  className="w-80 h-80"
                  src={URL.createObjectURL(selectedImage)}
                  alt="Original"
                />
              </div>
            )}
            {modifiedPreviewUrl && (
              <div>
                <h3>Modified Image</h3>
                <img
                  src={modifiedPreviewUrl}
                  alt="Modified"
                  className="w-80 h-80"
                />
              </div>
            )}
          </div>
          {selectedImage && (
            <div>
              <button
                onClick={handleDownload}
                className="px-5 mt-6 z-30 py-2 bg-sky-400 rounded-md text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-sky-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#1976D2;] hover:[text-shadow:2px_2px_2px_#38bdf8] text-2xl"
              >
                Download Modified Image
              </button>

              {/* <button onClick={handleDownload}>Download Modified Image</button> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ImageQualityReducer;
