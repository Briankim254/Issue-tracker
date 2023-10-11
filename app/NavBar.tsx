'use client';

import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import { usePathname } from "next/navigation";
import classnames from 'classnames';

function NavBar() {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ]; 
  const currentPath = usePathname();
  return (
    <nav className="flex  space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href={"/"}>
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
            <Link key={link.href} className={classnames({
              "text-zinc-900": currentPath === link.href,
              "text-zinc-500": currentPath !== link.href,
              'hover:text-zinc-00': true,
            })}
             href={link.href}>{link.label}</Link>         
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;