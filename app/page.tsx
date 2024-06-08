import type { Metadata } from "next";
import { Counter } from "./components/counter/Counter";
import { SectionContainer } from "./components/SectionContainer/SectionContainer";

export default function IndexPage() {
  return (
    <SectionContainer>
      <Counter />
    </SectionContainer>
  );
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
