import { FloatingNav } from "@/components/ui/floating-navbar";
import MagicButton from "@/components/ui/MagicButton";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { navItems } from "@/data";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  // const navItems = [
  //   {
  //     name: "Home",
  //     link: "/",
  //     icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  //   },
  //   {
  //     name: "About",
  //     link: "/about",
  //     icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  //   },
  //   {
  //     name: "Contact",
  //     link: "/contact",
  //     icon: (
  //       <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
  //     ),
  //   },
  // ];

  return (
    <>
      <div className="pb-20 pt-36">
        {/* <FloatingNav navItems={navItems} /> */}
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="top-10 left-full h-[80vh] w-[50vw]"
            fill="purple"
          />
          <Spotlight
            className="top-28 left-80 md:-left-32 h-[80vh] w-[50vw]"
            fill="blue"
          />
        </div>
        <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-center items-center ">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              Dynamic Web magic with Next.js
            </h2>
            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              words={"Explore. Create. Inspire"}
            />
            <p className="text-center md:tracking-wider text-sm md:text-lg lg:text-2xl mb-4">
              Hi, I&apos;m Nitesh Nagpal
            </p>
            <a href="#about">
              <MagicButton
                title={"Show my work"}
                position="right"
                icon={<FaLocationArrow />}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
