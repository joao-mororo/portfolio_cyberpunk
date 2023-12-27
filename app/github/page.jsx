import Image from "next/image";
import ProjectCard from "./ProjectCard";
import Typewriter from "@/components/ArwesComponents/Typewriter";
import BlinkingText from "@/components/BlinkingText";
import moment from "moment/moment";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

const Github = async () => {
  const user = await fetch("https://api.github.com/users/joao-mororo", {
    next: { revalidate: 3600 },
  }).then((data) => data.json());

  const repos = await fetch("https://api.github.com/users/joao-mororo/repos", {
    next: { revalidate: 3600 },
  }).then((data) => data.json());

  return (
    <main className="container">
      <section className="grid grid-cols-1 py-16 sm:grid-cols-2">
        <div className="flex items-center justify-center">
          <Image
            src={user.avatar_url}
            alt="avatar"
            width={300}
            height={300}
            className="w-2/3 rounded-full sm:w-1/2"
          />
        </div>
        <div className="mt-4 flex flex-col justify-center">
          <Typewriter
            as="h1"
            manager="decipher"
            className="mb-1 text-2xl font-bold"
          >
            {user.name}
          </Typewriter>
          <Typewriter as="h3" manager="decipher" className="mb-5">
            <a href="https://github.com/joao-mororo" target="_blank">
              <BsGithub /> {user.login}
            </a>
          </Typewriter>
          <Typewriter as="p" manager="decipher">
            {user.bio}
          </Typewriter>
          <ul>
            <Typewriter as="li" manager="decipher">
              {user.followers} seguidores | {user.following} seguindo
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
                <a href={user.blog}>
                  {user.blog} <BiLinkExternal />
                </a>
              </Typewriter>
            )}
            <Typewriter as="li" manager="decipher">
              Desde {moment(user.created_at).format("DD/MM/YYYY")}
            </Typewriter>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section className="flex flex-col items-center pb-16">
        <span className="flex">
          <h1 className="text-3xl font-bold">Projetos</h1>
          {user.public_repos}
        </span>
        <BlinkingText>• プロジェクト •</BlinkingText>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {repos
            ? repos.map((project) => (
                <ProjectCard key={project.id} data={project} />
              ))
            : "Repositórios não encontrados"}
        </div>
      </section>
    </main>
  );
};

export default Github;
