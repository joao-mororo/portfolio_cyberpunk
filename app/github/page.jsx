import React from "react";
import styles from "./GitHub.module.css";
import { BiLinkExternal } from "react-icons/bi";
import ProjectCard from "@/components/ProjectCard";
import moment from "moment/moment";

const Github = async () => {
  const user = await fetch("https://api.github.com/users/joao-mororo").then(
    (data) => data.json()
  );

  const projects = await fetch(
    "https://api.github.com/users/joao-mororo/repos"
  ).then((data) => data.json());

  return (
    <main className={styles.main}>
      <section className={styles.profile}>
        <div className={styles.wrapper}>
          <img src={user.avatar_url} alt="avatar" />
        </div>
        <div className={styles.wrapper}>
          <h1>{user.name}</h1>
          <a href="https://github.com/joao-mororo" target="_blank">
            {user.login} <BiLinkExternal />
          </a>
          <br />
          <p>{user.bio}</p>
          <br />
          <ul>
            <li>
              {user.followers} followers | {user.following} following
            </li>
            {user.location && <li>{user.location}</li>}
            {user.email && <li>{user.email}</li>}
            {user.twitter_username && <li>{user.twitter_username}</li>}
            {user.blog && (
              <li>
                <a href={user.blog}>{user.blog}</a>
              </li>
            )}
            <li>Desde {moment(user.created_at).format("DD/MM/YYYY")}</li>
          </ul>
        </div>
      </section>
      <section className={styles.projects}>
        <span style={{ display: "flex", gap: ".5rem" }}>
          <h1>Projetos</h1> ({user.public_repos})
        </span>
        <div className={styles.projects_grid}>
          {projects.map((project) => (
            <div
              key={project.id}
              style={{ width: "33.333%", padding: ".5rem" }}
            >
              <ProjectCard data={project} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Github;
