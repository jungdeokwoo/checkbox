import react, { useState, useEffect } from "react";
import styled from "styled-components";

function App() {
  const [checkedList, setCheckedList] = useState([]);
  const [isCheckedAll, setIsCheckedAll] = useState(false);

  useEffect(() => {
    checkedList.length === 5 ? setIsCheckedAll(true) : setIsCheckedAll(false);
  }, [checkedList.length]);

  const changeHandler = ({ target }) => {
    checkedList.includes(target.name)
      ? setCheckedList((prev) => prev.filter((item) => item !== target.name))
      : setCheckedList((prev) => [...prev, target.name]);
  };

  const changeAllHandler = () => {
    setIsCheckedAll(!isCheckedAll);
    isCheckedAll === true
      ? setCheckedList([])
      : setCheckedList(["checkA", "checkB", "checkC", "checkD", "checkE"]);
  };

  console.log(checkedList, isCheckedAll);

  return (
    <Main>
      <CheckBoxAll
        type="checkbox"
        name="CheckAll"
        onChange={changeAllHandler}
        checked={isCheckedAll}
      />

      <Content>
        <CheckBoxA
          type="checkbox"
          name="checkA"
          onChange={changeHandler}
          checked={checkedList.includes("checkA")}
        />
        <CheckBoxB
          type="checkbox"
          name="checkB"
          onChange={changeHandler}
          checked={checkedList.includes("checkB")}
        />
        <CheckBoxC
          type="checkbox"
          name="checkC"
          onChange={changeHandler}
          checked={checkedList.includes("checkC")}
        />
        <CheckBoxD
          type="checkbox"
          name="checkD"
          onChange={changeHandler}
          checked={checkedList.includes("checkD")}
        />
        <CheckBoxE
          type="checkbox"
          name="checkE"
          onChange={changeHandler}
          checked={checkedList.includes("checkE")}
        />
      </Content>
    </Main>
  );
}

export default App;

const Main = styled.div`
  width: 100%;
  height: 100%;
  background-color: aliceblue;
`;

const CheckBoxAll = styled.input`
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: antiquewhite;
`;

const CheckBoxA = styled(CheckBoxAll)``;
const CheckBoxB = styled(CheckBoxAll)``;
const CheckBoxC = styled(CheckBoxAll)``;
const CheckBoxD = styled(CheckBoxAll)``;
const CheckBoxE = styled(CheckBoxAll)``;
