import styled from "styled-components";

const Nav = styled.section`
  position: absolute;
  background: transparent;
  top: 0;
  bottom: 0;

  .tabs {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 6rem 0 4rem 0;
    margin-left: 2rem;

    @media screen and (max-width: 620px) {
      margin-left: 1rem;
    }

    .tab {
      color: white;
      font-size: 14pt;
      font-weight: bold;
      font-family: "SF PRO Text";
      line-height: 2rem;
      margin-right: -1rem;
      cursor: pointer;
      writing-mode: vertical-rl;
      transform-origin: 50% 50%;
      transform: rotate(180deg);

      &::after {
        content: "";
        display: block;
        height: 100%;
        width: 4px;
        background-color: red;
        transition: background-color 0.2s ease-in-out;
      }
      &:hover {
        &::after {
          background-color: #fdf100;
        }
      }
    }
  }
`;

const NavVertical = () => {
  return (
    <Nav>
      <div className="tabs">
        <div className="tab">OFF-ROAD</div>
        <div className="tab">URBAN</div>
        <div className="tab">RACING</div>
        <div className="tab">AUTO</div>
      </div>
    </Nav>
  );
};

export default NavVertical;
