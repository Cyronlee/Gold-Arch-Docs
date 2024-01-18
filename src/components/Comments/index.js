import React from "react";
import Giscus from "@giscus/react";

export const Comments = (props) => {
  return (
    <Giscus
      repo="Cyronlee/Gold-Arch-Docs"
      repoId="R_kgDOLC6SWQ"
      category="General"
      categoryId="DIC_kwDOLC6SWc4Ccf8_"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="light_tritanopia"
      lang="zh-CN"
      loading="lazy"
      crossorigin="anonymous"
      async
    />
  );
};

export default Comments;
