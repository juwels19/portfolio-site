import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Badge } from "~/components/ui/badge";
import { cn } from "~/lib/utils";

export function WorkExperienceCard({
  title,
  company,
  isSequential,
  companyImage,
  imageProps,
  startDate,
  endDate,
  description,
  skills,
}: {
  title: string;
  company: string;
  isSequential?: boolean;
  companyImage: string;
  imageProps?: string;
  startDate: string;
  endDate: string;
  description: string;
  skills?: string[];
}) {
  return (
    <Accordion
      type="single"
      collapsible
      className="py-2 pt-0 border-l border-dashed"
    >
      <AccordionItem value={company}>
        <AccordionTrigger className="cursor-pointer hover:no-underline py-2">
          <div className="relative flex flex-row items-center gap-2 h-full w-full">
            <div
              className={cn(
                "absolute",
                isSequential ? "-left-[5px] top-2" : "-left-6.5"
              )}
            >
              {isSequential ? (
                <span className="size-2 bg-border dark:bg-muted-foreground rounded-full block" />
              ) : (
                <Image
                  src={companyImage}
                  alt={`${company} logo`}
                  width={50}
                  height={50}
                  className={cn("rounded-full bg-white", imageProps)}
                />
              )}
            </div>
            <div className="ml-10 flex flex-col min-h-full justify-start align-top">
              <p className="text-lg font-bold leading-5">{title}</p>
              <p className="text-md">{company}</p>
              <p className="text-sm text-muted-foreground flex min-[850px]:hidden">
                {startDate} - {endDate}
              </p>
            </div>
            <div className="grow-1 justify-self-end text-sm text-muted-foreground flex-col align-top h-full text-right hidden min-[850px]:flex">
              <span>
                {startDate} - {endDate}
              </span>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="ml-10 pb-2">
          {description}
          {skills && (
            <div className="flex flex-col gap-2 items-start pt-1">
              <span className="text-lg font-bold">Skills:</span>
              <div className="flex gap-1">
                {skills.map((skill) => (
                  <Badge
                    key={`${company}-skills-badge-${skill}`}
                    className="h-5"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
