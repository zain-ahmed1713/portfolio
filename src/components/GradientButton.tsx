"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

type GradientButtonProps = {
  buttonText: string;
};

const GradientButton: React.FC<GradientButtonProps> = ({ buttonText }) => {
  return (
    <div className="mt-4 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <span>{buttonText}</span>
      </HoverBorderGradient>
    </div>
  );
};
export default GradientButton;
