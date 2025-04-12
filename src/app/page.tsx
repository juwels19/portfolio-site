import Image from "next/image";
import { FloatingDock } from "~/components/floating-dock";
import { Badge } from "~/components/ui/badge";

export default function Home() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "shadcn/ui",
    "Prisma",
    "Drizzle",
    "Tailwind",
    "Postgres",
    "Node.js",
    "Express.js",
    "Python",
    "Java",
    "Full Stack Development",
    "CI/CD",
    "Git",
  ];

  return (
    <div className="flex flex-col items-center justify-items-center min-h-[100dvh] p-8 pb-20 gap-8 sm:p-20 max-w-5xl mx-auto ">
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
            src={"/headshot.png"}
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
        <div className="flex flex-row gap-2 flex-wrap">
          {skills.map((skill) => (
            <Badge key={`skills-badge-${skill}`}>{skill}</Badge>
          ))}
        </div>
      </div>
      <FloatingDock />
    </div>
  );
}
