import React from "react";

function Transaction(props) {
  return (
    <tr>
      <td>{props.timestamp}</td>
      <td>{props.action}</td>
      <td>{props.description}</td>
      <td>{props.amount}</td>
      <td>{props.currency}</td>
    </tr>
  );
}

export default Transaction;
