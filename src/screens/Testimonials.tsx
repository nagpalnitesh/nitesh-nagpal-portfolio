import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { companies, testimonials } from "@/data";
import React from "react";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="py-20">
        <h1 className="heading">
          kind words from <span className="text-purple">satisfied clients</span>
        </h1>
        <div className="flex flex-col items-center justify-center">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-16 max-lg:mt-10 mt-5">
            {companies.map(({ id, img, name, nameImg }) => (
              <div key={id} className="flex md:max-w-60">
                <img src={img} alt={name} className="md:w-10 w-5" />
                <img src={nameImg} alt={name} className="md:w-24 w-20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
