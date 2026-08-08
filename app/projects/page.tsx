import ProjectCarousel3D from "@/components/project-carousel/ProjectCarousel";
import { PROJECTS } from "@/data/projects";

export const metadata = {
  title: 'Projects | IoT Lab KIIT',
  description: 'A showcase of engineering prowess, smart automation, and connected ecosystems from IoT Lab KIIT.',
};

export default function Page() {
  return (
    <main>
      <ProjectCarousel3D projects={PROJECTS} />
    </main>
  );
}