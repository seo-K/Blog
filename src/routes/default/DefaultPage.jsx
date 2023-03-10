import React, { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/common/Header";
import axios from "axios";

// img
import SearchSvg from "../../assets/images/icon/search.svg";
import ArrowIconSvg from "../../assets/images/common/icon_arrow_down.svg";

export default function DefaultPage() {
  const navigate = useNavigate();

  const [searchWord, setSearchWord] = useState(""); // 검색어 값
  //검색 할때 실행되는 함수
  const handleSearch = () => {
    navigate(`/post/search/${searchWord}`);
  };
  return (
    <Container>
      <Header />
      <main className="main">
        <div className="main__inner">
          {/* 검색 */}
          <div className="search">
            <div className="search__select-box">
              <select name="" id="">
                <option value="All">All</option>
                <option value="Html">Html</option>
                <option value="Css">Css</option>
                <option value="Js">Js</option>
                <option value="React">React</option>
                <option value="etc">etc</option>
              </select>
            </div>
            <div className="search__search-wrap">
              <button
                type="submit"
                className="icon-wrap"
                onClick={() => {
                  if (searchWord.length > 0) {
                    handleSearch();
                  } else {
                    alert("검색어를 입력하세요!");
                  }
                }}
              >
                <img src={SearchSvg} alt="검색" />
              </button>
              <input
                onChange={(e) => {
                  if (e.target.value.length === 0) {
                    setSearchWord("");
                  }
                  if (e.target.value.length > 0) {
                    setSearchWord(e.target.value);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (e.target.value.length > 0) {
                      handleSearch();
                    } else {
                      alert("검색어를 입력하세요!");
                    }
                  }
                }}
                type="search"
                placeholder="검색어를 입력해주세요."
                value={searchWord}
              />
            </div>
          </div>
          <Outlet />
        </div>
      </main>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100vh;

  .main {
    flex: 1;
    min-height: 100vh;

    padding: 3rem;
    border-radius: 5rem 0 0 5rem;
    background-color: var(--beige);

    &__inner {
      width: 100%;
      max-width: 150rem;

      border-radius: 10px;
      margin: 0 auto;
    }
  }
  .search {
    display: flex;
    margin-bottom: 2rem;

    &__select-box {
      flex-shrink: 0;
      width: 10rem;
      margin-right: 1rem;

      select {
        width: 100%;
        height: 100%;
        font-size: 1.4rem;
        text-indent: -0.7rem;
        text-align: center;
        border-radius: 50px;
        border: 2px solid var(--mainYellow);
        background: url(${ArrowIconSvg}) no-repeat 85% center / 1rem 1rem;
      }
    }

    &__search-wrap {
      display: flex;
      align-items: center;
      width: 35rem;
      max-width: 100%;
      border-radius: 50px;
      border: 2px solid var(--mainYellow);
      padding: 1rem 2rem;

      .icon-wrap {
        flex-shrink: 0;
        width: 2rem;
        height: 2rem;

        margin-right: 1rem;
      }

      input {
        flex: 1;
        font-size: 1.4rem;
        padding: 0.5rem 0;
      }
    }
  }
`;
