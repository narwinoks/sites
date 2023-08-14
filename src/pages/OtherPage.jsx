import React from "react";
import Main from "../layouts/Main";
import Other from "../features/Other/Other";
import Hr from "../components/hr";
import Music from "../features/Music/Music";
import NowPlaying from "../features/Music/NowPlaying";

const OtherPage = () => {
  return (
    <Main>
      <Other></Other>
      <Hr></Hr>
      <NowPlaying></NowPlaying>
      <Hr></Hr>
      <Music></Music>
    </Main>
  );
};

export default OtherPage;
