import React from "react";
import styled from "styled-components";
import useFetch from "../useFetch";
import Transaction from "./Transaction";

const Scrollable = styled.div`
  overflow-x: auto;

  h1 {
    text-align: center;
  }
`;

const ErrorMsg = styled.h1`
  color: #ccc;
`;

const LoadingMsg = styled.h1`
  color: #0094da;
`;

const Table = styled.table`
  border-collapse: collapse;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  font-size: 0.9em;
  margin: 25px auto;
  min-width: 400px;

  thead tr {
    background-color: #0094da;
    color: #ffffff;
    text-align: left;
  }

  th,
  td {
    padding: 12px 15px;
  }

  tbody tr {
    border-bottom: 1px solid #dddddd;
  }

  tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  tbody tr:last-of-type {
    border-bottom: 2px solid #0094da;
  }
`;

function TransactionsTable() {
  const { data: transactions, isLoaded, error } = useFetch(
    "https://my-json-server.typicode.com/alexradulescu/transactions-fake-api/transactions"
  );

  return (
    <Scrollable>
      {error && <ErrorMsg>Error: {error.message}</ErrorMsg>}
      {!isLoaded && <LoadingMsg>Loading...</LoadingMsg>}
      {!error && isLoaded && (
        <Table>
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Action</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <Transaction
                key={transaction.id}
                timestamp={transaction.timestamp}
                action={transaction.action}
                description={transaction.description}
                amount={transaction.amount}
                currency={transaction.currency}
              />
            ))}
          </tbody>
        </Table>
      )}
    </Scrollable>
  );
}

export default TransactionsTable;
