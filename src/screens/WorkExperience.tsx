import { Button } from "@/components/ui/moving-border";
import { workExperience } from "@/data";

const WorkExperience = () => {
  return (
    <section id="experience">
      <div className="py-20">
        <h1 className="heading">
          My <span className="text-purple">Work Experience</span>
        </h1>
        <div className="grid w-full lg:grid-cols-4 grid-cols-1 gap-10 mt-12">
          {workExperience.map((card) => (
            <Button
              key={card.id}
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              className="flex-1 text-white border-neutral-200 dark:border-slate-800"
            >
              <div className="flex lg:flex-row flex-col lg:items-center p-3 md:p-5 lg:p-10 gap-2">
                <img
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  className="lg:w-32 md:w-20 w-16"
                />
                <div className="lg:ms-5">
                  <h1 className="text-start text-xl md:text-2xl font-extrabold">
                    {card.title}
                  </h1>
                  {/* <p className="mt-3 font-bold text-start uppercase">
                    {card.company}
                  </p> */}
                  <p className="text-white-100 mt-3 font-semibold text-start">
                    {card.desc}
                  </p>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
