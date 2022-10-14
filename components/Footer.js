import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-900">
      <div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
        <span className="text-yellow-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-7 h-7"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z"
            />
          </svg>
        </span>
        <p className="text-lg font-Roboto text-zinc-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          Thanks For Visiting!!!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
