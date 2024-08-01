const Email = () => {
  return (
    <div className="hidden md:block">
      <div className="fixed bottom-0 right-8 text-aquamarine flex flex-col items-center gap-6">
        <a
          href="mailto:pallobpoddar@gmail.com"
          target="_blank"
          className="font-mono text-base tracking-widest [writing-mode:vertical-rl]"
        >
          pallobpoddar@gmail.com
        </a>
        <div className="w-px h-20 bg-[#a8b2d1]" />
      </div>
    </div>
  );
};

export default Email;
