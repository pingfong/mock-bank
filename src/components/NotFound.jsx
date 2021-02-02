import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PageNotFound = styled.div`
  color: #0094da;
  font-weight: bold;
  position: absolute;
  left: 50%;
  top: 50%;
  text-align: center;
  transform: translate(-50%, -50%);

  h1 {
    margin-bottom: 8px;
  }

  h3 {
    margin-bottom: 1.5em;
  }

  a {
    background-color: #0094da;
    color: white;
    padding: 1em 1.5em;
    text-decoration: none;
    text-transform: uppercase;
  }

  a:hover {
    background-color: #ccc;
  }

  a:active {
    background-color: black;
  }
`;

function NotFound() {
  return (
    <PageNotFound>
      <h1>404</h1>
      <h3>This isn't the page you're looking for...</h3>
      <br />
      <Link to="/">Go Back Home</Link>
    </PageNotFound>
  );
}

export default NotFound;
