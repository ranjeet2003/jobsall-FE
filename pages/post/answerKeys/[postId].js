import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Container } from "@mui/material";
import FUT from '../../../components/follow-telegram'


const PostsPage = () => {
  const [post, setPost] = useState({});
  const router = useRouter();
  const postId = router.query.postId;

  useEffect(() => {
    setPost(JSON.parse(sessionStorage.getItem("currentPost")));
  }, []);

  return (
    <Container className="single-post-wrapper">
      <Head>
        <title>{post?.postName} </title>
        <meta name="description" content="Find government exam answer keys" />
        <meta name="keywords" content={`${post?.postName}, ${post?.postName} Answer key, ${post?.postName} answer keys, ${post?.postName} exam's answer key, ${post?.postName} latest answer key, naukarikosh.com`} />
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
            <td>{post?.postName}</td>
          </tr>
          {post?.batch ? (
            <tr>
              <td>
                <strong>Batch</strong>
              </td>
              <td>{post?.batch}</td>
            </tr>
          ) : (
            ""
          )}

          {post?.location ? (
            <tr>
              <td>
                <strong>Location</strong>
              </td>
              <td>{post?.location}</td>
            </tr>
          ) : (
            ""
          )}

          <tr>
            <td>
              <strong>Download Answer Key</strong>
            </td>
            <td>
              <a href={post?.applyLink}>Click Here</a>
            </td>
          </tr>
          {post?.ctc ? (
            <tr>
              <td>
                <strong>CTC </strong>
              </td>
              <td>{post?.ctc}</td>
            </tr>
          ) : (
            ""
          )}
        </tbody>
      </table>
      <FUT />
    </Container>
  );
};

export default PostsPage;
