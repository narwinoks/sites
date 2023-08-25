import React from "react";
import Main from "../layouts/Main";
import { useParams } from "react-router-dom";
import CardContainer from "../components/CardContainer";

const BlogPage = () => {
  const { slug } = useParams();

  return (
    <Main>
      <CardContainer>
        <article>
          <figure></figure>
          <figure></figure>
        </article>
      </CardContainer>
    </Main>
  );
};

export default BlogPage;
