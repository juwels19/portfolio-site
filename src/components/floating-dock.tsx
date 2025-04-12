"use client";

import { SiGithub } from "@icons-pack/react-simple-icons";
import { IoLogoLinkedin } from "react-icons/io5";
import { HouseIcon } from "lucide-react";
import { Dock, DockIcon } from "~/components/magicui/dock";
import { Separator } from "~/components/ui/separator";
import Link from "next/link";
import { ThemeSwitcher } from "~/components/theme-switcher";

export function FloatingDock() {
  return (
    <div className="z-50 bottom-5 sticky">
      <Dock iconDistance={20}>
        <DockIcon>
          <Link href="/#">
            <HouseIcon />
          </Link>
        </DockIcon>
        <Separator orientation="vertical" />
        <DockIcon>
          <Link
            href={"https://www.linkedin.com/in/juliancuralli/"}
            target="_blank"
            rel="noreferrer noopener"
          >
            <IoLogoLinkedin size={24} />
          </Link>
        </DockIcon>
        <DockIcon>
          <Link
            href="https://github.com/juwels19"
            target="_blank"
            rel="noreferrer noopener"
          >
            <SiGithub />
          </Link>
        </DockIcon>
        <Separator orientation="vertical" />
        <DockIcon>
          <ThemeSwitcher />
        </DockIcon>
      </Dock>
    </div>
  );
}
