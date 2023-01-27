import React, { useContext, useState } from "react";
// import { Container, } from "@mui/material";
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
    <div className="">
      <Head>
        <title>InfoMotive | All Govt Exam Results</title>
        <meta name="description" content="All Government Posts listing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h2>Get Updated to latest govt exam results</h2>
          <div className="jobCardContainer">
            <div className="boxesWrapper">
              <div>
                <JobCards
                  title="Latest Results"
                  allPosts={resultData}
                  btnRoute="/post/results"
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
