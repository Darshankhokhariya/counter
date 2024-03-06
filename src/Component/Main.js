import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <div className=" flex flex-col justify-center items-center gap-4">
        <div className="flex flex-wrap justify-center gap-10 mx-10 ">
          <Link to="/wordcounters">
            <div className="p-4 max-w-[300px] min-w-[300px]  border border-indigo-300 rounded-2xl  hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center">
              <img
                src="https://play-lh.googleusercontent.com/pp4VDKFCsKTr_hchVZJLApNTqQMm_W3u_w4usCxF3ho7q2jRoDY7SiAmsrPkRxUhHQ"
                class="shadow rounded-lg overflow-hidden border"
              />
              <div class="mt-8">
                <h4 class="font-bold text-xl">Word Counter</h4>
                <p class="mt-2 text-gray-600">
                  Instantly count words in sentences with precision.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/converter">
            <div className="p-4 max-w-[300px] min-w-[300px]  border border-indigo-300 rounded-2xl  hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center">
              <img
                src="https://store-images.s-microsoft.com/image/apps.48285.13510798887470792.9747d472-3936-4267-ae72-25b59e2ed5dc.a8763952-43cd-4bca-9868-9b753460d96f"
                class="shadow rounded-lg overflow-hidden border"
              />
              <div class="mt-8">
                <h4 class="font-bold text-xl">Image To PDF Generator</h4>
                <p class="mt-2 text-gray-600">
                  Convert images into PDF files effortlessly with precision.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/imagereducer">
            <div className="p-4 max-w-[300px] min-w-[300px]  border border-indigo-300 rounded-2xl  hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center">
              <img
                src="https://cdn6.aptoide.com/imgs/2/7/0/2701b04b196f10865770dc7a5911ac10_icon.jpg"
                class="shadow rounded-lg overflow-hidden border"
              />
              <div class="mt-8">
                <h4 class="font-bold text-xl">Image Compressor</h4>
                <p class="mt-2 text-gray-600">
                  Reduce image size without quality loss for optimal
                  performance.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/signaturedownloader">
            <div className="p-4 max-w-[300px] min-w-[300px]  border border-indigo-300 rounded-2xl  hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center">
              <img
                src="https://avatars.mds.yandex.net/i?id=82a45cf254e5a38a19f286b747b1a680d5273493-10640295-images-thumbs&n=13"
                class="shadow rounded-lg overflow-hidden border"
              />
              <div class="mt-8">
                <h4 class="font-bold text-xl">Signature Creator</h4>
                <p class="mt-2 text-gray-600">
                  Generate personalized signatures with ease and style.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/imagetotext">
            <div className="p-4 max-w-[300px] min-w-[300px]  border border-indigo-300 rounded-2xl  hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center">
              <img
                src="https://play-lh.googleusercontent.com/WoIklsKy0zRojmnfFewYMSmJEolYsMLroiHnHeL0S6j9RK9x1jQQ00mGQPGHTPztlL4"
                class="shadow rounded-lg overflow-hidden border"
              />
              <div class="mt-8">
                <h4 class="font-bold text-xl">Image to Text</h4>
                <p class="mt-2 text-gray-600">
                  Convert images into editable text with ease and speed.
                </p>
              </div>
            </div>
          </Link>
          {/* <Link
            className="max-w-[500px] p-8 w-xs border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
            to="/converter"
          >
            <img
              src="https://m.media-amazon.com/images/I/71+Q-2NUkOL._AC_UL800_QL65_.png"
              class="shadow rounded-lg overflow-hidden border"
            />
            <div class="mt-8">
              <h4 class="font-bold text-xl">JPG to PDF Converter</h4>
              <p class="mt-2 text-gray-600">
                Instantly count words in sentences with precision.
              </p>
            </div>
          </Link>
          <Link
            className="max-w-[500px] p-8 w-xs border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
            to="/imagereducer"
          >
            <img
              src="https://play-lh.googleusercontent.com/RgjcH-mC3AOJxcWKcXSsYqMEUshxLKjjGNYwYDTusjZJmFCluAdqh2fNmPI5U_xoVCsY"
              class="shadow rounded-lg overflow-hidden border"
            />
            <div class="mt-8">
              <h4 class="font-bold text-xl">Image Size Reducer</h4>
              <p class="mt-2 text-gray-600">
                Instantly count words in sentences with precision.
              </p>
            </div>
          </Link>
          <Link
            className="max-w-[500px] p-8 w-xs border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
            to="/imagereducer"
          >
            <img
              src="https://avatars.mds.yandex.net/i?id=82a45cf254e5a38a19f286b747b1a680d5273493-10640295-images-thumbs&n=13"
              class="shadow rounded-lg overflow-hidden border "
            />
            <div class="mt-8">
              <h4 class="font-bold text-xl">Signature Creator</h4>
              <p class="mt-2 text-gray-600">
                Instantly count words in sentences with precision.
              </p>
            </div>
          </Link> */}
        </div>
      </div>
    </>
  );
}

export default Main;
