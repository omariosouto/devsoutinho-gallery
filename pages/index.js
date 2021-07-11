import { getAllProjects } from "../src/repositories/projects";
import HomeScreen from "../src/modules/main/screens/HomeScreen";

export default HomeScreen;

export async function getStaticProps() {
  return {
    props: {
      projects: await getAllProjects(),
    },
  };
}
