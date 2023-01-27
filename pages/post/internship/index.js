import React, { useContext, useState } from "react";
import { Container, Grid, Paper } from "@mui/material";
import JobCards from "../../../components/JobCards";
import { PostContext } from "../../../context/PostContext";
import Head from "next/head";
import Loading from "../../../components/Loading";


const index = () => {
  const { internData, loading } = useContext(PostContext);
  return (
    <div className="">
      <Head>
        <title>InfoMotive | All Internship Posts</title>
        <meta name="description" content="All Internship Openings" />
        <meta name="keywords" content="All latest internship openings, all internship jobs, internships, private internships,  internship hirings, internship naukari" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {loading ? (
        <Loading />
      ) : (
        <>
          <h3 className="h3AllPosts">All Open internship Jobs Postings are here</h3>
          <div className="jobCardContainer">
            <div  className="boxesWrapper">
              <div item xs={12} sm={6}>
                <JobCards
                  title="All Internship Jobs"
                  allPosts={internData}
                  btnRoute="/post/internship"
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
