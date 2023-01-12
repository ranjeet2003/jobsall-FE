import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  API_GET_GOVERNMENT_POSTS,
  API_GET_PRIVATE_POSTS,
  API_GET_INTERNSHIP_POSTS,
  API_GET_RESULT_POSTS
} from "../service/api";

export const PostContext = React.createContext();

const Context = ({ children }) => {
  const [governmentData, setGovernmentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [privateData, setPrivateData] = useState([]);
  const [internData, setinternData] = useState([]);
  const [resultData, setResultData] = useState([]);

  const fetchGovernanceData = async () => {
    try {
      const response = await axios.get(API_GET_GOVERNMENT_POSTS);
      const allGovPosts = response.data.data;
      setGovernmentData(allGovPosts);
      setLoading(false);
    } catch (err) {
      alert(err);
    }
  };
  const fetchPrivateData = async () => {
    try {
      const response = await axios.get(API_GET_PRIVATE_POSTS);
      const allPvtPosts = response.data.data;
      setPrivateData(allPvtPosts);
      setLoading(false);
    } catch (err) {
      alert(err);
    }
  };
  const fetchInternData = async () => {
    try {
      const response = await axios.get(API_GET_INTERNSHIP_POSTS);
      const allInternPosts = response.data.data;
      setinternData(allInternPosts);
      setLoading(false);
    } catch (err) {
      alert(err);
    }
  };
  const fetchResultData = async () => {
    try {
      const response = await axios.get(API_GET_RESULT_POSTS);
      const allResultPosts = response.data.data;
      setResultData(allResultPosts);
      setLoading(false);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    fetchGovernanceData();
    fetchPrivateData();
    fetchInternData();
    fetchResultData();
  }, []);

  return (
    <PostContext.Provider
      value={{
        loading,
        governmentData,
        privateData,
        internData,
        resultData
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default Context;
