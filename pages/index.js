import { getAllProjects } from '../repositories/projects';
import HomeScreen from '../modules/main/screens/HomeScreen';

export default HomeScreen;

export async function getStaticProps() {
  return {
    props: {
      projects: await getAllProjects(),
    }
  }
}