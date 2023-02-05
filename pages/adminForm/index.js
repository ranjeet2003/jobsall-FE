import { Container, Grid, Paper } from "@mui/material";
import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import { callPostAPIs } from "../../helper/helper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Home() {
  const [input, setInput] = useState({});
  const [formState, setFormState] = useState("government");

  const handleChange = (event) => {
    const objKey = event.target.name;
    const objValue = event.target.value;

    setInput({ ...input, [objKey]: objValue });
  };

  const handleSubmit = async (e) => {
    console.log("input values console-->", input);
    e.preventDefault();

    const data = callPostAPIs(input, formState);

    const callApiFor = {
      government: "govt",
      private: "pvt",
      internship: "intern",
      result: "result",
      answerkey: "answerkey",
    };

    const response = await fetch(
      `https://jobsall.onrender.com/api/${callApiFor[formState]}/postjob`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Cache: "no-cache",
        },
      }
    );
    console.log("response", response);
    if (response.ok) {
      alert("Data Posted Successfully");
    } else if (!response.ok) {
      alert("Error occured status :" + response.status);
    }
  };

  const handleFormToShow = (e) => {
    setFormState(e.target.value);
  };
  console.log("first", formState);
  return (
    <Container className="AdminFormContainer">
      <Head>
        <title>InfoMotive | Post data Form</title>
        <meta
          name="post data"
          content="One stop solution for all jobs and results notification"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mainWrapper">
        <div className="flexSpaceBtw">
          <p>
            Welcome! Get updates to all the jobs and result notification here
          </p>
          <select
            id="jobType"
            className="selectJobType"
            onChange={handleFormToShow}
          >
            <option value="government">Government</option>
            <option value="private">Private</option>
            <option value="internship">internship</option>
            <option value="freelancing">Freelancing</option>
            <option value="result">Result</option>
            <option value="answerkey">Answer Key</option>
          </select>
        </div>
        <Paper className="form" elevation={8}>
          <form className="postForm" onSubmit={handleSubmit}>
            <div className="flexRow jcsb">
              <div className="df aic">
              <label>
                <b>
                  <b>Post name: </b>
                </b>
              </label>
              <TextField
                label="Post Name"
                size="small"
                onChange={handleChange}
                placeholder="Enter Post name"
                name="postName"
              />
              </div>
              <div className="df aic">
              <label>
                <b>Post Date: </b>
              </label>
              <TextField
                label="Post Date"
                size="small"
                onChange={handleChange}
                name="postDate"
              />
              </div>
              </div>
              <div className="flexRow">
              <label>
                <b>Exam date: </b>
              </label>
              <TextField
                TextField
                label="Exam date"
                size="small"
                onChange={handleChange}
                name="examDate"
              />

              <label>
                <b>Last Date: </b>
              </label>
              <TextField
                label="Last Date"
                size="small"
                onChange={handleChange}
                name="lastDate"
              />
            </div>
            <div className="flexRow">
              <label>
                <b>Total Post: </b>
              </label>
              <TextField
                label="Total Post"
                size="small"
                onChange={handleChange}
                placeholder="Enter total posts"
                name="totalPost"
              />

              <label>
                <b>Eligibility: </b>
              </label>
              <TextField
                label="Eligibility"
                size="small"
                onChange={handleChange}
                placeholder="Enter Eligibility"
                name="eligibility"
              />
              </div>
              <div className="flexRow">
              <label>
                <b>Apply Link: </b>
              </label>
              <TextField
                label="Apply Link"
                size="small"
                onChange={handleChange}
                placeholder="Enter Apply Link"
                name="applyLink"
              />
            </div>
            <div className="flexRow">
              <label>
                <b>Notification Link: </b>
              </label>
              <TextField
                label="Notification Link"
                size="small"
                onChange={handleChange}
                placeholder="Enter Notification Link"
                name="notificationLink"
              />
              <label>
                <b>Official Website Link: </b>
              </label>
              <TextField
                label="Official Website Link"
                size="small"
                onChange={handleChange}
                placeholder="Enter Official Website Link"
                name="officialWebsiteLink"
              />
              </div>
              <div className="flexRow">
              <label>
                <b>Description URL:</b>
              </label>
              <TextField
                label="Description URL"
                size="small"
                onChange={handleChange}
                placeholder="Enter Description URL"
                name="descriptionURL"
              />
            <div className="flexRow">
              <label>
                <b>Display Heading: </b>
              </label>
              <TextField
                label="Display Heading"
                size="small"
                onChange={handleChange}
                placeholder="Enter Display Heading"
                name="dispHeading"
              />
              </div>
              <label>
                <b>PostName Short Detail: </b>
              </label>
              <TextField
                label="PostName Short Detail:"
                size="small"
                onChange={handleChange}
                placeholder="PostName Short Detail"
                name="postNameShortDtl"
              />
              <label>
                <b>Admit card available date: </b>
              </label>
              <TextField
                label="Admit card available date"
                size="small"
                onChange={handleChange}
                placeholder="Admit card available date"
                name="admitCardAvlbl"
              />
            </div>
            <div className="flexRow">
              <label>
                <b>Short Infomation:</b>
              </label>

              <textarea
                placeholder="Enter Job Info"
                rows="4"
                cols="50"
                name="shortInfo"
                onChange={handleChange}
              />
              <label>
                <b>Position Description: </b>
              </label>

              <textarea
                placeholder="Enter Position Description"
                rows="4"
                cols="50"
                name="postDescription"
                onChange={handleChange}
              />
            </div>
            <div className="flexRow">
              <label>
                <b>Key Skills:</b>
              </label>

              <textarea
                placeholder="Enter Key Skills"
                rows="4"
                cols="50"
                name="skills"
                onChange={handleChange}
              />
              <label>
                <b>Eligibility Criteria:</b>
              </label>

              <textarea
                placeholder="Enter Eligibility/Apply Criteria"
                rows="4"
                cols="50"
                name="applyCriteria"
                onChange={handleChange}
              />
            </div>
            {formState === "government" && (
              <>
                <div className="">
                  <label>
                    <b>Enter Fee for all categories:</b>
                  </label>
                  <TextField
                    label="General Fee"
                    size="small"
                    onChange={handleChange}
                    placeholder="General Fees"
                    name="generalFee"
                  />
                  <TextField
                    label="OBC Fees"
                    size="small"
                    onChange={handleChange}
                    placeholder="OBC Fees"
                    name="obcFee"
                  />
                  <TextField
                    label="SC Fee"
                    size="small"
                    onChange={handleChange}
                    placeholder="SC Fees"
                    name="scFee"
                  />
                  <TextField
                    label="ST Fee"
                    size="small"
                    onChange={handleChange}
                    placeholder="ST Fees"
                    name="stFee"
                  />
                  <TextField
                    label="Female Fee"
                    size="small"
                    onChange={handleChange}
                    placeholder="Female Fees"
                    name="femaleFee"
                  />
                </div>
                <div className="flexRow">
                  <label>
                    <b>Age Details: </b>
                  </label>
                  <TextField
                    label="Min Age"
                    size="small"
                    onChange={handleChange}
                    placeholder="Enter min age"
                    name="minAge"
                  />
                  <TextField
                    label="Max Age"
                    size="small"
                    onChange={handleChange}
                    placeholder="Enter max age"
                    name="maxAge"
                  />
                </div>
                <div className="">
                  <label>
                    <b>Categories wise posts: </b>
                  </label>
                  <TextField
                    label="U.R. Posts"
                    size="small"
                    onChange={handleChange}
                    placeholder="UR Posts"
                    name="URPosts"
                  />
                  <TextField
                    label="B.C. Posts"
                    size="small"
                    onChange={handleChange}
                    placeholder="BC Posts"
                    name="BCPosts"
                  />
                  <TextField
                    label="MBC Post"
                    size="small"
                    onChange={handleChange}
                    placeholder="MBC Posts"
                    name="MBCPosts"
                  />
                  <TextField
                    label="EWS Post"
                    size="small"
                    onChange={handleChange}
                    placeholder="EWS Posts"
                    name="EWSPosts"
                  />
                  <TextField
                    label="SC Posts"
                    size="small"
                    onChange={handleChange}
                    placeholder="SC Posts"
                    name="SCPosts"
                  />
                  <TextField
                    label="ST Fee"
                    size="small"
                    onChange={handleChange}
                    placeholder="ST Posts"
                    name="STPosts"
                  />
                  <TextField
                    label="Total Post"
                    size="small"
                    onChange={handleChange}
                    placeholder="Total Posts"
                    name="totalPosts"
                  />
                </div>
              </>
            )}
            {formState !== "government" && formState != "result" && (
              <div className="flexRow">
                <label>
                  <b>CTC: </b>
                </label>
                <TextField
                  label="CTC"
                  size="small"
                  onChange={handleChange}
                  placeholder="Enter CTC"
                  name="ctc"
                />
                <label>
                  <b>Hourly Pay: </b>
                </label>
                <TextField
                  label="Hourly Pay"
                  size="small"
                  onChange={handleChange}
                  placeholder="Enter Hourly Pay"
                  name="hourlyPay"
                />
                <label>
                  <b>Location: </b>
                </label>
                <TextField
                  label="Location"
                  size="small"
                  onChange={handleChange}
                  placeholder="Enter Locations"
                  name="location"
                />
              </div>
            )}
            <br />
            <div className="alignBtnCenter">
              <Button variant="contained" className="btn-submit" type="submit" placeholder="submit">SUBMIT</Button>
            </div>
          </form>
        </Paper>
      </main>
    </Container>
  );
}
