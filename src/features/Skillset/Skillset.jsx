import React from "react";
import CardContainer from "../../components/CardContainer";

const Skillset = () => {
  return (
    <section>
      <div className="py-5">
        <h1 className="font-bold my-3 text-2xl pl-4 xs:pl-0">Skillset</h1>
        <div className="my-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          <CardContainer>
            <div className="p-4">
              <ul className="list-none pl-4 space-y-2 text-base">
                <li className="font-semibold pb-3">Languages</li>
                <li>PHP</li>
                <li>Javascripts</li>
                <li>Typescripts</li>
                <li>Java</li>
              </ul>
            </div>
          </CardContainer>
          <CardContainer>
            <div className="p-4">
              <ul className="list-none pl-4 space-y-2 text-base">
                <li className="font-semibold pb-3">Backend</li>
                <li>Laravel</li>
                <li>Express js</li>
                <li>Node js</li>
                <li>Mysql</li>
                <li>Postgresql</li>
                <li>Mongo db</li>
              </ul>
            </div>
          </CardContainer>
          <CardContainer>
            <div className="p-4">
              <ul className="list-none pl-4 space-y-2 text-base">
                <li className="font-semibold pb-3">Frontend</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Tailwindcss</li>
              </ul>
            </div>
          </CardContainer>
        </div>
      </div>
    </section>
  );
};

export default Skillset;
