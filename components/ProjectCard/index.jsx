import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import Box from "../Box";
import styles from "./ProjectCard.module.css";

const ProjectCard = async ({ data }) => {
  const languages = await fetch(
    `https://api.github.com/repos/joao-mororo/${data.name}/languages`
  ).then((res) => res.json());

  return (
    <Box className={styles.main}>
      <h1>{data.name}</h1>
      <p>
        •{" "}
        {Object.keys(languages).map((lan) => (
          <span key={lan}>{lan} • </span>
        ))}
      </p>
      <p className={styles.description}>{data.description}</p>
      <div className={styles.links}>
        <a href={data.html_url} target="_blank">
          Repositório <BiLinkExternal />
        </a>
        {data.homepage && (
          <a href={data.homepage} target="_blank">
            Site <BiLinkExternal />
          </a>
        )}
      </div>
    </Box>
  );
};

export default ProjectCard;
