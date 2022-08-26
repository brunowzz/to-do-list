import styled from "styled-components"
import { FcEmptyTrash, FcCheckmark } from 'react-icons/fc'

export const Container = styled.div`
  background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const List = styled.div`
  width: 541px;
  padding: 20px;
  background: #FFFFFF;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const InputTask = styled.input`
 width: 342px;
  border: none;
  outline: none;
  margin-right: 10px;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #000000;
`

export const AddTask = styled.button`
    width: 130px;
  height: 40px;
  margin-left: 20px;
  background: #8052EC;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  border: none;
  font-weight: 900;
  font-size: 17px;
  line-height: 2px;
  color: #FFFFFF;
  &:hover {
    opacity: 0.85;
  }
  &:active {
    opacity: 0.5;
  }
`

export const Itens = styled.div`
  width: 500px;
  height: 60px;
  margin: 0 40px 30px 0;
  padding: 0 15px;
  background: ${props => props.isFinished ? '#E8FF8B' : '#E4E4E4'} ;
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
`

export const Trash = styled(FcEmptyTrash)`
  cursor: pointer;
`

export const Check = styled(FcCheckmark)`
  cursor: pointer;
`

