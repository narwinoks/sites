import React, { useEffect, useState } from "react";
import Hr from "../../components/hr";
import CardContainer from "../../components/CardContainer";
import { MdLaunch } from "react-icons/md";
import { Link } from "react-router-dom";
import OtherHooks from "../../hooks/OtherHooks";

const Other = () => {
  const { githubUser } = OtherHooks;
  const [other, setOther] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await githubUser();
        setOther(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
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
            <p className="text-2xl font-bold">{other?.stars}</p>
          </div>
        </CardContainer>
        <CardContainer customClass={"min-h-[40px]"}>
          <div className="p-4">
            <Link className="font-medium hover:text-brand-blue hover:underline dark:hover:text-brand-sky flex items-center">
              GitHub Repository
              <MdLaunch className="ml-2"></MdLaunch>
            </Link>
            <p className="text-2xl font-bold">{other?.user?.repos}</p>
          </div>
        </CardContainer>
        <CardContainer customClass={"min-h-[40px]"}>
          <div className="p-4">
            <Link className="font-medium hover:text-brand-blue hover:underline dark:hover:text-brand-sky flex items-center">
              GitHub Follower
              <MdLaunch className="ml-2"></MdLaunch>
            </Link>
            <p className="text-2xl font-bold">{other?.user?.followers}</p>
          </div>
        </CardContainer>
      </div>
    </section>
  );
};

export default Other;
