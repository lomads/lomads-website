import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "../../utils/blog.json";
import { useMemo } from "react";

const BlogPost = () => {
  const { url } = useParams();
  const navigate = useNavigate();

  if (!url) {
    throw new Error("Page not found");
  }

  const post = useMemo(() => data.find((post) => post.url === url), [url]);

  if (!post) {
    navigate("/", {
      replace: true,
    });
  }

  return <></>;
};

export default BlogPost;
