"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import Image from "next/image";
import menu from "../../../public/menu.svg";

export default function Navbar({}) {
  const [open, setOpen] = useState(false);
  const menuItems = [
    "Reservations",
    "Your Parking Offers",
    "Account",
    "Sign In",
  ];
  const menuRef = useRef();
  const imgRef = useRef();

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== imgRef.current) {
      setOpen(false);
    }
  });
  return (
    <nav>
      <div className="flex items-center justify-between">
        <Link href="/">
          <h1 className="navbar-logo">
            <b>PARKING</b>BOOKING
          </h1>
        </Link>
        <div className="relative">
          <Image
            className="w-10 h-30 flex pt-15"
            ref={imgRef}
            src={menu}
            alt="menu"
            onClick={() => setOpen((open) => !open)}
          ></Image>

          {open && (
            <div
              className="text-slate-50 p-3 e-52 bg-deep-dusk	absolute -left-24 top-18 rounded-lg	"
              ref={menuRef}
            >
              <ul>
                {menuItems.map((element) => (
                  <li
                    onClick={() => setOpen(false)}
                    className="p-1 text-lg cursor-pointer rounded hover:bg-purple-900"
                    key={element}
                  >
                    {element}{" "}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
