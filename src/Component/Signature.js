import React, { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import { RxEraser } from "react-icons/rx";
import { MdOutlinePreview } from "react-icons/md";
import { FaDownload } from "react-icons/fa";

function SignatureDownloader() {
    const sigCanvas = useRef({});
    const [signature, setSignature] = useState(null);
    const [textColor, setTextColor] = useState("#000000");

    const clearSignature = () => {
        sigCanvas.current.clear();
        setSignature(null);
    };

    const saveSignature = (preview) => {
        if (sigCanvas.current.isEmpty()) {
            alert('Please provide a signature first.');
            return;
        }

        const canvas = sigCanvas.current.getCanvas();

        if (preview) {
            // Convert signature to image preview
            domtoimage.toPng(canvas)
                .then((dataUrl) => {
                    // Display preview
                    setSignature(dataUrl); // Set signature state
                })
                .catch((error) => {
                    console.error('Error generating image:', error);
                });
        } else {
            // Convert signature to image
            domtoimage.toPng(canvas)
                .then((dataUrl) => {
                    // Download image
                    saveAs(dataUrl, 'signature.png');
                    setSignature(null); // Clear signature state after download
                })
                .catch((error) => {
                    console.error('Error generating image:', error);
                });
        }
    };


    const handleText = (e) => {
        setTextColor(e?.target?.value)

    }

    return (
        <div className="App">
            <h1 className='w-full text-center mb-5 text-2xl font-semibold'>Signature Pad</h1>
            <div className='w-full justify-center flex gap-3 mb-5 items-center'>
                <label>Pen Colour : </label>
                <input className='border-2 border-slate-200 h-8 ' type="color" id="head" name="head" value={textColor} onChange={handleText} />
            </div>
            <div className='border-2 border-slate-600 mx-[2vw] ' style={{ border: "1px solid black", margin: "0 30px", borderRadius: "10px", overflow: "hidden" }}>
                <SignatureCanvas
                    penColor={textColor}
                    ref={sigCanvas}
                    canvasProps={{ style: { width: "100%", height: "200px", } }}
                    backgroundColor={"white"}
                />
            </div>
            <br />
            <div className='flex flex-col sm:flex-row w-full justify-center  gap-3 px-10'>
                <button className='py-2 px-6 bg-slate-500 text-white rounded-lg border justify-center flex gap-2 items-center' onClick={clearSignature}><RxEraser />
                    Clear</button>
                <button className='py-2 px-6 bg-sky-600 text-white rounded-lg border flex gap-2 justify-center items-center' onClick={() => saveSignature(true)}><MdOutlinePreview />
                    Preview</button>
                <button className='py-2 px-6 bg-green-700 text-white rounded-lg border flex gap-2 items-center justify-center' onClick={() => saveSignature(false)}><FaDownload />
                    Download</button>
            </div>
            {
                signature && (
                    <div>
                        <h2>Preview:</h2>
                        <img src={signature} alt="Signature Preview" />
                    </div>
                )
            }
        </div >
    );
}

export default SignatureDownloader;
