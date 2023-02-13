import React, {useState} from "react";
import Image from "next/image";
import { Container } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const [DrpPos, setDrpPos] = useState('');
  const router = useRouter();
  return (
    <div className="HeaderContainer">
      <svg className="dn">
        <symbol
          id="arrSvg"
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.43411 5.47834L9.82036 1.35472C10.0599 1.11468 10.0599 0.747493 9.82036 0.521509C9.58085 0.295565 9.17667 0.295565 8.93711 0.521509L5 4.23558L1.06289 0.521509C0.80843 0.295565 0.41919 0.295565 0.179634 0.521509C-0.0598781 0.747453 -0.0598781 1.11463 0.179634 1.35472L4.55089 5.47834C4.80534 5.70429 5.19458 5.70429 5.43414 5.47834H5.43411Z"
            fill="#252525"
          ></path>
        </symbol>
      </svg>
      <Container className="headerFlexBox">
        <div className="title" onClick={() => router.push("/")}>
          {/* Job<span className="titleSpan">Dekho</span> */}
          <Image src="/images/logo.svg" width="190" height="40" />
        </div>
        <ul className="navItems">
          <div className="dropdown" onMouseOver={()=>{setDrpPos('drp180')}} onMouseLeave={()=>{setDrpPos('')}}>
            <li className="item">
              Jobs
              <svg width="10" height="6" className={`${DrpPos} ml15`}>
                <use href="#arrSvg"></use>
              </svg>
              <div className="dropdown-content">
                <Link href="/post/government">Government Jobs</Link>
                <Link href="/post/private">Private Jobs</Link>
                <Link href="/post/internship">Internships</Link>
              </div>
            </li>
          </div>
          <li className="item"><Link href="/post/results">Results</Link></li>
          <li className="item">Admit Cards</li>
          <li className="item"><Link href="/post/answerKeys">Answer Keys</Link></li>
          <li className="item"><Link href="/AboutUS">About</Link></li>
          <li className="item"><Link href="/ContactUS">Contact Us</Link></li>
        </ul>
      </Container>
    </div>
  );
};

export default Header;
