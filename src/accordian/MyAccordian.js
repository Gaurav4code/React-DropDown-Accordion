import React from "react";
import styled from "styled-components";
import { useState } from "react";
const MyAccordian = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Main>
        <h1>{question}</h1>
        <Button onClick={() => setShow(!show)}>{show ? "-" : "+"}</Button>
      </Main>
      {show && <p>{answer}</p>}
    </>
  );
};

export default MyAccordian;

const Main = styled.div`
  display: flex;
  border: solid 2px blue;
`;
const Button = styled.button``;
