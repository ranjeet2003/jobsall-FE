import React, { useContext, useState } from "react";
import { Container, Grid, Paper } from "@mui/material";
import JobCards from "../../../components/JobCards";
import { PostContext } from "../../../context/PostContext";
import Head from "next/head";
import Loading from "../../../components/Loading";

const index = () => {
  const { governmentData, loading } = useContext(PostContext);

  return (
    <div className="">
      <Head>
        <title>InfoMotive | All Government Posts</title>
        <meta name="description" content="All Government Posts listing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {loading ? (
        <Loading />
      ) : (
        <>
          <h3 className="h3AllPosts">All Government Job Postings are here</h3>
          <div className="jobCardContainer">
            <div  className="boxesWrapper">
              <div >
                <JobCards
                  title="All Government Jobs"
                  allPosts={governmentData}
                  btnRoute="/post/government"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default index;
