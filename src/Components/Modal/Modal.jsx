import { createPortal } from "react-dom";
import { BackDrop } from "./Modal.styled";
import { useEffect } from "react";

const modalRoot = document.querySelector('#modal-root');

const Modal = ( {children, toggleOpen} ) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
          if (e.key === "Escape") {
            toggleOpen();
          }
        };
      
        window.addEventListener("keydown", handleKeyDown);
      
        return () => {
          window.removeEventListener("keydown", handleKeyDown);
        };
      }, [toggleOpen]);

    return createPortal(<BackDrop><div>{children}<button type="button" onClick={toggleOpen}>Закрити</button></div></BackDrop>,modalRoot);
}

export default Modal;