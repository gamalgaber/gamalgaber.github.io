const aboutItems = [
  {
    label: "Project and tasks done",
    number: 15,
  },
  {
    label: "Years of experience",
    number: 1,
  },
];

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m Gamal, a Backend Developer with Frontend Expertise
            I specialize in building visually stunning and highly functional
            websites. By blending creativity with technical expertise, I
            transform your vision into a digital masterpiece that excels in both
            aesthetics and performance.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => {
              return (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">
                      {number}<span className="text-sm text-sky-400">+</span>
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              );
            })}
            {/* <img
              src="/assets/logo.png"
              alt="logo"
              width={50}
              height={50}
              className="ml-auto md:w-[40px] md:h-[40px]"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
