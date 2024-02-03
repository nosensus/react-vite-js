import { createPortal } from "react-dom";
import classes from "./Modal.module.css";
import { useEffect, useRef } from "react";

export default function Modal({ children, modalState }) {
  const dialog = useRef();

  // useEffect - ничего не возвращает, а принимает только два параметра.
  // Тем самым мы регистрируем задачи которые реакт компоненту необходимо будет выполнить.
  // Он начинает работать не когда реакт компонент отрендорил все на странице, а когда закончил.То потом use Effect начинает работать
  // колбек ф-ю () => {} -
  // и массив [] - массив зависимостей (от чего зависит этот эффект), указываем состояние которые явл-ся реактивными.
  useEffect(() => {
    if (modalState) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [modalState]); // здессь эффект зависит от open, modalState, поэтому указываем в массив

  return createPortal(
    <dialog className={classes.modal} ref={dialog}>
      {children}
    </dialog>,
    document.getElementById("modalWi") // второй параметр куда зарендорить нам модальное окно в index.html
  );
}
