// import { Container, Grid, Paper } from "@mui/material";
import Head from "next/head";
import { useState, useContext } from "react";
import JobCards from "../components/JobCards";
import { useRouter } from "next/router";
import { PostContext } from "../context/PostContext";
import Loading from "../components/Loading";

export default function Home() {
  const {
    governmentData,
    loading,
    privateData,
    internData,
    resultData,
    answerKeyData,
  } = useContext(PostContext);
  const router = useRouter();

  const firstFiveGovPosts = governmentData.slice(0, 5);
  const firstFivePvtPosts = privateData.slice(0, 5);
  const firstFiveInternPosts = internData.slice(0, 5);
  const firstFiveResultPosts = resultData.slice(0, 5);
  const firstFiveAnswerKeyPosts = answerKeyData.slice(0, 5);

  const dummyData = [
    { id: 1, postName: "Amazon Hiring for Freelancing Basis" },
    { id: 2, postName: "Microsoft Hiring for Freelancing Basis" },
    { id: 3, postName: "Walmart Hiring for Freelancing Basis" },
    { id: 4, postName: "Google Hiring for Freelancing Basis" },
    { id: 1, postName: "Apple Hiring for Freelancing Basis" },
  ];
  const importantLinks = [
    { id: 1, postName: "Download Your Adhar Card" },
    { id: 2, postName: "Download Your PAN Card" },
    { id: 3, postName: "Resize Image" },
    { id: 4, postName: "Convert Image to PDF" },
    { id: 1, postName: "Image size reducer/compressor" },
  ];
  const scholarships = [
    { id: 1, postName: "UP Scholarship Online Form 2022" },
    { id: 2, postName: "NVS Class 6th Admission Online Form 2023" },
    { id: 3, postName: "NTA JEE-MAIN Online Form 2023" },
    { id: 4, postName: "SWD UP IAS / PCS Pre 2023 Free Coaching Online Form" },
    {
      id: 1,
      postName:
        "Allahabad University PG, LLB, Other Course Online Counseling 2022",
    },
  ];

  return (
    <div className="homeContainer">
      <Head>
        <title>InfoMotive | HomePage</title>
        <meta
          name="description"
          content="One stop solution for all jobs and results notification"
        />
        <meta name="viewport" content="width=1024"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {loading ? (
        <Loading />
      ) : (
        <main className="main-home">
          <h3 className="heading">
            Welcome! Get updates to all the jobs and result notification here
          </h3>
          <div className="jobCardContainer">
            <div container className="boxesWrapper">
              <div item xs={12} sm={6} lg={3}>
                <span onClick={() => router.push("/post/government/")}>
                  <div className="homeCategoryBox">
                    All Government Jobs
                  </div>
                </span>
              </div>
              <div item xs={12} sm={6} lg={3}>
                <span onClick={() => router.push("/post/private/")}>
                  <div className="homeCategoryBox">
                    All Private Jobs
                  </div>
                </span>
              </div>
              <div item xs={12} sm={6} lg={3}>
                <span onClick={() => router.push("/post/internship/")}>
                  <div className="homeCategoryBox">
                    <span>All internships Jobs</span>
                  </div>
                </span>
              </div>
              <div item xs={12} sm={6} lg={3}>
                <div className="homeCategoryBox">
                  <span>Today's Top Clicked</span>
                </div>
              </div>
            </div>
          </div>
          <div className="jobCardContainer">
            <div container className="boxesWrapper">
              <div item xs={12} sm={6} lg={3}>
                <JobCards
                  title="Government Jobs"
                  allPosts={firstFiveGovPosts}
                  btnRoute="/post/government"
                />
              </div>
              <div item xs={12} sm={6} lg={3}>
                <JobCards
                  title="Private Jobs"
                  allPosts={firstFivePvtPosts}
                  btnRoute="/post/private"
                />
              </div>
              <div item xs={12} sm={6} lg={3}>
                <JobCards
                  title="Internship Jobs"
                  allPosts={firstFiveInternPosts}
                  btnRoute="/post/internship"
                />
              </div>
              <div item xs={12} sm={6} lg={3}>
                <JobCards
                  title="Today's Top Clicked"
                  allPosts={dummyData}
                  btnRoute="/post/freelancing"
                />
              </div>
              <div item xs={12} sm={6} lg={3}>
                <JobCards
                  title="Important Links"
                  allPosts={importantLinks}
                  btnRoute="/"
                />
              </div>
              <div item xs={12} sm={6} lg={3}>
                <JobCards
                  title="Scholarships"
                  allPosts={scholarships}
                  btnRoute="/"
                />
              </div>
              <div item xs={12} sm={6} lg={3}>
                <JobCards
                  title="Results"
                  allPosts={firstFiveResultPosts}
                  btnRoute="/post/results"
                />
              </div>
              <div item xs={12} sm={6} lg={3}>
                <JobCards
                  title="Answer Keys"
                  allPosts={firstFiveAnswerKeyPosts}
                  btnRoute="/post/answerKeys"
                />
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}
