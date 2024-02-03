import { useEffect, useState, useCallback } from "react";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import useInput from "../hooks/useInput";

// useCallBack - для того если нам не нужно каждый раз вызывать функцию, а только 1 раз на первый рендер страницы

export default function EffectSection() {
  const inputCustom = useInput(); // object inputCustom has (value and onChange function)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  // как не стоит делать запросы в реакт
  // fetch("https://jsonplaceholder.typicode.com/users"); - будет постоянно идти запрос после каждого обновление стейта

  // 1 вариант
  // эта ф-я будет вызываться постоянно, поэтому перепишем на колбек ниже
  // async function fetchUsers() {
  //   setLoading(true);
  //   const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //   const users = await response.json();
  //   setUsers(users);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  // 2 вариант - внести во внутрь не будет вызываться каждый раз а только при рендере
  // useEffect(() => {
  //   async function fetchUsers() {
  //     setLoading(true);
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/users"
  //     );
  //     const users = await response.json();
  //     setUsers(users);
  //     setLoading(false);
  //   }
  //   fetchUsers();
  // }, []);

  // 3 вариант
  // тем самым функция будет указывать на один и тот же указатель
  const fetchUsers = useCallback(async () => {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    setUsers(users);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]); //т.к эффект уже зависит от fetchUssers поэтому добавляем

  function openModal({ event }) {
    setIsModalOpen(true);
  }

  return (
    <section>
      <h3>Effect</h3>

      <Button onClickBtn={openModal}>Open modal</Button>

      <Modal modalState={isModalOpen}>
        <h3>Hello modal</h3>
        <p>lorem ipsum</p>
        <Button onClickBtn={() => setIsModalOpen(false)}>Close modal</Button>
      </Modal>

      {loading && <p> Loading ...</p>}

      {!loading && (
        <>
          {/* <input type="text" className="control" value={input.value} onChange={ } /> */}
          <label htmlFor="search">Search</label>
          <input id="search" type="text" {...inputCustom} />
          <h4>{inputCustom.value}</h4>
          <ul>
            {users
              .filter((user) =>
                user.name
                  .toLowerCase()
                  .includes(inputCustom.value.toLowerCase())
              )
              .map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
          </ul>
        </>
      )}
    </section>
  );
}
