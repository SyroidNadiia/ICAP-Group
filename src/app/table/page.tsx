"use client";

import { useRouter } from "next/router";
import UniversalTable from "./../../components/UniversalTable/UniversalTable";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "@/redux/contacts/operations";
import { getContacts } from "@/redux/contacts/selectors";

export default function Table() {
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
      <UniversalTable data={data}></UniversalTable>
    </div>
  );
}
