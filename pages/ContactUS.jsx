import React from "react";
import MailIcon from '@mui/icons-material/Mail';
import SendIcon from '@mui/icons-material/Send';
export default function ContactUS() {
  return (
    <>
    <div className="tac">
    <h3>Welcome to naukarikosh.com</h3>
    <h4>Feel free to reach out us if you have any question</h4>
    </div>
    <div className="container">
    <div className="content">
      <div className="left-side">
        <div className="email details">
          {/* <fa-icon className="fas fa-envelope"></fa-icon> */}
          <MailIcon />
          <div className="topic">Email</div>
          <div className="text-one">job.dekho3@gmail.com</div>
          {/* <div className="text-two">info.codinglab@gmail.com</div> */}
        </div>
      </div>
      <div className="right-side">
        <div className="topic-text">Send us a message</div>
        <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p>
      <form action="#">
        <div className="input-box">
          <input type="text" placeholder="Enter your name" />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Enter your email" />
        </div>
        {/* <div className="input-box message-box">
          
        </div> */}
        <div className="button">
          <input type="button" value="Send Now"  />
        </div>
      </form>
    </div>
    </div>
  </div>
  </>
  );
}
