import { createContext, useContext, useState } from "react";
import data from "../data";

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
    const [contacts, setContacts] = useState(data);
    const[editMode , setEdit]=useState(false)
  
    const createNew = (newContact) => {
      setContacts([...contacts, newContact]);
    };
  
    const deleteContact = (id) => {
      setContacts(contacts.filter((p) => p.id !== id));
    };

  
    return (
      <ContactContext.Provider value={{ contacts, createNew, deleteContact }}>
        {children}
      </ContactContext.Provider>
    );
  };


  export function ContactManager() {
    return useContext(ContactContext)
}