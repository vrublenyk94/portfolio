"use client";
import classes from "./main-header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function NavLink() {
  const path = usePathname();
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link
            href="/meals"
            className={path.startsWith("/meals") ? classes.active : undefined}
          >
            Browse Meals
          </Link>
        </li>
        <li>
          <Link
            href="/community"
            className={
              path.startsWith("/community") ? classes.active : undefined
            }
          >
            Food Community
          </Link>
        </li>
      </ul>
    </nav>
  );
}
