import React, { useEffect, useState, useContext } from "react";

import ContactCard from "../component/ContactCard.js";
import AddContact from "../component/AddContact.js";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

const Home = () => {
  const { store, actions } = useContext(Context);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    actions.getContacts();
  }, []);
  useEffect(() => {
    setContacts(store.contacts)
  }, [store.contacts]);
  return (
    <div className="container">
      <div>
        <Link to="/createContact">
          <button type="button" className="btn btn-success">
            Add new contact
          </button>
        </Link>
        <div
          id="contacts"
          className="panel-collapse collapse show"
          aria-expanded="true"
        >
          <ul className="list-group pull-down" id="contact-list">
            {contacts.map((item) => {
              return <ContactCard obj={item} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
