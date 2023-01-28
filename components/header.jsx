import React from "react";
import Image from "next/image";
import { Container } from "@mui/material";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <div className="HeaderContainer">
      <Container className="headerFlexBox">
        <div className="title" onClick={() => router.push("/")}>
          {/* Job<span className="titleSpan">Dekho</span> */}
          <Image src="/images/logo.svg" width="190" height="40"/>
        </div>
        <ul className="navItems">
          <li className="item">
            Jobs
            {/* <span>
              <svg width="9" height="15" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="-2" x2="14.0539" y2="-2" transform="matrix(0.707985 -0.706228 0.707985 0.706228 3.05005 19.9998)" stroke="black" strokeWidth="4"/>
              <line y1="-2" x2="14.0539" y2="-2" transform="matrix(-0.707985 -0.706228 0.707985 -0.706228 12.9497 9.92505)" stroke="black" strokeWidth="4"/>
              </svg>
            </span> */}
          </li>
          <li className="item">Results</li>
          <li className="item">Admit Cards</li>
          <li className="item">Answer Keys</li>
          <li className="item">About</li>
          <li className="item">Contact Us</li>
        </ul>
      </Container>
    </div>
  );
};

export default Header;
