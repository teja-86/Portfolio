"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface blogs {
  title: string;
  url: string;
  description: string;
  thumbnail: StaticImageData;
}

export function BlogsCards({ title, url, description, thumbnail }: blogs) {
  return (
    <div className="h-[25rem] flex items-center justify-center z-10">
      
    </div>
  );
}
