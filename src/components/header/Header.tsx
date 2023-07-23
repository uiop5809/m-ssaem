/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { LogoIcon } from "../../assets/HeaderIcons";
import { SearchIcon } from "../../assets/CommonIcons";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import COLOR from "../../styles/color";
import FONT from "../../styles/font";
import Button from "../button/Button";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [LoginOpen, setLoginOpen] = useState(true);

  const handleLoginClick = () => {
    navigate("/login");
    setLoginOpen(!LoginOpen);
  };

  const handleSearchClick = () => {
    // TODO: 버튼 기능 디자인 만들어지면 수정
  };

  const homeRouteList = ["/", "/hotBoard", "/hotDebate"];

  return (
    <header css={headerCSS}>
      <div css={headerTopCSS}>
        <LogoIcon onClick={() => navigate("/")} />
        {LoginOpen && (
          <Button
            onClick={handleLoginClick}
            style={{
              fontSize: FONT.SIZE.HEADLINE,
            }}
          >
            로그인하고 이용하기
          </Button>
        )}
      </div>
      <div css={headerBottomCSS}>
        <ul css={[listCSS, left]}>
          <li
            onClick={() => navigate("/")}
            className={
              homeRouteList.includes(location.pathname) ? "active" : ""
            }
          >
            Home
          </li>
          <li
            onClick={() => navigate("/board/mbti")}
            className={location.pathname.startsWith("/board") ? "active" : ""}
          >
            게시판
          </li>
          <li
            onClick={() => navigate("/match/matching")}
            className={location.pathname.startsWith("/match") ? "active" : ""}
          >
            M쌤 매칭
          </li>
          <li
            onClick={() => navigate("/debate/postlist")}
            className={location.pathname.startsWith("/debate") ? "active" : ""}
          >
            MBTI 과몰입 토론
          </li>
          <li
            onClick={() => navigate("/mbtitype")}
            className={
              location.pathname.startsWith("/mbtitype") ? "active" : ""
            }
          >
            MBTI 유형
          </li>
        </ul>
        <ul css={[listCSS, right]}>
          <li
            onClick={() => navigate("/chatting")}
            className={
              location.pathname.startsWith("/chatting") ? "active" : ""
            }
          >
            채팅
          </li>
          <li
            onClick={() => navigate("/alarm")}
            className={location.pathname.startsWith("/alarm") ? "active" : ""}
          >
            알람
          </li>
          <li
            onClick={() => navigate("/favorites")}
            className={
              location.pathname.startsWith("/favorites") ? "active" : ""
            }
          >
            즐겨찾기
          </li>
          <li onClick={handleSearchClick}>
            <SearchIcon />
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;

const headerCSS = css`
  width: 100%;
  height: 9rem;
  min-width: 1280px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  padding: 0 15rem;
  background: ${COLOR.WHITE};
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.1);

  position: fixed;
  left: 0;
  right: 0;
  z-index: 10;
`;

const headerTopCSS = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0 0.8rem 0;
`;

const headerBottomCSS = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.2rem;
`;

const listCSS = css`
  display: flex;
  align-items: center;
  font-size: ${FONT.SIZE.TITLE3};
  font-weight: ${FONT.WEIGHT.REGULAR};

  li {
    cursor: pointer;
    position: relative;
  }

  li:hover {
    color: ${COLOR.MAIN1};
  }

  li.active {
    color: ${COLOR.MAIN1};
  }

  li.active:after {
    height: 3.5px;
    opacity: 1;
    transform: translateY(0.7rem);
  }

  li:after {
    position: absolute;
    top: 80%;
    left: 0;
    width: 100%;
    height: 3.5px;
    background: ${COLOR.MAIN1};
    content: "";
    opacity: 0;
    transition: height 0.3s, opacity 0.3s, transform 0.3s;
    transform: translateY(0.5rem);
  }

  li:hover:after {
    height: 3.5px;
    opacity: 1;
    transform: translateY(0.7rem);
  }
`;

const left = css`
  li {
    margin-right: 1.7rem;
  }
`;

const right = css`
  li {
    margin-left: 1.7rem;
  }
`;
