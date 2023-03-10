import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostContent from "../../components/content/PostContent";
import axios from "axios";

// mock data
import { PostData } from "../../MockData";

export default function PostPage() {
  const navigate = useNavigate();

  const [tab, setTab] = useState(0);
  const tabList = [
    {
      id: 0,
      name: "All",
    },
    {
      id: 1,
      name: "Html",
    },
    {
      id: 2,
      name: "Css",
    },
    {
      id: 3,
      name: "Js",
    },
    {
      id: 4,
      name: "React",
    },
    {
      id: 5,
      name: "etc",
    },
  ];

  return (
    <Container>
      <h2 className="blind">포스트 리스트</h2>
      <div className="content-wrap">
        <ul className="tab-list">
          {tabList.map((list, index) => (
            <li key={list.id} className={tab == index && "active"} onClick={() => setTab(index)}>
              <button type="button">{list.name}</button>
            </li>
          ))}
        </ul>
        <ul className="post-list-wrap">
          {PostData?.map((list) => {
            return (
              <li key={"postList" + list.id}>
                <PostContent data={list} />
              </li>
            );
          })}
        </ul>
      </div>
      <a href="src/html/three/index.html">three js로 가기</a>
    </Container>
  );
}

const Container = styled.section`
  .tab-list {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row-reverse;
    margin-bottom: 5rem;
    li {
      position: relative;
    }
    /* li:after {
      position: absolute;
      left: 0;
      bottom: 0;
      content: "";
      width: 0;
      height: 2px;
      background-color: var(--mainYellow);
      transition: all 0.2s;
    } */
    li + li {
      margin-right: 1rem;
    }
    button {
      font-size: 1.3rem;
      font-weight: 700;
      padding: 0.8rem 1.5rem;
      border-radius: 2rem;
      box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px var(--white);
      transition: all 0.2s ease-in-out;
      &:focus {
      }
    }
    li.active:after {
      width: 100%;
    }
    .active button {
      box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px var(--white);
      color: var(--mainYellow);
      background-color: var(--beige);
    }
  }
  .post-list-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem 1rem;
    > li {
      flex: 0 0 calc((100% - 3rem) / 4);
    }
    > li:hover a {
      box-shadow: 0 0 0 10px var(--mainYellow);
    }
  }
`;
