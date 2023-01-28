import React, { useContext, useState } from "react";
import { Container, Grid, Paper } from "@mui/material";
import JobCards from "../../../components/JobCards";
import Head from "next/head";
import { PostContext } from "../../../context/PostContext";
import Loading from "../../../components/Loading";
const index = () => {
  // const { governmentData, loading } = useContext(PostContext);
  const { answerKeyData, loading } = useContext(PostContext);

  return (
    <Container className="">
      <Head>
        <title>InfoMotive | All Answer Keys</title>
        <meta name="description" content="Find All Government Answer Keys" />
        <meta name="keywords" content="All latest government examn answer keys, all answer keys, sarkari exam answer key, 2023 exam answer keys" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <h2>All Government Exam Answer Keys Posted Here</h2>
        <div className="jobCardContainer">
          <Grid container className="boxesWrapper">
            <Grid item xs={12} sm={6}>
              <JobCards
                title="Answer Keys"
                allPosts={answerKeyData}
                btnRoute="/post/answerKeys"
              />
            </Grid>
          </Grid>
        </div>
      </>
    </Container>
  );
};

export default index;
