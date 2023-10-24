import { selectIsLoggedIn, selectUser } from "@/redux/auth/authSelectors";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";


export const useAuth = () => {
  const isLoggedIn = useSelector((state: RootState) =>
    selectIsLoggedIn);
    
  const user = useSelector((state: RootState) => selectUser);

  return {
    isLoggedIn,
    user,
  };
};
