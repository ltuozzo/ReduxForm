"use client";

import React, { FC } from "react";
import type { ReactNode } from "react";
import { SectionContainerWrapper } from "./SectionContainer.styled";

interface SectionContainerProps {
  readonly children: ReactNode;
}

const SectionContainer = ({ children }: SectionContainerProps) => {
  return <SectionContainerWrapper>{children}</SectionContainerWrapper>;
};

export default SectionContainer;
