import Header from "@/components/header/Header";
import Intro from "@/components/intro/Intro";
import About from "@/components/about/About";

const Home = () => {
	return (
		<>
			<main className="px-6 sm:px-10 lg:px-28">
				<Intro />
				<About />
			</main>
		</>
	);
};

export default Home;
