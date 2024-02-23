import { useSelector } from "react-redux";
import { Contact } from "./Contact/Contact";
import css from "./ContactList.module.css";

export const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filters = useSelector((state) => state.filters.filter.value);

  let newContacts = contacts.filter((item) =>
    item.name.toLowerCase().includes(filters.toLowerCase())
  );

  return (
    <ul className={css.contact_list}>
      {newContacts.map((user) => (
        <Contact user={user} key={user.id} />
      ))}
    </ul>
  );
};
