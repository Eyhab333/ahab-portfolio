import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-5xl font-bold md:text-7xl mb-1 mb:3">Ahab Fadl</h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Full-Stack Web Developer
      </p>
      
      <div className="flex justify-center flex-raw text-center pt-5 pb-6">
        <p className="text-sm max-w-xl mb-6 font-bold mr-2">Contact: </p>
        <a href="mailto:hello@ahabfadl.com">
          <p className="text-sm max-w-xl mb-6 font-bold underline underline-offset-auto">
             hello@ahabfadl.com</p>
        </a>
      </div>
      <div>
        <p className="text-l max-w-xl mb-1 font-bold">Take a look at my work </p>
        <i class="material-icons">arrow_downward</i>
      </div>
    </div>
  );
}

export default Intro;
