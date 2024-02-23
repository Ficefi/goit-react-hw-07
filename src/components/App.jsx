import "./App.css";
import { useEffect, useState } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { SearchBox } from "./SearchBox/SearchBox";
import { ContactList } from "./ContactsList/ContactList";

const key = "saved-users";

export const App = () => {
  // const [users, setUsers] = useState(() => {
  //   const savedUsers = window.localStorage.getItem(key);

  //   if (savedUsers !== null) {
  //     return JSON.parse(savedUsers);
  //   }

  //   return usersList;
  // });
  // const [valueSearchBox, setValueSearchBox] = useState("");

  // const visibleUsers =
  // );

  // useEffect(() => {
  //   window.localStorage.setItem(key, JSON.stringify(users));
  // }, [users]);

  // const addToList = (newbie) => {
  //   setUsers((prevUsers) => {
  //     return [...prevUsers, newbie];
  //   });
  // };

  return (
    <div>
      <h2
        style={{
          color: "white",
          textAlign: "center",
        }}
      >
        Phonebook
      </h2>

      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};
