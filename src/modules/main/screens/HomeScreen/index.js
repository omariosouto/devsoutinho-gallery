import HeroExample from './HeroExample';

import ProjectsGrid from './patterns/ProjectsGrid';
import Footer from '../../../../patterns/Footer';
import { MainContainer } from '../../../../components/layout/Container';
import Link from '../../../../components/commons/Link';


// Text
// Button

export default function HomeScreen({ projects }) {
  return (
    <MainContainer>
      <HeroExample>
        <ProjectsGrid projects={projects.slice(0, 4)} />
        <Link
          href="https://youtube.com/DevSoutinho"
          className="inline-flex items-center mt-5 px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md shadow-sm bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          Ver mais
        </Link>
      </HeroExample>


      <Footer />
    </MainContainer>
  )
}