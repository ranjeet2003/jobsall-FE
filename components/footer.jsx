import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="footer-container pa">
      <ul>
        <li>
          <b>
            <Link href="">Quick Job Links </Link>
          </b>
          <Link href="">All Government Jobs</Link>
          <Link href="">All Private Jobs</Link>
          <Link href="">All Internship Jobs</Link>
          <Link href="">Today's Top Clicked</Link>
          <Link href="">All Govt Exam calendar</Link>
        </li>
        <li>
          <b>
            <Link href="">Quick Links </Link>
          </b>
          <Link href="">Jobs</Link>
          <Link href="">Results</Link>
          <Link href="">Admit Cards</Link>
          <Link href="">Answer Keys</Link>
          <Link href="">Syllabus</Link>
        </li>
        <li>
          <b>
            <Link href="">Follow Us</Link>
          </b>
          <span className="df">
            <Image src="/images/Facebook.png" alt="me" width="20" height="20" />
            <Link href="">Facebook</Link>
          </span>
          <span className="df">
            <Image
              src="/images/Telegram App.png"
              alt="me"
              width="20"
              height="20"
            />
            <Link href="">Telegram</Link>
          </span>
          <span className="df">
            <Image src="/images/LinkedIn.png" alt="me" width="20" height="20" />
            <Link href="">LinkedIn</Link>
          </span>
          <span className="df">
            <Image src="/images/Twitter.png" alt="me" width="20" height="20" />
            <Link href="">Twitter</Link>
          </span>
          <span className="df">
            <Image src="/images/Youtube.png" alt="me" width="20" height="20" />
            <Link href="">Youtube</Link>
          </span>
        </li>
        <li>
          <b>
            <Link href="">More</Link>
          </b>
          <Link href="">Admissions</Link>
          <Link href="">Importants</Link>
          <Link href="">important Links</Link>
          <Link href="">Certificate Downloads</Link>
          <Link href="">Scholarships</Link>
        </li>
        <li>
          <b>
            <Link href="">Today's Top Clicked</Link>
          </b>
          <Link href="">UPSE CSE</Link>
          <Link href="">UPPCS</Link>
          <Link href="">ISRO</Link>
          <Link href="">GATE-2023</Link>
          <Link href="">IBPS</Link>
        </li>
      </ul>
    </div>
  );
}
