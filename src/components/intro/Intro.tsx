import React from "react";

const Intro = () => {
	return (
		<section className="my-20">
			<p className="font-mono text-aquamarine text-2xs mb-2 ml-1">
				Hello, this is
			</p>
			<h1 className="font-sans text-hawkes-blue text-2xl font-semibold leading-tight sm:text-[60px] lg:text-[80px]">
				Pallob Poddar.
			</h1>
			<h2 className="font-sans text-manatee text-2xl font-semibold mb-2.5 leading-tight sm:text-[60px] lg:text-[80px]">
				I love exploring new things!
			</h2>
			<div className="my-10 max-w-md font-sans text-manatee text-base">
				<p className="mb-4">
					I&apos;m a Computer Science & Engineering graduate from
					North South University. Primarily interested in Web
					Development.
				</p>
				<p className="mb-4">
					I enjoy learning new skills and implementing them in real
					life!
				</p>
			</div>
			<a href="https://www.linkedin.com/in/pallobpoddar/" target="_blank">
				<button className="border border-solid border-aquamarine rounded py-5 px-7 text-aquamarine text-xs font-mono leading-none">
					Get In Touch
				</button>
			</a>
		</section>
	);
};

export default Intro;
