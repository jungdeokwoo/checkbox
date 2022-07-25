import React from "react";
import styled from "styled-components";

const CheckBox = ({ checkedList, setCheckedList, children }) => {
  const changeHandler = (name) => {
    checkedList.includes(name)
      ? setCheckedList((prev) => prev.filter((item) => item !== name))
      : setCheckedList((prev) => [...prev, name]);
  };

  return (
    <Check
      type="checkbox"
      onChange={() => changeHandler(children)}
      checked={checkedList.includes(children)}
    />
  );
};

export default CheckBox;

const Check = styled.input`
  width: 100%;
`;
