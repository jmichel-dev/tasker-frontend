import ReactModal from "react-modal";

interface ModalProps {
  isOpen: boolean;
  onCloseModal: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onCloseModal,
  children,
}) => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onCloseModal}>
      {children}
    </ReactModal>
  );
};
