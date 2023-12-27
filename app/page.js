import Image from "next/image";
import BlinkingText from "@/components/BlinkingText";
import Form from "@/components/Form";
import { FaFileDownload } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import Typewriter from "@/components/ArwesComponents/Typewriter";
import Sequence from "@/components/ArwesComponents/Sequence";
import Button from "@/components/Button";
import Box from "@/components/Box";
import projects from "@/data/projects";
import experience from "@/data/experience";
import skills from "@/data/skills";
import AutoPlay from "@/components/SlickComponents/AutoPlay";

export default function Home() {
  return (
    <main className="container">
      {/* Home */}
      <section className="flex h-[90vh] text-2xl">
        <div className="flex w-full flex-col items-start justify-center gap-4 sm:w-1/2">
          <Typewriter as="h1" className="text-5xl font-bold text-primary">
            Olá, mundo!
          </Typewriter>
          <BlinkingText className="text-base sm:hidden">
            • こんにちは •
          </BlinkingText>
          <Typewriter>
            Meu nome é <span>João Vitor</span>, sou um{" "}
            <span>Desenvolvedor Web</span>, e aqui está um pouco do meu
            trabalho, espero que goste {":)"}
          </Typewriter>
          <a href="#contact" className="hover:opacity-100">
            <Button>Entre em contato</Button>
          </a>
        </div>
        <div className="hidden w-1/2 items-center justify-center sm:flex">
          <BlinkingText className="text-[5rem] font-bold">
            • こんにちは •
          </BlinkingText>
        </div>
      </section>

      {/* About */}
      <section className="mb-12 grid grid-cols-1 text-2xl sm:grid-cols-2 sm:px-12">
        <div className="flex items-center justify-center">
          <Image
            className="w-full border-2 border-solid border-primary shadow-[5px_5px_0_0_rgba(225,225,0)] sm:w-2/3"
            src="/images/guerreiro-cyberpunk.jpg"
            alt="guerreiro-cyberpunk"
            width={500}
            height={500}
          />
        </div>
        <div className="mt-6 flex flex-col items-start justify-center">
          <Typewriter as="h1" className="text-4xl font-bold text-primary">
            Sobre mim
          </Typewriter>
          <BlinkingText className="pb-4 text-lg">• 私について •</BlinkingText>
          <Sequence>
            <Typewriter className="pb-2 text-xl">
              Sou um Desenvolvedor Web altamente qualificado e experiente em
              projetos de desenvolvimento de sites. Tenho um interesse
              particular em sites responsivos e na criação de experiências de
              usuário intuitivas e dinâmicas.
            </Typewriter>
            <Typewriter className="text-xl">
              Pessoa bem organizada, solucionadora de problemas e com atenção
              aos detalhes. Sempre focado em me desenvolver cada vez mais,
              aprendendo novas tecnologias e melhorando minhas habilidades.
            </Typewriter>
          </Sequence>
          <br />
          <a
            className="hover:opacity-100"
            href="/docs/João Vitor Pereira Mororó - CV.pdf"
            download={true}
          >
            <Button>
              Baixar CV <FaFileDownload />
            </Button>
          </a>
        </div>
      </section>

      {/* Experience */}
      <section className="grid grid-cols-1 gap-8 py-12 sm:grid-cols-2">
        <div className="flex flex-col items-center justify-start">
          <h1 className="text-center text-3xl font-bold">Formação acadêmica</h1>
          {experience.academic_formations.map((formation) => (
            <Box key={formation.summary} className="my-2 w-full">
              <details className="w-full items-center p-2 text-center">
                <summary className="cursor-pointer text-primary">
                  {formation.summary}
                </summary>
                <p className="mt-4">{formation.content}</p>
              </details>
            </Box>
          ))}
        </div>
        <div className="flex flex-col items-center justify-start">
          <h1 className="text-center text-3xl font-bold">
            Experiência profissional
          </h1>
          {experience.professional_experiences.map((formation) => (
            <Box key={formation.summary} className="my-2 w-full">
              <details className="w-full items-center p-2 text-center">
                <summary className="cursor-pointer text-primary">
                  {formation.summary}
                </summary>
                <p className="mt-4">{formation.content}</p>
              </details>
            </Box>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="py-12">
        <h1 className="text-center text-4xl">Habilidades</h1>
        <BlinkingText className="text-center">• スキル •</BlinkingText>
        <AutoPlay className="my-8 flex">
          {skills.frontend.map((skill, i) => (
            <div key={i}>
              <a
                className="flex items-center justify-center text-7xl"
                href={skill.link}
                target="_blank"
              >
                {skill.icon}
              </a>
            </div>
          ))}
        </AutoPlay>
        <AutoPlay className="my-8 flex" rtl>
          {skills.backend.map((skill, i) => (
            <div key={i}>
              <a
                className="flex items-center justify-center text-7xl"
                href={skill.link}
                target="_blank"
              >
                {skill.icon}
              </a>
            </div>
          ))}
        </AutoPlay>
      </section>

      {/* Projects */}
      <section className="py-12 text-center">
        <h1 className="text-4xl font-bold">
          Estes são alguns dos meus projetos
        </h1>
        <BlinkingText>• プロジェクト •</BlinkingText>
        <div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {projects.map((project) => (
            <Box
              key={project.name}
              className="flex min-h-[20rem] flex-col justify-between p-2"
            >
              <Image
                alt="project-image"
                src={project.image}
                width={300}
                height={200}
                className="h-40 w-full sm:h-52"
              />
              <h3 className="text-lg">{project.name}</h3>
              <a className="justify-center" href={project.link} target="_blank">
                Ver mais <BiLinkExternal />
              </a>
            </Box>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="flex flex-col items-center py-12">
        <h1 className="text-3xl font-bold">Entre em contato</h1>
        <BlinkingText>• 私に連絡して •</BlinkingText>
        <Form />
      </section>
    </main>
  );
}
