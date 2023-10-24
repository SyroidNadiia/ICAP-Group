import React, { useState } from "react";
import styles from "./AddContactModal.module.scss";
import { useDispatch, useSelector } from "react-redux";

import Button from "../Button/Button";
import { addContact } from "@/redux/contacts/operations";
import { getContacts } from "@/redux/contacts/selectors";
import store from "@/redux/store";
import Input from "../Input/Input";

type AddContactModalProps = {
  closeModal: () => void;
};

const AddContactModal: React.FC<AddContactModalProps> = ({ closeModal }) => {
  const [newContact, setNewContact] = useState<{ [key: string]: string }>({});
  const dispatch = useDispatch<typeof store.dispatch>();
  const data = useSelector(getContacts);
  const columns = Object.keys(data[0]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    columnName: string
  ) => {
    setNewContact({
      ...newContact,
      [columnName]: e.target.value,
    });
  };

  const handleAddContact = () => {
    const { address, birthday_date, email, name, phone_number } = newContact;
      const contactData = {
          TableData: {
              address,
              birthday_date,
              email,
              name,
              phone_number
          }
    };

    dispatch(addContact(contactData));
    closeModal();
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Add New Contact</h2>
        <form>
          {columns.map((column, index) => (
            <div key={column}>
              {index !== 0 && (
                <>
                  <Input
                    type="text"
                    name={column} 
                    placeholder={`Enter ${column}`}
                    onChange={(e) => handleInputChange(e, column)}
                  />
                </>
              )}
            </div>
          ))}
        </form>
        <Button onClick={handleAddContact}>Add</Button>
        <Button onClick={closeModal}>Cancel</Button>
      </div>
    </div>
  );
};

export default AddContactModal;
