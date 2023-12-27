import Box from "@/components/Box";
import { BsGithub } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";

const ProjectCard = async ({ data }) => {
  const languages = await fetch(
    `https://api.github.com/repos/joao-mororo/${data.name}/languages`,
  ).then((res) => res.json());

  return (
    <Box className="flex min-h-[10rem] flex-col items-center justify-between gap-2 p-2">
      <h1>{data.name}</h1>
      <p>
        •{" "}
        {Object.keys(languages).map((lan) => (
          <span key={lan}>{lan} • </span>
        ))}
      </p>
      <p className="text-center">{data.description}</p>
      <div className="flex gap-2">
        <a href={data.html_url} target="_blank">
          <BsGithub /> Repositório
        </a>
        {data.homepage && (
          <a href={data.homepage} target="_blank">
            <TbWorld /> Site
          </a>
        )}
      </div>
    </Box>
  );
};

export default ProjectCard;
