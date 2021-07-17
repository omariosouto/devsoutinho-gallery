import HeroExample from "./HeroExample";

import ProjectsGrid from "./patterns/ProjectsGrid";
import Footer from "../../../../patterns/Footer";
import { MainContainer } from "../../../../components/foundation/layout/Container";
import Box from "../../../../components/foundation/layout/Box";
import Button from "../../../../components/commons/Button";

export default function HomeScreen({ projects }) {
  return (
    <MainContainer>
      <HeroExample>
        <ProjectsGrid projects={projects.slice(0, 4)} />

        <Box className="mt-5">
          <Button href="/" variant="primary" size="sm">
            Ver mais!
          </Button>
        </Box>
      </HeroExample>

      <Footer />
      <div className="theme-store">
        <Footer />
      </div>
    </MainContainer>
  );
}
