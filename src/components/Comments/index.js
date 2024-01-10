import React, { useEffect, useRef } from "react";
import { init } from "@waline/client";
import "@waline/client/style";
import styles from "./styles.module.css";

export const Comments = (props) => {
  const walineInstanceRef = useRef();
  const containerRef = React.createRef();

  useEffect(() => {
    walineInstanceRef.current = init({
      ...props,
      el: containerRef.current,
      serverURL: "https://gold-arch-docs-comments.vercel.app",
    });

    return () => walineInstanceRef.current?.destroy();
  }, []);

  useEffect(() => {
    walineInstanceRef.current?.update(props);
  }, props);

  return <div className={styles.commentsContainer} ref={containerRef} />;
};

export default Comments;
