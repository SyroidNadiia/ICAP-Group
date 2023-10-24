import { useSelector } from "react-redux";

import { selectIsLoggedIn, selectUser } from "@/redux/auth/authSelectors";
import { RootState } from "@/redux/store";


export const useAuth = () => {
  const isLoggedIn = useSelector((state: RootState) =>
    selectIsLoggedIn);
    
  const user = useSelector((state: RootState) => selectUser);

  return {
    isLoggedIn,
    user,
  };
};
