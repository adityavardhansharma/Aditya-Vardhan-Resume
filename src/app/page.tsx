import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import TypingAnimation from "@/components/magicui/typing-animation";
import IconCloud from "@/components/magicui/icon-cloud";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import DownloadButton from '@/components/ui/DownloadButton';

const BLUR_FADE_DELAY = 0.04;



export function ScrollBasedVelocityDemo() {
  return (
      <VelocityScroll
          text=""
          default_velocity={5}
          className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
      />
  );
}

export function TypingAnimationDemo() {
  const anText = "Data Science | Machine Learning | Gen AI | Fullstack Web Dev";
  return (
      <TypingAnimation
          className="text-2xl font-bold text-black dark:text-white whitespace-nowrap"
          text={anText}
          duration={50}
      />
  );
}

const slugs = [
  "typescript",
  "javascript",
  "python",
  "solidity",
  "react",
  "drizzle",
  "neondb",
  "html5",
  "css3",
  "nodedotjs",
  "c",
  "nextdotjs",
  "cplusplus",
  "matplotlib",
  "c",
  "powerbi",
  "uipath",
  "wordpress",
  "mongodb",
  "firebase",
  "pnpm",
  "linux",
  "flask",
  "huggingface",
  "machinelearning",
  "streamlit",
  "netlify",
  "vercel",
  "r",
  "tensorflow",
  "mysql",
  "docker",
  "git",
  "mysql",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "webstorm",
  "pycharm",
  "tailwindcss",
  "vuedotjs"
];

export function IconCloudDemo() {
  return (
      <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  bg-transparent px-20 pb-20 pt-8 ">
        <IconCloud
            iconSlugs={slugs}
            options={{ dragControl: true }}/>
      </div>
  );
}


export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none whitespace-nowrap"
                yOffset={8}
                text={`Hi, I'm Aditya Vardhan Sharma 👋`}
              />
              <BlurFade delay={BLUR_FADE_DELAY}>
                {/* Now using TypingAnimationDemo directly */}
                <TypingAnimationDemo />
              </BlurFade>

            </div>

          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
            <IconCloudDemo />
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>

                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>

        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}

                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      {/*<section id="hackathons">*/}
      {/*  <div className="space-y-12 w-full py-12">*/}
      {/*    <BlurFade delay={BLUR_FADE_DELAY * 13}>*/}
      {/*      <div className="flex flex-col items-center justify-center space-y-4 text-center">*/}
      {/*        <div className="space-y-2">*/}
      {/*          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">*/}
      {/*            Hackathons*/}
      {/*          </div>*/}
      {/*          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">*/}
      {/*            I like building things*/}
      {/*          </h2>*/}
      {/*          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">*/}
      {/*            During my time in university, I attended{" "}*/}
      {/*            {DATA.hackathons.length}+ hackathons. People from around the*/}
      {/*            country would come together and build incredible things in 2-3*/}
      {/*            days. It was eye-opening to see the endless possibilities*/}
      {/*            brought to life by a group of motivated and passionate*/}
      {/*            individuals.*/}
      {/*          </p>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </BlurFade>*/}
      {/*    <BlurFade delay={BLUR_FADE_DELAY * 14}>*/}
      {/*      <ul className="mb-4 ml-4 divide-y divide-dashed border-l">*/}
      {/*        {DATA.hackathons.map((project, id) => (*/}
      {/*          <BlurFade*/}
      {/*            key={project.title + project.dates}*/}
      {/*            delay={BLUR_FADE_DELAY * 15 + id * 0.05}*/}
      {/*          >*/}
      {/*            <HackathonCard*/}
      {/*              title={project.title}*/}
      {/*              description={project.description}*/}
      {/*              location={project.location}*/}
      {/*              dates={project.dates}*/}
      {/*              image={project.image}*/}
      {/*              links={project.links}*/}
      {/*            />*/}
      {/*          </BlurFade>*/}
      {/*        ))}*/}
      {/*      </ul>*/}
      {/*    </BlurFade>*/}
      {/*  </div>*/}
      {/*</section>*/}
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Resume
              </div>
              <DownloadButton />




            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}