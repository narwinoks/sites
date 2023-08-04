import React from "react";
import CardContainer from "../../components/CardContainer";

const Experience = () => {
  return (
    <section>
      <div className="py-5">
        <h1 className="font-bold my-3 text-2xl pl-4 xs:pl-0">Experience</h1>
        <div className="my-4 grid grid-cols-1 gap-4">
          <CardContainer>
            <div className="px-6 py-4">
              <div className="mb-2 text-2xl font-bold hover:cursor-pointer hover:underline hover:decoration-blue-600 hover:text-blue-600">
                Web developer at Cyber Olympus
              </div>
              <p className="my-2 font-extralight">Nov 2022 - July 2023</p>
              <p className="text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </CardContainer>
          <CardContainer>
            <div className="px-6 py-4">
              <div className="mb-2 text-2xl font-bold hover:cursor-pointer hover:underline hover:decoration-blue-600 hover:text-blue-600">
                Junior Programmer at PT Inovasi Bakti Nusantara
              </div>
              <p className="my-2 font-extralight">Mei 2022 - Nov 2022</p>
              <p className="text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </CardContainer>
        </div>
      </div>
    </section>
  );
};

export default Experience;
