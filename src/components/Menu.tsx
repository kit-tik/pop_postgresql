"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "HBCD", url: "/hbcd" },
  { id: 3, title: "PFAS", url: "/pfas" },
  { id: 4, title: "Contact", url: "/contact" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  // TEMPORARY
  const user = false;
  return (
    <div>
      
      {/* SHORTCUT */}
      <Image
        src={open ? "/close.png" : "/open.png"}
        alt=""
        width={20}
        height={20}
        onClick={() => setOpen(!open)}
        className="cursor-pointer"
      />
      {open && (
        <div className="bg-blue-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}

          {/* SHORTCUT */}
          <Link
            href={user ? "/profile" : "login"}
            onClick={() => setOpen(false)}
          >
            {user ? "Profile" : "Login"}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
