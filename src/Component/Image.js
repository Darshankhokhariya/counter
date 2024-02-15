import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { jsPDF } from "jspdf";
import { Link } from "react-router-dom";

const Image = () => {
  const [images, setImages] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    // Update state with the selected images
    setImages(
      acceptedFiles.map((file) => ({
        name: file.name,
        preview: URL.createObjectURL(file),
      }))
    );
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/jpg",
    onDrop,
  });

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
    const pdfBlob = pdf.output("blob");
    const pdfUrl = URL.createObjectURL(pdfBlob);

    // Create a temporary link and trigger the download
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "image.pdf";
    document.body.appendChild(link);
    link.click();

    // Clean up
    document.body.removeChild(link);
  };

  return (
    <>
      <Link className="items-start justify-start w-full " to="/">
        <button
          class="cursor-pointer duration-200 hover:scale-125 active:scale-100 m-3"
          title="Go Back"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            class="stroke-blue-300"
          >
            <path
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="1.5"
              d="M11 6L5 12M5 12L11 18M5 12H19"
            ></path>
          </svg>
        </button>
      </Link>
      <div className="h-screen flex flex-col justify-center items-center gap-4">
        <div {...getRootProps()} className="dropzone">
          <input {...getInputProps()} />
          <p>
            Drag & drop some JPG files here, or <br />{" "}
            <span className="text-blue-500"> click to select files </span>
          </p>
        </div>
        <div className="image-preview px-2 w-full">
          {images.map((image) => (
            <img
              className="w-full"
              key={image.name}
              src={image.preview}
              alt={image.name}
            />
          ))}
        </div>
        {images.length > 0 && (
          <>
            <button
              onClick={convertToPDF}
              class="cursor-pointer group relative flex gap-1.5 hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue-400 to-pink-400 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                height="24px"
                width="24px"
              >
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="Interface / Download">
                    {" "}
                    <path
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      stroke-width="2"
                      stroke="#f1f1f1"
                      d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                      id="Vector"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              Download
              <div class="absolute opacity-0 -bottom-full rounded-md py-2 px-2 bg-black bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
                Download
              </div>
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Image;
