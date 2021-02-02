import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: rgb(0, 148, 218, 0.1);
  border-radius: 5px;
  margin: 25px 16px 0;
  padding: 20px;

  h3 {
    text-align: center;
  }

  label {
    padding: 12px 12px 12px 0;
    display: inline-block;
  }

  input,
  select {
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 12px;
    resize: vertical;
    width: 100%;
  }
`;

const FailureMsg = styled.h3`
  color: #ccc;
`;

const SuccessMsg = styled.h3`
  color: #0094da;
`;

const Row = styled.div`
  &:after {
    clear: both;
    content: "";
    display: table;
  }
`;

const Col25 = styled.div`
  float: left;
  margin-top: 6px;
  width: 25%;

  @media screen and (max-width: 600px) {
    margin-top: 0;
    width: 100%;
  }
`;

const Col75 = styled.div`
  float: left;
  margin-top: 6px;
  width: 75%;

  @media screen and (max-width: 600px) {
    margin-top: 0;
    width: 100%;
  }
`;

const CreateBtn = styled.button`
  background-color: #0094da;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  float: right;
  margin-top: 15px;
  padding: 12px 20px;

  @media screen and (max-width: 600px) {
    margin-top: 40px;
    width: 100%;
  }
`;

function CreateTransaction() {
  const [timestamp, setTimestamp] = useState("");
  const [action, setAction] = useState("CREDIT");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("HKD");

  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState(null);
  const [failure, setFailure] = useState(false);
  const [success, setSuccess] = useState(false);

  function createTransaction(event) {
    event.preventDefault();
    setFailure(false);
    setSuccess(false);

    const transaction = { timestamp, action, description, amount, currency };
    setIsCreating(true);

    fetch(
      "https://my-json-server.typicode.com/alexradulescu/transactions-fake-api/transactions",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(transaction)
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw Error("Failed to fetch");
        }
        setTimestamp("");
        setAction("CREDIT");
        setDescription("");
        setAmount(0);
        setCurrency("HKD");
        setSuccess(true);
        setIsCreating(false);
      })
      .catch((error) => {
        setError(error);
        setFailure(true);
        setIsCreating(false);
      });
  }

  return (
    <Container>
      {failure && (
        <FailureMsg>Error: {error.message}. Please try again later.</FailureMsg>
      )}
      {success && (
        <SuccessMsg>Transaction was successfully created!</SuccessMsg>
      )}
      <form id="transaction-form" onSubmit={createTransaction}>
        <Row>
          <Col25>
            <label htmlFor="timestamp">Date</label>
          </Col25>
          <Col75>
            <input
              type="date"
              id="timestamp"
              name="timestamp"
              required
              value={timestamp}
              onChange={(event) => setTimestamp(event.target.value)}
            />
          </Col75>
        </Row>

        <Row>
          <Col25>
            <label htmlFor="action">Action</label>
          </Col25>
          <Col75>
            <select
              id="action"
              name="action"
              value={action}
              onChange={(event) => setAction(event.target.value)}
            >
              <option value="CREDIT">CREDIT</option>
              <option value="DEBIT">DEBIT</option>
            </select>
          </Col75>
        </Row>

        <Row>
          <Col25>
            <label htmlFor="description">Description</label>
          </Col25>
          <Col75>
            <input
              type="text"
              id="description"
              name="description"
              placeholder="Enter a brief description..."
              required
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </Col75>
        </Row>

        <Row>
          <Col25>
            <label htmlFor="amount">Amount</label>
          </Col25>
          <Col75>
            <input
              type="number"
              id="amount"
              name="amount"
              placeholder="Enter the amount..."
              min="0"
              step="0.01"
              required
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
            />
          </Col75>
        </Row>

        <Row>
          <Col25>
            <label htmlFor="currency">Currency</label>
          </Col25>
          <Col75>
            <select
              id="currency"
              name="currency"
              value={currency}
              onChange={(event) => setCurrency(event.target.value)}
            >
              <option value="HKD">HKD</option>
              <option value="SGD">SGD</option>
              <option value="USD">USD</option>
            </select>
          </Col75>
        </Row>

        <Row>
          {!isCreating && <CreateBtn type="submit">Create</CreateBtn>}
          {isCreating && (
            <CreateBtn type="submit" disabled>
              Creating...
            </CreateBtn>
          )}
        </Row>
      </form>
    </Container>
  );
}

export default CreateTransaction;
