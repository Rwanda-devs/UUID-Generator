import React from "react";
import Link from "next/link";
import { Fragment } from "react";

const Header = () => {
  return (
    <>
      <div id="header">
        <h1 id="header_title">UUID GENERATOR</h1>
        <Link href="#">
          <b id="header_guide">Developer's Guide</b>
        </Link>
      </div>
    </>
  );
};
export default Header;
