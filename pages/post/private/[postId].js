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
        <meta name="description" content="Private Posts listing" />
        <meta name="keywords" content={`${post?.postName} Recruitment, ${post?.postName} Application, ${post?.postName} Online Apply form, ${post?.postName} Apply now, naukarikosh.com, ${post?.postName} Recruitment`} />
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
            <td>{post?.batch}</td>
          </tr>

          <tr>
            <td>
              <strong>Location</strong>
            </td>
            <td>{post?.location}</td>
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
            <td>{post?.ctc}</td>
          </tr>
        </tbody>
      </table>
      <FUT />
      <div>
      {/* <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FKolkata&showTitle=0&showPrint=0&src=am9iLmRla2hvM0BnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%230B8043" style={{border: "solid 1px #777", width:"800", height:"600"}} frameborder="0" scrolling="no"></iframe> */}
      </div>
    </Container>
  );
};

export default PostsPage;
