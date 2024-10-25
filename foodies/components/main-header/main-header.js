import Link from "next/link";
import logo from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-bg";
import NavLink from "./nav-link";

export default function PageHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logo} alt="Fo0die logo" priority />
          NextLevel Food
        </Link>
        <NavLink />
      </header>
    </>
  );
}
