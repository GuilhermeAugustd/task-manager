import styled from "styled-components";


export const ModalContent = styled.div`
  background-color: #cef2d0;
  padding: 50px 120px 120px 120px;
  border: 1px solid transparent;
  width: 25%;
  border-radius: 150px;
`;

export const ModalTitle = styled.h1`
display: flex;
justify-content: center;
align-items: center; 
font-size: 16px;
padding-bottom: 10px;
margin-top: 0;
color: #1e6b23;
`;

export const ItemContainer = styled.li`
    list-style-type: none;
    padding: 10px 10px 10px 20px;
    background-color: white;
    margin: 18px 0;
    display:flex;
    color: #15bd20;
    justify-content: space-between;
    border-radius: 5px;
`;

export const ListContainer = styled.ul`
  padding: 0;
  margin: 0;
`;

export const Form = styled.form`
  display: flex;
  border: 4px solid #15bd20;
  border-radius: 4px; 
`;

export const InputEdit = styled.input`
width: 100%;
font-size:18px;
height: 50px;
padding: 0px 15px;
outline: none;
::placeholder {
  padding:5px;
}
`;

export const InputForm = styled.input`
    width: 100%;
    font-size:18px;
    height: 50px;
    padding: 0px 15px;
    outline: none;
    ::placeholder {
      padding:5px;
   }
`;

export const ButtonItem = styled.button`
    background: none;
    border: none;
    font-size: 18px;
    color: #15bd20;
    display: inline-flex;
    align-items: center;
`;

export const ModalConteiner = styled.div`
  position: fixed; 
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%; 
  display:flex;
  justify-content:center;
  align-items:center;
  height: 100%;
  overflow: auto; 
  background-image: linear-gradient(to right, #23db2f , #95fa66);
`;

export const ButtonForm = styled.button`
	background-color: #15bd20;
  border: none;
  width: auto;
  float:right;
  padding: 0 15px;
`;

export const DivButtons = styled.div`
  border: none;
`;