import React, { useMemo } from "react";
import CardContainer from "../../components/CardContainer";
import data from "../../_data/data.json";

const Skillset = () => {
  const skills = useMemo(() => data.skills, []);
  return (
    <section>
      <div className="py-5">
        <h1 className="font-bold my-3 text-2xl pl-4 xs:pl-0">Skillset</h1>
        <div className="my-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          <CardContainer>
            <div className="p-4">
              <ul className="list-none pl-4 space-y-2 text-base">
                <li className="font-semibold pb-3">Languages</li>
                {skills &&
                  skills[0].language.map((language, index) => (
                    <li key={index}>{language}</li>
                  ))}
              </ul>
            </div>
          </CardContainer>
          <CardContainer>
            <div className="p-4">
              <ul className="list-none pl-4 space-y-2 text-base">
                <li className="font-semibold pb-3">Backend</li>

                {skills &&
                  skills[0].backend.map((backend, index) => (
                    <li key={index}>{backend}</li>
                  ))}
              </ul>
            </div>
          </CardContainer>
          <CardContainer>
            <div className="p-4">
              <ul className="list-none pl-4 space-y-2 text-base">
                <li className="font-semibold pb-3">Frontend</li>
                {skills &&
                  skills[0].frontend.map((frontend, index) => (
                    <li key={index}>{frontend}</li>
                  ))}
              </ul>
            </div>
          </CardContainer>
        </div>
      </div>
    </section>
  );
};

export default Skillset;
