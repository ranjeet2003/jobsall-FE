import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
// import Image from "next/image";
export default function Footer() {
  return (
    <div className="footer-container pa">
      <ul>
        <li>
          <b>Quick Job Links</b>
          <Link href="/post/government">Government Jobs</Link>
          <Link href="/post/private">Private Jobs</Link>
          <Link href="/post/internship">Internship Jobs</Link>
          <Link href="#">Today's Top Clicked</Link>
          <Link href="https://ssc.nic.in/SSCFileServer/PortalManagement/UploadedFiles/Tentative_Calendar_30122022.pdf">
            SSC Exam calendar
          </Link>
        </li>
        <li>
          <b>Quick Links</b>
          <Link href="#">Jobs</Link>
          <Link href="/post/results">Results</Link>
          <Link href="#">Admit Cards</Link>
          <Link href="/post/answerKeys">Answer Keys</Link>
          <Link href="#">Syllabus</Link>
        </li>
        <li>
          <b>Follow Us</b>
          <span className="df">
            {/* <Image src="/images/Facebook.png" alt="me" width="20" height="20" /> */}
            <FacebookIcon />
            <Link href="">Facebook</Link>
          </span>
          <span className="df">
            <TelegramIcon />
            <Link href="https://t.me/naukarikosh_official">Telegram</Link>
          </span>
          <span className="df">
            <LinkedInIcon />
            <Link href="">LinkedIn</Link>
          </span>
          <span className="df">
            <TwitterIcon />
            <Link href="">Twitter</Link>
          </span>
          <span className="df">
            <YouTubeIcon />
            <Link href="">Youtube</Link>
          </span>
        </li>
        <li>
          <b>More</b>
          <Link href="#">Admissions</Link>
          <Link href="#">Certificate Downloads</Link>
          <Link href="/AboutUS">About Us</Link>
          <Link href="/TermsAndCondition">Terms of Use</Link>
          <Link href="/PrivacyPolicy">Privacy  policy</Link>
        </li>
        <li>
          <b>Today's Top Clicked</b>
          <Link href="#">UPSE CSE</Link>
          <Link href="#">UPPCS</Link>
          <Link href="#">ISRO</Link>
          <Link href="#">GATE-2023</Link>
          <Link href="#">IBPS</Link>
        </li>
      </ul>
      <div>Copyright &copy; 2023 NaukariKosh All rights reserved.</div>
    </div>
  );
}
