import React, { useState } from "react";
import { FaCheck, FaPlus, FaTimes, FaEdit } from "react-icons/fa";
import { start } from "repl";
import {
  ModalContent,
  ModalTitle,
  ItemContainer,
  ListContainer,
  Form,
  InputEdit,
  InputForm,
  ButtonItem,
  ModalConteiner,
  ButtonForm,
  DivButtons,
} from "./App.style";


const defaultList = [
  { task: "study Redux", finished: false },
  { task: "study Typescript", finished: false },
  { task: "study React", finished: true },
];

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState(defaultList);
  const [editList, setEditList] = useState<boolean>(false);

  function toogleStatusItem(position: number, status: boolean) {
    const newArray = [...list];
    newArray[position].finished = status;
    setList(newArray);
  }

  function editTaskItem(position: number, newTask: string) {
    const editArray = [...list];
    editArray[position].task = newTask
    setList(editArray);
  }

  function removeItem(position: number) {
    const newArray = [...list].filter((item, index) => index !== position);
    setList(newArray);
  }

  function addItem(event: any) {
    event.preventDefault();
    const listItem = { task: item, finished: false };
    if (!!listItem) {
      setList((prevList) => ([...prevList, listItem]));
      setItem("");
    }
  }

  function openInput() {
    setEditList(true)

  }

  return (
    <ModalConteiner>
      <ModalContent>
        <ModalTitle>
          <h1>Task Manager</h1>
        </ModalTitle>
        <Form
          onSubmit={(event) => addItem(event)}
        >
          <InputForm
            type="text"
            value={item}
            placeholder="Add a task here..."
            onChange={(event) => setItem(event.target.value)}

          />
          <ButtonForm type="submit">
            <FaPlus style={{ color: "white", fontSize: "24px" }} />
          </ButtonForm>
        </Form>
        <ListContainer
          style={{ borderBottom: "5px solid rgb(41, 188, 68)" }}
        >
          {list.map((item, index) => {
            if (!item.finished) {
              return (
                <ItemContainer key={index}>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontWeight: 600,
                      fontSize: "18px",
                    }}
                  >
                    {item.task}
                  </span>
                  <DivButtons>
                    <ButtonItem
                      onClick={() => openInput()}
                    >
                      <FaEdit
                        style={{
                          background: "#cef2d0",
                          padding: "5px",
                          borderRadius: "8px",
                        }}
                      >
                        <InputEdit
                          type="text"
                          placeholder="Add a new name here..."
                        />
                      </FaEdit>
                    </ButtonItem>
                    <ButtonItem onClick={() => toogleStatusItem(index, true)}>
                      <FaCheck
                        style={{
                          background: "#cef2d0",
                          padding: "5px",
                          borderRadius: "10px",
                        }}
                      />
                    </ButtonItem>
                    <ButtonItem onClick={() => removeItem(index)}>
                      <FaTimes
                        style={{
                          background: "#cef2d0",
                          padding: "5px",
                          borderRadius: "10px",
                        }}
                      />
                    </ButtonItem>
                  </DivButtons>
                </ItemContainer>
              )
            }
            return null;
          })}
        </ListContainer>
        <ListContainer>
          {list.map((item, index) => {
            if (item.finished) {
              return (
                <ItemContainer
                  style={{
                    backgroundColor: "#15bd20",
                    color: "white",
                    fontWeight: 600,
                    fontSize: "18px",
                    marginBottom: 0,
                  }}
                  key={index}
                >
                  <span style={{ display: "flex", alignItems: "center" }}>
                    {item.task}
                  </span>
                  <DivButtons>
                    <ButtonItem>
                      <FaEdit onClick={() => editTaskItem}
                        style={{
                          background: "#cef2d0",
                          padding: "5px",
                          borderRadius: "8px",
                        }}
                      >
                        <InputEdit
                          type="text"
                          placeholder="Add a new name here..."
                          onChange={(newName) => setItem(newName.target.value)}
                        />
                      </FaEdit>
                    </ButtonItem>
                    <ButtonItem onClick={() => toogleStatusItem(index, false)}>
                      <FaCheck
                        style={{
                          background: "#cef2d0",
                          padding: "5px",
                          borderRadius: "10px",
                        }}
                      />
                    </ButtonItem>
                  </DivButtons>
                </ItemContainer>
              );
            }
            return null;
          })}
        </ListContainer>
      </ModalContent>
    </ModalConteiner>
  );
}

export default App;
