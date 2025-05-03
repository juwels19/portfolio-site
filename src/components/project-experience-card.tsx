import Image from "next/image";
import { GlobeIcon } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Badge } from "~/components/ui/badge";
import { Card, CardTitle } from "~/components/ui/card";

export function ProjectExperienceCard({
  title,
  description,
  imageUrl,
  skills,
  link,
  sourceCodeLink,
}: {
  title: string;
  description: string;
  imageUrl: string;
  skills: string[];
  link?: string;
  sourceCodeLink?: string;
}) {
  return (
    <Card className="pt-0 gap-2">
      <div className="min-h-40 max-h-60 relative aspect-16/9">
        <Image
          src={imageUrl}
          alt={`${title} image`}
          fill
          className="rounded-tl-xl rounded-tr-xl"
        />
      </div>
      <div className="grow-1 px-4 flex flex-col gap-2">
        <div className="grow-1">
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
          <p className="text-sm">{description}</p>
        </div>

        <div className="flex flex-row gap-2 flex-wrap">
          {skills.map((skill) => (
            <Badge key={`${title}-skills-badge-${skill}`}>{skill}</Badge>
          ))}
        </div>

        <div className="mt-2 flex gap-2 items-end">
          {link && (
            <a href={link} className="cursor-pointer">
              <Badge
                variant="secondary"
                className="px-2 py-1 gap-2 hover:bg-secondary/90 border border-primary/10"
              >
                <GlobeIcon />
                <p className="font-semibold">Website</p>
              </Badge>
            </a>
          )}

          {sourceCodeLink && (
            <a href={sourceCodeLink} className="cursor-pointer">
              <Badge
                variant="secondary"
                className="px-2 py-1 gap-2 hover:bg-secondary/90 border border-primary/10"
              >
                <SiGithub />
                <p className="font-semibold">Source code</p>
              </Badge>
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}
