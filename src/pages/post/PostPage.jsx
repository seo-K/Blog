import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import PostContent from "../../components/content/PostContent";

// mock data
import { PostData } from "../../MockData";

export default function PostPage() {
  const navigate = useNavigate();

  const iframePart = () => {
    return {
      __html: '<iframe src="../../html/three/index.html"></iframe>',
    };
  };

  const testHtml = `<p>hello</p>`;

  return (
    <Container>
      <h2 className="blind">포스트 리스트</h2>

      <ul className="post-list-wrap">
        {PostData?.map((list) => {
          return (
            <li key={"postList" + list.id}>
              <PostContent data={list} />
            </li>
          );
        })}
      </ul>

      <a href="src/html/three/index.html">three js로 가기</a>
    </Container>
  );
}

const Container = styled.section`
  .post-list-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    & > li {
      border: 1px solid red;
    }
  }
`;
