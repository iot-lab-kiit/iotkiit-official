import ProjectCarousel3D from "@/components/project-carousel/ProjectCarousel";
import { PROJECTS } from "@/data/projects";

export default function Page() {
  return (
    <main>
      <ProjectCarousel3D projects={PROJECTS} />
    </main>
  );
}