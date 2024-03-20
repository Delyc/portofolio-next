import Image from "next/image";
import { useRef, useState } from "react";
import { Menu, X } from "react-feather";
import Link from "next/link";
export default function Header() {
  const [opan, setOpan] = useState(false);
  const refCategoryMenu = useRef(null);
  return (
    <div className="max-w-screen-2xl pr-4 sm:px-10 m-auto relative">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl py-6">Delyce T</h1>
        <div className="hidden items-center gap-7 sm:flex">
          {["About", "Experience", "Work", "Contact"].map((v, k) => {
            return (
              <a key={k} href={`#${v}`}>
                <div className="flex gap-1 items-center cursor-pointer group">
                  <span className="text-[13px] font-medium my-auto">
                    0{k + 1}.
                  </span>
                  <span className="text-[16px] font-medium text-secondary group-hover:text-white">
                    {v}
                  </span>
                </div>
              </a>
            );
          })}
          <Link href="/assets/delyceresume.pdf" target="_blank">
            <button className="border pb-1 pt-2 px-5 rounded-sm text-[15px] hover:bg-secondary-100 hover:bg-opacity-20">
              Resumé
            </button>
          </Link>
        </div>
        <div className="items-center block sm:hidden">
          <Menu size={30} onClick={() => setOpan(true)} />
        </div>

        <div
          ref={refCategoryMenu}
          className={`fixed h-screen flex transition-all delay-75 right-0 w-[0%] z-[2000000000] ${
            opan ? "w-[100%] right-0" : "w-[0%] -right-32"
          }  z-50 top-0 `}
        >
          <div className="flex-1 blur" onClick={() => setOpan(false)}></div>
          <div className="w-[77%] h-full bg-primary ml-auto p-4">
            <X
              size={40}
              className="w-fit ml-auto"
              onClick={() => setOpan(false)}
            />
            <div className="flex justify-center items-center h-full">
              <div className="items-center gap-7 flex flex-col">
                {["About", "Experience", "Work", "Contact"].map((v, k) => {
                  return (
                    <a key={k} href={`#${v}`} onClick={() => setOpan(false)}>
                      <div className="flex  items-center flex-col cursor-pointer">
                        <span className="text-[18px] font-semibold my-auto">
                          0{k + 1}.
                        </span>
                        <span className="text-[20px] font-semibold text-secondary">
                          {v}
                        </span>
                      </div>
                    </a>
                  );
                })}
                <Link href="/assets/resume.pdf" target="_blank">
                  <button className="border pb-3 pt-4 px-8 font-semibold rounded-sm text-[18px] hover:bg-secondary-100 hover:bg-opacity-20">
                    Resumé
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
