import Navigation from "@/components/Navigation/Navigation";
import styles from "./page.module.css";

export default function Home() {
  const navLinks = [
    { label: "Login", href: "/signin" },
    { label: "Table", href: "/table" },
  ];
  return (
    <main className={styles.main}>
      <Navigation navLinks={navLinks} />
      <h1>Hello world</h1>
    </main>
  );
}
