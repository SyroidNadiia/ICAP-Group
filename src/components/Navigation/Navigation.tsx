import { useAuth } from "@/hooks/useAuth";

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
  return (
    <>
      {navLinks.map((link) => (
        <Link key={link.label} href={link.href}>
          {link.label}
        </Link>
      ))}
    </>
  );
};

export default Navigation;
