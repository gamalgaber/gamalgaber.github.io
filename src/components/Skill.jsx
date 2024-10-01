import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/assets/icons/html.svg",
    label: "HTML",
    desc: "Markup Language",
  },
  {
    imgSrc: "/assets/icons/css3.svg",
    label: "CSS",
    desc: "Styling",
  },
  {
    imgSrc: "/assets/icons/javascript.svg",
    label: "JavaScript",
    desc: "Scripting Language",
  },
  {
    imgSrc: "/assets/icons/nodejs.svg",
    label: "NodeJS",
    desc: "JavaScript Runtime",
  },
  {
    imgSrc: "/assets/icons/expressjs.svg",
    label: "ExpressJS",
    desc: "Node.js Framework",
  },
  {
    imgSrc: "/assets/icons/mongodb.svg",
    label: "MongoDB",
    desc: "NoSQL Database",
  },
  {
    imgSrc: "/assets/icons/react.svg",
    label: "React",
    desc: "JavaScript Library",
  },
  {
    imgSrc: "/assets/icons/php.svg",
    label: "PHP",
    desc: "Backend Language",
  },
  {
    imgSrc: "/assets/icons/laravel.svg",
    label: "Laravel",
    desc: "PHP Framework",
  },
  {
    imgSrc: "/assets/icons/mysql.svg",
    label: "MySQL",
    desc: "Relational Database",
  },
  {
    imgSrc: "/assets/icons/redis.svg",
    label: "Redis",
    desc: "In-memory Data Store",
  },
  {
    imgSrc: "/assets/icons/git.svg",
    label: "Git",
    desc: "Version Control System",
  },
  {
    imgSrc: "/assets/icons/github.svg",
    label: "GitHub",
    desc: "Git Repository Hosting",
  },
  {
    imgSrc: "/assets/icons/docker.svg",
    label: "Docker",
    desc: "Containerization Platform",
  },
];

function Skill() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools I use</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => {
            return (
              <SkillCard
                key={key}
                imgSrc={imgSrc}
                label={label}
                desc={desc}
                classes="reveal-up"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skill;
