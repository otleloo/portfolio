import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { WorkHistory } from "@/components/WorkHistory";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">💼</span>
      <Heading className="font-black">Work History</Heading>
      <Paragraph className="max-w-xl mt-4">
        My professional journey is marked by a passion for leveraging cutting-edge technologies to build intelligent systems and drive innovation in the AI/ML domain.
      </Paragraph>
      <WorkHistory />
    </Container>
  );
}
