import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import UserNav from "./UserNav";

export default function Header() {
  return (
    <header className="py-4 flex items-center justify-between gap-4">
      <Logo />
      <Navigation />
      <UserNav />
    </header>
  );
}
