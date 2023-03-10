import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Container } from "@mui/material";
import Head from "next/head";
import FUT from '../../../components/follow-telegram'


const PostsPage = () => {
  const [post, setPost] = useState({});
  const router = useRouter();

  useEffect(() => {
    setPost(JSON.parse(sessionStorage.getItem("currentPost")));
  }, []);

  return (
    <Container className="single-post-wrapper">
      <Head>
        <title>{post?.postName} </title>
        <meta name="description" content="Government Post listing" />
        <meta name="keywords" content={`${post?.postName} Recruitment, ${post?.postName} Online Form, ${post?.postName} Notification, naukarikosh.com, ${post?.postName} Recruitment`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="post-heading">{post?.dispHeading}</h1>

      <p className="post-descp">{post?.shortInfo}</p>

      <table className="table">
        <tbody>
          <tr>
            <td>
              <strong>Post Name</strong>
            </td>
            <td>
              
                {post?.postName}
              
            </td>
          </tr>
          <tr>
            <td>
              <strong>Official Website</strong>
            </td>
            <td>
              <a href={post?.officialWebsiteLink}>
                {post?.officialWebsiteLink}
              </a>
            </td>
          </tr>

          <tr>
            <td>
              <strong>Posted Date</strong>
            </td>
            <td>{post?.postDate}</td>
          </tr>

          <tr>
            <td>
              <strong>Total Posts</strong>
            </td>
            <td>{post?.totalPost}</td>
          </tr>
          <tr>
            <td>
              <strong> Apply link</strong>
            </td>
            <td>
              <a href={post?.applyLink}>Click Here To Apply</a>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Eligibility</strong>
            </td>
            <td>{post?.eligibility}</td>
          </tr>
          <tr>
            <td>
              <strong>Age</strong>
            </td>
            <td>{post?.age?.min}</td>
          </tr>
          <tr>
            <td>
              <strong>Fee Details</strong>
            </td>
            <td>
              <p>
                <span>General :</span>
                {post?.Fee?.general} ???
              </p>
              <p>
                <span>OBC :</span>
                {post?.Fee?.OBC} ???
              </p>
              <p>
                <span>SC :</span>
                {post?.Fee?.SC} ???
              </p>
              <p>
                <span>ST :</span>
                {post?.Fee?.ST} ???
              </p>
              {post?.Fee?.female && (
                <p>
                  <span>Female :</span>
                  {post?.Fee?.female} ???
                </p>
              )}
            </td>
          </tr>
        </tbody>
      </table>
      <FUT />
    </Container>
  );
};

export default PostsPage;
