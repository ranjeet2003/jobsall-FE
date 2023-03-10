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
        <meta name="description" content={`${post?.postName} Posts listing`} />
        <meta name="keywords" content={`${post?.postName} Recruitment, ${post?.postName} Application, ${post?.postName} hiring, ${post?.postName} Online Apply form, ${post?.postName} Apply now, naukarikosh.com, ${post?.postName} Recruitment, internship application`} />
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
              <strong>Batch</strong>
            </td>
            <td>{(post?.batch) ? post?.batch: 'NA'}</td>
          </tr>

          <tr>
            <td>
              <strong>Location</strong>
            </td>
            <td>{(post?.location) ? post?.location : 'NA'}</td>
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
              <strong>CTC </strong>
            </td>
            <td>{(post?.ctc) ? post?.ctc : 'NA'}</td>
          </tr>
        </tbody>
      </table>
      <FUT />
    </Container>
  );
};

export default PostsPage;
