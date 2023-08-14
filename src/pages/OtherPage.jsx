import React from "react";
import Main from "../layouts/Main";
import Other from "../features/Other/Other";
import Hr from "../components/hr";
import Music from "../features/Music/Music";

const OtherPage = () => {
  return (
    <Main>
      <Other></Other>
      <Hr></Hr>
      <Music></Music>
    </Main>
  );
};

export default OtherPage;
