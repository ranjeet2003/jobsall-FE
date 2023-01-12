import { Container, Grid, Paper } from "@mui/material";
import Head from "next/head";
import { useState, useContext } from "react";
import JobCards from "../components/JobCards";
import { useRouter } from "next/router";
import { PostContext } from "../context/PostContext";
import Loading from "../components/Loading";

export default function Home() {
  const { governmentData, loading, privateData, internData, resultData } = useContext(PostContext);
  const router = useRouter();

  const firstFiveGovPosts = governmentData.slice(0, 5);
  const firstFivePvtPosts = privateData.slice(0, 5);
  const firstFiveInternPosts = internData.slice(0, 5);
  const firstFiveResultPosts = resultData.slice(0,5);

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
    { id: 1, postName: "Allahabad University PG, LLB, Other Course Online Counseling 2022" },
  ];
  // const resultData = [
  //   { id: 1, postName: "UP IAS / PCS Free Coaching Result 2023" },
  //   { id: 2, postName: "SBI Clerk 2022 Pre Exam Result" },
  //   { id: 3, postName: "NMP ESB Group 5 Paramedical and Nursing Post Result 2023" },
  //   { id: 4, postName: "UPSSSC Junior Assistant 2016 Final Result with Department Name" },
  //   { id: 1, postName: "UPPSC 2023 Exam Calendar" },
  // ];
  const answerKeys = [
    { id: 1, postName: "UPNHM Various 17000+ Post Answer Key" },
    { id: 2, postName: "UPRVUNL TG II Answer Key 2022" },
    { id: 3, postName: "UPRVUNL JE Civil, Pharmacist Answer Key 2022" },
    { id: 4, postName: "UPPCL Computer Assistant Answer Key 2022" },
    { id: 1, postName: "NVS PGT Answer Key 2022" },
  ];

  return (
    <Container className="homeContainer">
      <Head>
        <title>InfoMotive | HomePage</title>
        <meta
          name="description"
          content="One stop solution for all jobs and results notification"
        />
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
            <Grid container className="boxesWrapper">
              <Grid item xs={12} sm={6} lg={3}>
                <span onClick={() => router.push("/post/government/")}>
                  <Paper elevation={3} className="homeCategoryBox">
                      All Government Jobs
                  </Paper>
                </span>
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <span onClick={() => router.push("/post/private/")}>
                  <Paper elevation={3} className="homeCategoryBox">
                      All Private Jobs
                  </Paper>
                </span>
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <span onClick={() => router.push("/post/internship/")}>
                  <Paper elevation={3} className="homeCategoryBox">
                    <span>All internships Jobs</span>
                  </Paper>
                </span>
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <Paper elevation={3} className="homeCategoryBox">
                  <span>All Freelancing Jobs</span>
                </Paper>
              </Grid>
            </Grid>
          </div>
          <div className="jobCardContainer">
            <Grid container className="boxesWrapper">
              <Grid item xs={12} sm={6} lg={3}>
                <JobCards
                  title="Government Jobs"
                  allPosts={firstFiveGovPosts}
                  btnRoute="/post/government"
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <JobCards
                  title="Private Jobs"
                  allPosts={firstFivePvtPosts}
                  btnRoute="/post/private"
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <JobCards
                  title="Internship Jobs"
                  allPosts={firstFiveInternPosts}
                  btnRoute="/post/internship"
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <JobCards
                  title="Freelancing Jobs"
                  allPosts={dummyData}
                  btnRoute="/post/freelancing"
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <JobCards
                  title="Important Links"
                  allPosts={importantLinks}
                  btnRoute="/"
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <JobCards
                  title="Scholarships"
                  allPosts={scholarships}
                  btnRoute="/"
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <JobCards
                  title="Results"
                  allPosts={firstFiveResultPosts}
                  btnRoute="/post/results"
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <JobCards
                  title="Answer Keys"
                  allPosts={answerKeys}
                  btnRoute="/"
                />
              </Grid>
            </Grid>
          </div>
        </main>
      )}
    </Container>
  );
}
