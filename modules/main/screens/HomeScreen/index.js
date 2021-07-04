import HeroExample from './HeroExample';

import ProjectsGrid from './patterns/ProjectsGrid';
import Container from '../../../../components/layout/Container';
import Footer from '../../../../patterns/Footer';

export default function HomeScreen({ projects }) {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroExample>
        <ProjectsGrid projects={projects.slice(0, 4)} />
        <a
          href="https://youtube.com/DevSoutinho"
          className="inline-flex items-center mt-5 px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md shadow-sm bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
        Ver mais
      </a>
      </HeroExample>


      <Footer />
    </div>
  )
}