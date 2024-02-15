import jsPDF from "jspdf";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

function Image() {
  const [images, setImages] = useState([]);

  const onDrop = (acceptedFiles) => {
    // Update state with the selected images
    setImages(
      acceptedFiles.map((file) => ({
        name: file.name,
        preview: URL.createObjectURL(file),
      }))
    );
  };

  const convertToPDF = () => {
    // Create a new jsPDF instance
    const pdf = new jsPDF();

    // Iterate through each image and add it to the PDF
    images.forEach((image, index) => {
      if (index > 0) {
        pdf.addPage(); // Add a new page for each image, except the first one
      }
      pdf.addImage(image.preview, "JPEG", 10, 10, 190, 150);
    });

    // Save the PDF
    pdf.save("converted.pdf");
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/jpg",
    onDrop,
  });

  return (
    <>
      <div className="App h-screen m-auto ">
        <div {...getRootProps()} className="dropzone">
          <input {...getInputProps()} />
          <p>
            Drag & drop some JPG files here, or{" "}
            <span> click to select files </span>
          </p>
        </div>
        <div className="image-preview">
          {images.map((image) => (
            <img key={image.name} src={image.preview} alt={image.name} />
          ))}
        </div>
        {images.length > 0 && (
          <button onClick={convertToPDF}>Convert to PDF</button>
        )}
      </div>
    </>
  );
}

export default Image;
