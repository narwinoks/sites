import React from "react";
import Hr from "../../components/hr";
import CardContainer from "../../components/CardContainer";
import { MdLaunch } from "react-icons/md";
import { Link } from "react-router-dom";

const Other = () => {
  return (
    <section>
      <h1 className="font-bold my-3 text-2xl pl-4 xs:pl-0">Other</h1>
      <Hr></Hr>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
        <CardContainer customClass={"min-h-[40px]"}>
          <div className="p-4">
            <Link className="font-medium hover:text-brand-blue hover:underline dark:hover:text-brand-sky flex items-center">
              GitHub Stars
              <MdLaunch className="ml-2"></MdLaunch>
            </Link>
            <p className="text-2xl font-bold">205</p>
          </div>
        </CardContainer>
      </div>
    </section>
  );
};

export default Other;
