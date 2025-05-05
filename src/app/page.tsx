import Image from "next/image";
import { FloatingDock } from "~/components/floating-dock";
import { ProjectExperienceCard } from "~/components/project-experience-card";
import { Badge } from "~/components/ui/badge";
import { WorkExperienceCard } from "~/components/work-experience-card";

import { skills } from "~/data/skills";
import { workExperiences } from "~/data/work-experiences";
import { projects } from "~/data/projects";
import { cn } from "~/lib/utils";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-[100dvh] p-6 pb-20 gap-8 max-w-6xl mx-auto ">
      {/* TOP SECTION */}
      <div className="flex justify-between gap-4 md:gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter font-bold text-foreground text-balance">
            {`Hey there, I'm Julian 👋`}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-foreground text-wrap leading-6">
            A <span className="font-bold">Software Engineer </span>with a
            passion for front-end and full-stack development. Ask me about the
            robots I build!
          </p>
        </div>
        <div className="grow-0 shrink-0">
          <Image
            src={"/pfp-ghibli-square.png"}
            alt="Picture of Julian"
            width={125}
            height={125}
            className="rounded-full shadow-xl/50"
            unoptimized
          />
        </div>
      </div>

      {/* ABOUT ME */}
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          About Me!
        </h2>
        <p className="text-foreground">
          {`I'm a Management Engineering grad from the University of Waterloo with a
          passion for building cool stuff — especially in Front End + Full Stack Development
          (React + Next.js). I'm religiously involved in FIRST Robotics; I'm a team mentor and volunteer at many events. I speak fluent TypeScript, JavaScript, and Python, and love
          tackling tough problems. I also enjoy talking about them too — public speaking is
          a strength of mine! I'm a self-starter who loves diving into new challenges and
          learning as I go!`}
        </p>
      </div>

      {/* SKILLS */}
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Skill Set
        </h2>
        <div className="flex flex-row gap-3 flex-wrap">
          {skills.map((skill) => (
            <Badge key={`skills-badge-${skill}`}>{skill}</Badge>
          ))}
        </div>
      </div>

      {/* WORK EXPERIENCE */}
      <div className="w-full flex flex-col gap-2">
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Work Experience
        </h3>
        <ul className="divide-y divide-solid ml-6">
          {workExperiences.map((experience, index) => {
            let shouldHideBorder = false;

            if (
              index + 1 !== workExperiences.length - 1 &&
              workExperiences[index + 1]?.isSequential
            ) {
              shouldHideBorder = true;
            }

            return (
              <li
                key={`work-experience-${index}-${experience.company}`}
                className={cn(
                  "not-first:pt-1",
                  shouldHideBorder && "border-b-0"
                )}
              >
                <WorkExperienceCard {...experience} />
              </li>
            );
          })}
        </ul>
      </div>

      {/* PROJECTS */}
      <div className="w-full flex flex-col gap-2" id="projects">
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Projects
        </h3>
        <p className="text-muted-foreground text-xl">
          A curated collection of my favorite work—ranging from passion projects
          to real-world solutions.
        </p>
        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectExperienceCard
              key={`projects-card-${project.title}`}
              {...project}
            />
          ))}
        </div>
      </div>
      <FloatingDock />
    </div>
  );
}
