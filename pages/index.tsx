import type { GetStaticProps } from 'next';
import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import WorkExperience from '../components/WorkExperience';
import { Experience, PageInfo, Project, Skill, Social } from '../typings';
import { fetchExperiences } from '../utils/fetchExperiences';
import { fetchPageInfo } from '../utils/fetchPageInfo';
import { fetchProjects } from '../utils/fetchProjects';
import { fetchSkills } from '../utils/fetchSkills';
import { fetchSocial } from '../utils/fetchSocials';

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  return (
    <div
      className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scrol overflow-x-hidden
    z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/40'
    >
      <Head>
        <title>Chris&apos;s Portfolio</title>
      </Head>

      {/* Header */}
      <Header socials={socials} />

      {/* Hero */}
      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About */}
      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>

      {/* Experience */}
      <section id='experience' className='snap-center'>
        <WorkExperience experiences={experiences} />
      </section>

      {/* Skills */}
      <section id='skills' className='snap-start'>
        <Skills skills={skills} />
      </section>

      {/* Projects */}
      <section id='projects' className='snap-start'>
        <Projects projects={projects} />
      </section>

      {/* Contact */}
      <section id='contact' className='snap-start'>
        <Contact />
      </section>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  };
};
