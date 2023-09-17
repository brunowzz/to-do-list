import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";
import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding-top: 40px;
  background: linear-gradient(90deg, #383838 0%, #000 81.25%);
`;

export const ToDoList = styled.section`
  padding: 20px 30px;
  border-radius: 5px;
  background: #fff;
`;

export const Input = styled.input`
  width: 342px;
  height: 40px;
  margin-right: 30px;
  padding: 10px;
  border-radius: 5px;
  border: 2px solid rgba(209, 211, 212, 0.4);
  outline: none;
`;

export const Button = styled.button`
  width: 130px;
  height: 40px;
  margin-bottom: 40px;
  border: none;
  border-radius: 5px;
  background: #8052ec;
  font-size: 17px;
  font-weight: 900;
  color: #fff;
  transition: 0.5s ease-in;

  &:hover {
    transform: scale(101%);
    opacity: 0.9;
    cursor: pointer;
  }
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  height: 60px;
  margin-bottom: 15px;
  padding: 0 20px;
  border-radius: 5px;
  background: ${(props) => (props.isFinished ? "#E8FF8B" : "#E4E4E4")};
  box-shadow: 1px 4px 10px 0px rgba(0, 0, 0, 0.2);

  li {
    font-size: 15px;
    font-weight: 400;
    color: #000;
    list-style: none;
  }
`;

export const DontHaveItens = styled.h2`
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    color: #010101;
`

export const Trash = styled(FcEmptyTrash)`
  cursor: pointer;
`;

export const Check = styled(FcCheckmark)`
  cursor: pointer;
`;
