import ProjectCard from '@/components/ProjectCard'
import Image from 'next/image'
import { FaFileDownload } from 'react-icons/fa'
import { BiLinkExternal } from "react-icons/bi";
import styles from './page.module.css'

export default async function Home() {
  const projects = await fetch('https://api.github.com/users/joao-mororo/repos').then((data) => data.json())

  return (
    <main className={styles.main}>
      <section className={styles.home}>
        <div className={styles.home_description}>
          <h1>Olá, mundo!</h1>
          <p>Meu nome é <span>João Vitor</span>, sou um <span>Desenvolvedor Web</span>, e aqui está um pouco do meu trabalho, espero que goste :)</p>
          <button className='button'>Entre em contato</button>
        </div>
        <div className={styles.home_image}>
          <img src="/images/Hello.webp" style={{ width: '100%' }} />
        </div>
      </section>

      <section id='#about' className={styles.about}>
        <div style={{ width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="/images/guerreiro-cyberpunk.jpg" style={{ width: '60%' }} />
        </div>
        <div style={{ width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', gap: '1rem' }}>
          <h1>Sobre mim</h1>
          <p>Sou um Desenvolvedor Web altamente qualificado e experiente em projetos de desenvolvimento de sites. Tenho um interesse particular em sites responsivos e na criação de experiências de usuário intuitivas e dinâmicas.</p>
          <p>Pessoa bem organizada, solucionadora de problemas e com atenção aos detalhes. Sempre focado em me desenvolver cada vez mais, aprendendo novas tecnologias e melhorando minhas habilidades.</p>
          <button className='button'>Baixar CV <FaFileDownload /></button>
        </div>
      </section>

      <section className={styles.projects}>
        <h1>Esses são meus projetos no <a href='https://github.com/joao-mororo' target='_blank'>Github <BiLinkExternal /></a></h1>
        <div className={styles.projects_grid}>
          {projects.map((project) => (
            <div key={project.id} style={{ width: '33.333%', padding: '.5rem' }}><ProjectCard data={project} /></div>
          ))}
        </div>
      </section>
    </main>
  )
}
