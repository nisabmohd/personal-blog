import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GithubIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export default function Home() {
  return (
    <div>
      <div className="text-[21px] mb-10 font-medium">
        Hey, I&apos;m Nisab Mohd
      </div>
      <div className="flex flex-col gap-6">
        <p>
          <Balancer>
            I am a software engineer with a strong background in full-stack
            development and data structures. I am a passionate and highly
            skilled software engineer with a robust foundation in full-stack
            development and a deep understanding of data structures.
          </Balancer>
        </p>
        <p>
          <Balancer>
            My journey in the world of technology has been marked by a
            relentless pursuit of knowledge and a commitment to delivering
            innovative solutions. With expertise in a wide range of
            technologies, including Java, JavaScript, React, Next.js, and
            Node.js. I am well-equipped to tackle complex projects and create
            seamless, user-centric experiences. Whether its designing elegant
            user interfaces, optimizing backend processes, or crafting efficient
            algorithms, I thrive on turning challenges into opportunities for
            growth and innovation.
          </Balancer>
        </p>
        <p>
          <Balancer>
            I am dedicated to staying at the forefront of the ever-evolving tech
            landscape and leveraging my skills to make a meaningful impact in
            the software development field.
          </Balancer>
        </p>
      </div>
      <div className="flex flex-row items-center mt-5 -ml-3">
        <Link
          href="https://github.com/nisabmohd"
          className={cn(buttonVariants({ variant: "link" }), "text-inherit")}
        >
          <GithubIcon className="mr-1 w-5 h-5" /> GitHub
        </Link>
        <Link
          href="https://twitter.com/MohdNisab"
          className={cn(
            buttonVariants({ variant: "link" }),
            "text-inherit -ml-3"
          )}
        >
          <TwitterIcon className="mr-1 w-5 h-5" /> Twitter
        </Link>
      </div>
    </div>
  );
}
