import React from "react";

function PortfolioItem({ title, imgUrl, stack, link, sourceCode }) {

  return (
    <div className="border border-stone-100 rounded-lg overflow-hidden dark:border-gray-400 shadow-2xl">
      <a target="_blank" href={link}>
        {/* <img
          src={imgUrl}
          alt="portfolio"
          className="w-full h-36 md:h-48 object-cover cursor-pointer"
        /> */}
      </a>

      <div className="w-full p-4 flex flex-col content-between items-stretch">

        <div className="flex flex-col items-stretch">
          <h3 className="text-lg md:text-2xl md:mb-3 font-bold dark:text-white mt-1">
            {title}
          </h3>
          <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
            {/* {stack.map((item, title) => (
              <span key={title} className="inline-block px-2 py-1 font-semibold rounded-md mb-4 dark:border-white shadow-lg">
                {item}
              </span>
            ))} */}
          </p>
        </div>



        <div className="flex items-center justify-between flex-wrap font-semibold">
          <a className="cursor-pointer underline flex-1" target="_blank" href={link}>
            Live Preview
          </a>
          <a
            className="cursor-pointer text-sm flex-1"
            target="_blank"
            href={sourceCode}
          >
            Source Code
          </a>
        </div>

      </div>
    </div>
  );
  
}
export default PortfolioItem;
