import { useAuth } from "@/hooks/useAuth";
import { selectIsLoggedIn } from "@/redux/auth/authSelectors";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";

type NavLink = {
  label: string;
  href: string;
};
type Props = {
  navLinks: NavLink[];
};

const Navigation = ({ navLinks }: Props) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      {navLinks.map((link) => (
        <Link key={link.label} href={link.href}>
          {link.label}
        </Link>
      ))}

      {isLoggedIn ? (
        <>
          <Link href="/table">Table</Link>
        </>
      ) : (
        <Link href="/signin">SignIn</Link>
      )}
    </>
  );
};

export default Navigation;
