import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import Approach from "@/screens/Approach";
import Footer from "@/screens/Footer";
import Grid from "@/screens/Grid";
import Hero from "@/screens/Hero";
import RecentProjects from "@/screens/RecentProjects";
import Testimonials from "@/screens/Testimonials";
import WorkExperience from "@/screens/WorkExperience";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Testimonials />
        <WorkExperience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
