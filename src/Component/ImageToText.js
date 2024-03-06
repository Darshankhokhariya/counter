import { useState, useEffect } from "react";
import Tesseract from "tesseract.js";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { toast } from "react-hot-toast";

function ImageToText() {
  const [image, setImage] = useState(null);
  const [text, setText] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setIsLoading(true);
    setImage(URL.createObjectURL(event.target.files[0]));
    setIsLoading(false);
  };
  const deleteImage = () => {
    setText(null);
    setIsLoading(true);
    setImage(null);
    setIsLoading(false);
  };
  const handleClick = () => {
    if (!image) {
      toast.error("Please upload the image!");
      return;
    }
    Tesseract.recognize(image, "eng", {
      logger: (m) => {
        setProgress(parseInt(m.progress * 100));
      },
    })
      .catch((err) => {
        console.error(err);
      })
      .then((result) => {
        // Get Confidence score
        // let confidence = result.confidence
        // Get full output
        let text = result.data.text;
        setText(text);
      });
  };

  useEffect(() => {
    setText(text);
  }, [text]);

  return (
    <>
      <div className="w-full flex flex-col items-center">
        <div className="App"></div>
        <header>
          <h1 className="text-2xl font-semibold">Image to Text Converter</h1>
        </header>
        <div className="container mt-5 flex flex-col items-center">
          <div className="group">
            {isLoading ? (
              <></>
            ) : (
              // <Loader />
              <>
                {!image ? (
                  <>
                    <div className="min-w-max">
                      <div class=" items-center max-w-screen-sm  mb-3 space-y-4 sm:flex sm:space-y-0">
                        <div class="relative w-full">
                          <div class="items-center justify-center max-w-xl">
                            <label
                              class="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
                              id="drop"
                            >
                              <span class="flex items-center space-x-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="w-6 h-6 text-gray-600"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  stroke-width="2"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                  ></path>
                                </svg>
                                <span class="font-medium text-gray-600">
                                  Drop files to Attach, or
                                  <span class="text-blue-600 underline ml-[4px]">
                                    browse
                                  </span>
                                </span>
                              </span>
                              <input
                                type="file"
                                name="uploadimage"
                                onChange={handleChange}
                                className="upload hidden"
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="dispaly-image flex flex-col items-center">
                      <img
                        src={image}
                        alt="uploaded"
                        className="uploaded-image border border-sky-800 rounded-lg"
                      />
                      <div className="flex gap-3 justify-center">
                        <button
                          onClick={deleteImage}
                          className="flex items-center gap-2 bg-red-600 text-white py-2 px-4 rounded-md mt-5"
                        >
                          <MdDelete className="delete-icon " />
                          Delete Image
                        </button>
                        <button
                          onClick={handleClick}
                          className="flex items-center gap-2 bg-green-700 text-white py-2 px-4 rounded-md mt-5"
                        >
                          <VscGitPullRequestGoToChanges className="delete-icon" />
                          Convert to text
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
          {progress < 100 && progress > 0 && (
            <div>
              <div className="progress-label">Progress ({progress}%)</div>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          )}
          {text && (
            <div className="p-5 border-2 my-10 border-gray-400 rounded-lg">
              {text}
            </div>
          )}

          {/* {text && <Copy text={text} />} */}
        </div>
      </div>
    </>
  );
}

export default ImageToText;
