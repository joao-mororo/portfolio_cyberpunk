import React from "react";
import styles from "./GitHub.module.css";
import { BiLinkExternal } from "react-icons/bi";
import ProjectCard from "@/components/ProjectCard";
import moment from "moment/moment";
import Sequence from "@/components/ArwesComponents/Sequence";
import Typewriter from "@/components/ArwesComponents/Typewriter";

const Github = async () => {
  const user = await fetch("https://api.github.com/users/joao-mororo", {
    next: { revalidate: 3600 },
  }).then((data) => data.json());

  const repos = await fetch("https://api.github.com/users/joao-mororo/repos", {
    next: { revalidate: 3600 },
  }).then((data) => data.json());

  return (
    <main className={styles.main}>
      <section className={styles.profile}>
        <div className={styles.wrapper}>
          <img src={user.avatar_url} alt="avatar" />
        </div>
        <div className={styles.wrapper}>
          <Typewriter as="h1" manager="decipher">
            {user.name}
          </Typewriter>
          <Typewriter
            as="a"
            href="https://github.com/joao-mororo"
            target="_blank"
            manager="decipher"
          >
            {user.login} <BiLinkExternal />
          </Typewriter>
          <br />
          <Typewriter as="p" manager="decipher">
            {user.bio}
          </Typewriter>
          <br />
          <ul>
            <Typewriter as="li" manager="decipher">
              {user.followers} followers | {user.following} following
            </Typewriter>
            {user.location && (
              <Typewriter as="li" manager="decipher">
                {user.location}
              </Typewriter>
            )}
            {user.email && (
              <Typewriter as="li" manager="decipher">
                {user.email}
              </Typewriter>
            )}
            {user.twitter_username && (
              <Typewriter as="li" manager="decipher">
                {user.twitter_username}
              </Typewriter>
            )}
            {user.blog && (
              <Typewriter as="li" manager="decipher">
                <a href={user.blog}>{user.blog}</a>
              </Typewriter>
            )}
            <Typewriter as="li" manager="decipher">
              Desde {moment(user.created_at).format("DD/MM/YYYY")}
            </Typewriter>
          </ul>
        </div>
      </section>
      <section className={styles.projects}>
        <span style={{ display: "flex", gap: ".5rem" }}>
          <h1>Projetos</h1> ({user.public_repos})
        </span>
        <div className={styles.projects_grid}>
          {repos
            ? repos.map((project) => (
                <div
                  key={project.id}
                  style={{ width: "33.333%", padding: ".5rem" }}
                >
                  <ProjectCard data={project} />
                </div>
              ))
            : "Repositórios não encontrados"}
        </div>
      </section>
    </main>
  );
};

export default Github;
