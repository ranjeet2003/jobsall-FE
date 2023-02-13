import React from "react";
export default function AboutUS() {
  return (
    <>
    <div className="about-section">
  <h1>About Us</h1>
  <p>We provide you list of best job openings in your choosen category</p>
  <p>We are a team of hardworing persons whom continuous effort make this website update.</p>
</div>

<h2 className="tac">Our Team</h2>
<div className="row">
  <div className="column-abt">
    <div className="card">
      <img src="/images/team1.jpg" alt="Jane" width="100%" height="100%" />
      <div className="container-abt">
        <h2>Jane Doe</h2>
        <p className="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <p><button className="button-abt">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column-abt">
    <div className="card">
      <img src="/images/team2.jpg" alt="Mike" width="100%" height="100%" />
      <div className="container-abt">
        <h2>Mike Ross</h2>
        <p className="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button className="button-abt">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column-abt">
    <div className="card">
      <img src="/images/team3.jpg" alt="John" width="100%" height="100%" />
      <div className="container-abt">
        <h2>John Doe</h2>
        <p className="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button className="button-abt">Contact</button></p>
      </div>
    </div>
  </div>
</div>
  </>
  );
}
