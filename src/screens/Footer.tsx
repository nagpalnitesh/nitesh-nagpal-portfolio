import MagicButton from "@/components/ui/MagicButton";
import { socialMedia } from "@/data";
import React from "react";
import { FaLocationArrow } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="w-full pt-20 pb-10" id="contact">
        {/* <div className="w-full absolute left-0 -bottom-72 min-h-96">
          <img
            src="/footer-grid.svg"
            alt="Grid"
            className="w-full h-full opacity-50"

          />
        </div> */}
        <div className="flex flex-col items-center">
          <h1 className="heading lg:max-w-[45vw]">
            Ready to take{" "}
            <span className="text-purple">
              your outside digital presence to the next level?
            </span>
          </h1>
          <p className="text-center text-white-200 md:my-10 my-5">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p>
          <a href="mailto:niteshnagpal@outlook.com">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
        <div className="flex md:flex-row flex-col mt-16 justify-between items-center">
          <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © 2024 <span className="text-purple">Nitesh Nagpal</span>
          </p>
          <div className="my-3 flex items-center md:gap-3 gap-6">
            {socialMedia.map((profile) => (
              <div
                key={profile.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg backdrop-filter bg-opacity-75 bg-black-200 rounded-full border border-black-300"
              >
                <a href={profile.link} target="_blank">
                  <img
                    src={profile.img}
                    alt={`${profile.id}`}
                    width={20}
                    height={20}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
