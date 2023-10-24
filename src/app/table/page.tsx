import { useRouter } from "next/router";
import UniversalTable from "./../../components/UniversalTable/UniversalTable";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "@/redux/contacts/operations";

export default function Table() {
  const dispatch = useDispatch();


  return (
    <div>
      <h1>Hello</h1>
     
    </div>
  );
}
