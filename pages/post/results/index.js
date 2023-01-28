import React, { useContext, useState } from "react";
import { Container, Grid, Paper } from "@mui/material";
import JobCards from "../../../components/JobCards";
import Head from "next/head";
import { PostContext } from "../../../context/PostContext";
import Loading from "../../../components/Loading";

const index = () => {
  const { resultData, loading } = useContext(PostContext);
//   const dummyData = [
//     { id: 1, postName: "Amazon" },
//     { id: 2, postName: "Microsoft" },
//     { id: 3, postName: "Walmart" },
//     { id: 4, postName: "Google" },
//     { id: 1, postName: "Apple" },
//   ];

  return (
    <Container className="">
      <Head>
        <title>InfoMotive | All Govt Exam Results</title>
        <meta name="description" content="All Government Exam Result" />
        <meta name="keywords" content="All latest government jobs results, all government jobs result, sarkari naukari results, sarkari naukariya, government naukari, Latest result" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h2>Get Updated to latest govt exam results</h2>
          <div className="jobCardContainer">
            <Grid container className="boxesWrapper">
              <Grid item xs={12} sm={6}>
                <JobCards
                  title="Latest Results"
                  allPosts={resultData}
                  btnRoute="/post/results"
                />
              </Grid>
            </Grid>
          </div>
        </>
      )}
    </Container>
  );
};

export default index;
