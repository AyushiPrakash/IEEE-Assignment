import { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-content: flex-start;
  position: relative;
  padding: 2rem;

  @media screen and (max-width: 970px) {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: flex-start;
  }

  .tabs {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 970px) {
      display: ${(props) => (props.isActive ? "flex" : "none")};
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
      align-self: flex-end;
      background-color: gray;
      padding-bottom: 1rem;
      border-radius: 0.5rem;
      margin-top: 0.5rem;
    }

    .tab {
      color: #b7b7b7;
      font-family: "SF PRO Text";
      font-size: 12pt;
      font-weight: lighter;
      line-height: 0.75rem;
      padding: 0 1rem;
      cursor: pointer;
      transition: transform 0.2s ease-in-out;

      &:hover {
        color: white;
        transform: scale(1.1);
      }

      @media screen and (max-width: 970px) {
        margin-top: 1rem;
        color: white;
      }
    }
  }

  .title {
    color: #b7b7b7;
    font-size: 22pt;
    font-weight: bolder;
    font-family: "SF PRO Text";
    line-height: 0.75rem;
    letter-spacing: 0.25rem;
    padding: 0 0 1rem 0;
    cursor: pointer;
    border-bottom: solid 4px #fdf100;

    .icon {
      display: none;
      position: absolute;
      color: white;
      right: 0;
      top: 0;
      bottom: 0;
      margin: 1.5rem 2rem;

      @media screen and (max-width: 970px) {
        display: block;
      }
    }
  }

  .empty {
    flex: 1;
  }
`;

const NavHorizontal = () => {
  const [active, setActive] = useState(false);

  return (
    <Nav isActive={active}>
      <div className="title">
        FERRARI
        <GiHamburgerMenu
          className="icon"
          onClick={() => {
            setActive(!active);
          }}
        />
      </div>

      <div className="empty"></div>
      <div className="tabs">
        <div className="tab">FERRARI WORLD</div>
        <div className="tab">MAGAZINE</div>
        <div className="tab">STORE</div>
        <div className="tab">HISTORY</div>
        <div className="tab">CONTACT US</div>
      </div>
    </Nav>
  );
};

export default NavHorizontal;
