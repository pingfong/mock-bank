import React from "react";
import styled from "styled-components";

const Landing = styled.div`
  color: #0094da;
  font-weight: bold;
  position: absolute;
  left: 50%;
  top: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
`;

const Break = styled.hr`
  border: 1px solid white;
  margin: 16px auto 32px;
`;

function Home() {
  return (
    <Landing>
      <h1>Welcome to Mock Bank!</h1>
      <Break />
      <h3>
        Use the links above to view your transactions or create a new
        transaction.
      </h3>
    </Landing>
  );
}

export default Home;
