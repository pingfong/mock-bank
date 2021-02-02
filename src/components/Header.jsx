import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";

const Heading = styled.header`
  align-items: center;
  background-color: #0094da;
  color: #fff;
  display: flex;
  margin: 0 auto;
  padding: 16px 32px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);

  h1 {
    font-weight: 200;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    color: #ccc;
  }
`;

const Links = styled.div`
  margin-left: auto;

  a {
    margin-left: 20px;
    padding: 5px;
  }
`;

function Header() {
  return (
    <Heading>
      <h1>
        <Link to="/">
          <AccountBalanceIcon /> Mock Bank
        </Link>
      </h1>
      <Links>
        <Link to="/transactions">Transactions</Link>
        <Link to="/create">Create Transaction</Link>
      </Links>
    </Heading>
  );
}

export default Header;
