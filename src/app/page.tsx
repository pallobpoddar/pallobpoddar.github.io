import Header from "@/components/header/Header";
import Intro from "@/components/intro/Intro";
import About from "@/components/about/About";
import SocialLinks from "@/components/socialLinks/SocialLinks";
import Email from "@/components/socialLinks/Email";
import ProjectList from "@/components/projectList/ProjectList";
import Footer from "@/components/footer/Footer";

const Page = () => {
  return (
    <>
      <main className="px-6 sm:px-10 md:px-20 lg:px-32">
        <SocialLinks />
        <Email />
        <Intro />
        <About />
        <ProjectList />
        <Footer />
      </main>
    </>
  );
};

export default Page;
