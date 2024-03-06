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
    var width = pdf.internal.pageSize.getWidth() - 20;
    var height = pdf.internal.pageSize.getHeight() - 50;

    // Iterate through each image and add it to the PDF
    images.forEach((image, index) => {
      if (index > 0) {
        pdf.addPage(); // Add a new page for each image, except the first one
      }
      pdf.addImage(image.preview, "JPEG", 10, 25, width, height);
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
      <div className=" flex flex-col justify-center items-center gap-4">
        <div class="flex w-full  items-center justify-center bg-grey-lighter">
          <label class="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-sky-500">
            <svg
              class="w-8 h-8"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
            </svg>
            <span class="mt-2 text-base leading-normal">Select a file</span>
            <input {...getRootProps()} class="hidden" />
          </label>
        </div>
        <div>
          <p>Select your files from here</p>
        </div>
        <div className="image-preview px-2 flex justify-center items-center gap-2 w-full">
          {images.map((image) => (
            <img
              className="w-[200px] h-[200px] object-cover"
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
