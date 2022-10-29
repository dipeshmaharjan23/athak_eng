import Link from "next/link";
import React from "react";

type Props = {};

export default function NavLogo({ }: Props) {
  return (
      <Link href={"/"}>
        <img
          src="/ATHAK_eng.png"
          alt="logo"
          height="42"
          width="147"
          style={{cursor:"pointer"}}
        />
      </Link>
  );
}
