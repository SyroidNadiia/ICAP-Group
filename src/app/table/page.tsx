"use client";

import UniversalTable from "./../../components/UniversalTable/UniversalTable";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchContacts } from "@/redux/contacts/operations";
import { getContacts } from "@/redux/contacts/selectors";
import Button from "@/components/Button/Button";
import AddContactModal from "@/components/AddContactModal/AddContactModal";
import Modal from "@/components/Modal/Modal";

export default function Table() {
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts() as any);
  }, [dispatch]);

  const data = useSelector(getContacts);

  if (!data || data.length === 0) {
    return <div>No data to display</div>;
  }

  return (
    <div>
      <h1>Hello</h1>
      <Button onClick={() => setModalOpen(true)}>Add Contact</Button>
      <UniversalTable data={data}></UniversalTable>

      {isModalOpen && (
        <Modal onBackdropClick={() => setModalOpen(false)}>
          <AddContactModal closeModal={() => setModalOpen(false)} />
        </Modal>
      )}
    </div>
  );
}
