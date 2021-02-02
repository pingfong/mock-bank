import React from "react";
import styled from "styled-components";

const Footing = styled.footer`
  bottom: 0;
  height: 2.5rem;
  position: absolute;
  text-align: center;
  width: 100%;

  p {
    color: #ccc;
  }
`;

function Footer() {
  const year = new Date().getFullYear();
  return (
    <Footing>
      <p>Copyright ⓒ {year} Mock Bank</p>
    </Footing>
  );
}

export default Footer;
