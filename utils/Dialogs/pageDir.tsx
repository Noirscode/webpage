import { useState, useEffect } from "react";
import type { FC } from "react";
export const ID = "pageDir";
import swal from "sweetalert";
import { SetStateAction } from "react";
import { Dispatch } from "react";
import { useRouter } from "next/router";
export const PageDir:FC = ({ clicked }: any) => {
  let router = useRouter();
  let [name, setName] = useState<string>("");
  let [passcode, setPass] = useState<string>("");
  return (
    <div
      className="fixed hidden inset-0 w-full h-full bg-[#090D0D] bg-opacity-[0.8]"
      id={ID}
    >
      <div
        className="relative mx-auto my-auto p-5  w-5/12 shadow-lg rounded-md bg-black mt-10"
        id="modaleffect"
      >
 
        <div className="overflow-auto	h-32">
        <PageCard title="Blogs" description="My Blog Posts" link="/blog" router={router}/>
        <PageCard title="Projects" description="My Projects" link="#projects" router={router}/>
        <PageCard title="Repositories" description="My Github Repositories" link="#projects" router={router}/>
        </div>

  
        <div className="z-20 mt-5">
          <div className="items-center px-4 py-3 mt-3">
            <button
              id="ok-btn"
              className="mx-auto px-4 py-2 bg-indigo-700 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-indigo-600"
              onClick={(e) => {
                e.preventDefault();
                let mymodal = window.document.getElementById(ID);
                mymodal?.classList.add("hidden");
                clicked ? clicked() : "";
              }}
            >
              Close The Modal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

var PageCard = ({title, description,link,router}:any) => {
  return (
  <div className="flex flex-row justify-between mt-4">
      <button className="text-left w-full h-full" onClick={() => {document.getElementById(ID)?.classList.add("hidden"); router.push(link)}}>

  <div className="bg-white/10 backdrop-blur-2xl px-3 py-2 w-full rounded hover:bg-white/20 transition ">
    <label className="text-2xl font-bold text-gray-200 text-left">
      {title}
    </label>

    <p className="text-gray-400 text-sm">
      {description}
    </p>
  </div>
  </button>
</div>
  )
}