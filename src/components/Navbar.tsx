"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 sm:inset-x-0 sm:max-w-xl sm:mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href={"#home"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href={"#projects"}>
          <MenuItem setActive={setActive} active={active} item="Projects">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="https://github.com/teja-86">
                Portfolio
              </HoveredLink>

              <HoveredLink href="https://tweethub-adle.onrender.com/">
                TweetHub
              </HoveredLink>
              <HoveredLink href="https://github.com/teja-86/CareerConnect-Pro">
                CareerConnect Pro
              </HoveredLink>
              <HoveredLink href="https://github.com/teja-86/AI-Text-Summarizer">
                AI Text Summarizer 
              </HoveredLink>
              <HoveredLink href="https://tangerine-figolla-123be9.netlify.app/">
                ROYAL Trips
              </HoveredLink>
              
            </div>
          </MenuItem>
        </Link>
        <Link href={"#about"}>
          <MenuItem setActive={setActive} active={active} item="About">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="#services">Services</HoveredLink>
            </div>
          </MenuItem>
        </Link>
        <Link href={"#contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="mailto:rangadharmateja0@gmail.com">
                Email
              </HoveredLink>
              <HoveredLink href="https://www.linkedin.com/in/ranga-dharma-teja-kuntumalla-127b59239/">
                LinkedIn
              </HoveredLink>
              <HoveredLink href="https://leetcode.com/u/ranga_dharma_teja/">
                Leetcode
              </HoveredLink>
            </div>
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
