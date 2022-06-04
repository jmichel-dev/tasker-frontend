import { useState } from "react";
import { Modal } from "../Modal";
import { NewTaskForm } from "../NewTaskForm";
import { Container, HeaderContainer } from "./styles";

export const Header: React.FC = () => {
  const [openNewTaskModal, setOpenNewTaskModal] = useState(false);

  const handleOpenNewTask = () => {
    console.log("click");
    setOpenNewTaskModal(true);
  };

  const handleCloseNewTask = () => {
    setOpenNewTaskModal(false);
  };

  return (
    <HeaderContainer>
      <Container>
        <h2>Tasker</h2>
        <button onClick={handleOpenNewTask}>Nova task</button>
      </Container>

      <Modal isOpen={openNewTaskModal} onCloseModal={handleCloseNewTask}>
        <NewTaskForm onCloseNewTaskModal={handleCloseNewTask} />
      </Modal>
    </HeaderContainer>
  );
};
