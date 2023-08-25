import React, { useMemo } from "react";
import CardContainer from "../../components/CardContainer";
import data from "../../_data/data.json";

const Experience = () => {
  const experiences = useMemo(() => data.experience, []);

  return (
    <section>
      <div className="py-5">
        <h1 className="font-bold my-3 text-2xl pl-4 xs:pl-0">Experience</h1>
        <div className="my-4 grid grid-cols-1 gap-4">
          {experiences &&
            experiences.map((experience, index) => (
              <CardContainer key={index}>
                <div className="px-6 py-4">
                  <div className="mb-2 text-2xl font-bold hover:cursor-pointer hover:underline hover:decoration-blue-600 hover:text-blue-600">
                    {experience.name}
                  </div>
                  <p className="my-2 font-extralight">{experience.date}</p>
                  <p className="text-base">{experience.description}</p>
                </div>
              </CardContainer>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
