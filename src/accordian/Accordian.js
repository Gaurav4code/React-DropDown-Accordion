import styled from "styled-components";

import { questions } from "./api";
import { useState } from "react";
import MyAccordian from "./MyAccordian";
const Accordian = () => {
  const [data, setData] = useState(questions);

  return (
    <Container>
      <h1>React Interview</h1>
      {data.map((curElem) => {
        const { id } = curElem;

        return <MyAccordian key={id} {...curElem} />;
      })}
    </Container>
  );
};
export default Accordian;

const Container = styled.div`
  border: solid red 1px;
`;
