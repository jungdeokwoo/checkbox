import react, { useState, useEffect } from "react";
import styled from "styled-components";
import CheckBox from "./component/CheckBox";

function App() {
  const [checkedList, setCheckedList] = useState([]);
  const [isCheckedAll, setIsCheckedAll] = useState(false);

  useEffect(() => {
    checkedList.length === 5 ? setIsCheckedAll(true) : setIsCheckedAll(false);
  }, [checkedList.length]);

  const changeAllHandler = () => {
    setIsCheckedAll(!isCheckedAll);
    isCheckedAll
      ? setCheckedList([])
      : setCheckedList([
          "checkOne",
          "checkTwo",
          "checkThree",
          "checkFour",
          "checkFive",
        ]);
  };

  return (
    <Main>
      <CheckBoxAll
        type="checkbox"
        name="CheckAll"
        onChange={changeAllHandler}
        checked={isCheckedAll}
      />

      <Content>
        <CheckBox checkedList={checkedList} setCheckedList={setCheckedList}>
          checkOne
        </CheckBox>
        <CheckBox checkedList={checkedList} setCheckedList={setCheckedList}>
          checkTwo
        </CheckBox>
        <CheckBox checkedList={checkedList} setCheckedList={setCheckedList}>
          checkThree
        </CheckBox>
        <CheckBox checkedList={checkedList} setCheckedList={setCheckedList}>
          checkFour
        </CheckBox>
        <CheckBox checkedList={checkedList} setCheckedList={setCheckedList}>
          checkFive
        </CheckBox>
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
