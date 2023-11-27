import ProjectCard from '@/components/ProjectCard'
import BlinkingText from '@/components/BlinkingText';
import Form from '@/components/Form';
import { FaFileDownload } from 'react-icons/fa'
import { BiLinkExternal } from "react-icons/bi";
import Typewriter from '@/components/ArwesComponents/Typewriter';
import Sequence from '@/components/ArwesComponents/Sequence';
import Button from '@/components/Button';
import Box from '@/components/Box';
import styles from './page.module.css'

export default async function Home() {
  const projects = await fetch('https://api.github.com/users/joao-mororo/repos').then((data) => data.json())

  return (
    <main className={styles.main}>
      <section className={styles.home}>
        <div className={styles.home_wrapper}>
          <Typewriter as='h1'>Olá, mundo!</Typewriter>
          <Typewriter>Meu nome é <span>João Vitor</span>, sou um <span>Desenvolvedor Web</span>, e aqui está um pouco do meu trabalho, espero que goste :)</Typewriter>
          <Button>Entre em contato</Button>
        </div>
        <div className={styles.home_wrapper}>
          <BlinkingText className={styles.home_blinking_text}>• こんにちは •</BlinkingText>
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.about_wrapper}>
          <img src="/images/guerreiro-cyberpunk.jpg" />
        </div>
        <div className={styles.about_wrapper}>
          <Typewriter as='h1'>Sobre mim</Typewriter>
          <BlinkingText>• 私について •</BlinkingText>
          <br />
          <Sequence>
            <Typewriter>Sou um Desenvolvedor Web altamente qualificado e experiente em projetos de desenvolvimento de sites. Tenho um interesse particular em sites responsivos e na criação de experiências de usuário intuitivas e dinâmicas.</Typewriter>
            <Typewriter>Pessoa bem organizada, solucionadora de problemas e com atenção aos detalhes. Sempre focado em me desenvolver cada vez mais, aprendendo novas tecnologias e melhorando minhas habilidades.</Typewriter>
          </Sequence>
          <br />
          <Button>Baixar CV <FaFileDownload /></Button>
        </div>
      </section>

      <section className={styles.experience}>
        <div>
          <h1>Formação acadêmica</h1>
          <Box as='details'>
            <summary>Técnico em Desenvolvimento de Sistemas | 2018 - 2020</summary>
            <p>Curso técnico realizado na ETE Edson Mororó Moura de Belo Jardim, em paralelo ao ensino médio.</p>
          </Box>
          <Box as='details'>
            <summary>Superior em Análise e Desenvolvimento de Sistemas | 2021 - 2022</summary>
            <p>Curso superior em Análise e Desenvolvimento de Sistemas realizado na Faculdade Pitágoras de Belo Jardim, Brasil.</p>
          </Box>
          <Box as='details'>
            <summary>Curso Web Moderno | 2021 - 2022</summary>
            <p>Curso online de Web Moderno com JavaScript realizado na Udemy.</p>
          </Box>
        </div>
        <div>
          <h1>Experiência profissional</h1>
          <Box as='details'>
            <summary>Baterias Moura | 2021 - 2022</summary>
            <p>Responsável pelo desenvolvimento de projetos de automação, com foco no desenvolvimento de softwares, além de auxiliar a equipe no desenvolvimento de hardwares.</p>
          </Box>
          <Box as='details' open>
            <summary>AEG Media | Desde 2023</summary>
            <p>Como Desenvolvedor Web, responsável pela criação de landing pages e siste para as empresas associadas à AEG Media.  </p>
          </Box>
        </div>
      </section>

      <section className={styles.projects}>
        <h1>Esses são meus projetos no <a href='https://github.com/joao-mororo' target='_blank'>Github <BiLinkExternal /></a></h1>
        <div className={styles.projects_grid}>
          {projects ? projects.map((project) => (
            <div key={project.id} style={{ width: '33.333%', padding: '.5rem' }}><ProjectCard data={project} /></div>
          )) : 'Projetos não encontrados'}
        </div>
      </section>

      <section className={styles.contact}>
        <h1>Entre em contato</h1>
        <BlinkingText>• 私に連絡して •</BlinkingText>
        <Form />
      </section>
    </main>
  )
}
