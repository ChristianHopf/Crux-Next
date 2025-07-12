import Link from "next/link";
import React from "react";
import Question from "./Question";
import Footer from "../components/home/Footer";

function About() {
  return (
    <div className="flex flex-col w-full min-h-screen justify-between p-8 md:p-12 gap-12">
      <main className="flex w-full flex-col gap-[32px] items-center">
        {/* FAQ */}
        <div className="flex flex-col lg:flex-row w-full max-w-5xl gap-4 lg:gap-8">
          <div className="space-y-12">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
              FREQUENTLY ASKED QUESTIONS
            </h1>
            <Question title="Can I modify Crux?">
              <span className="md:text-lg">
                Because Crux is free and open-source software, you can do just
                about anything you want with it, subject to certain conditions.
                Read more about the MIT License{" "}
                <Link
                  href={"https://opensource.org/license/mit"}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-blue-700 hover:text-blue-500 transition-colors nav-underline"
                >
                  here.
                </Link>
              </span>
            </Question>
            <Question title="What third-party libraries does Crux use?">
              <p className="md:text-lg">
                Below is a list of the third-party libraries we use and their
                purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li className="text-base md:text-lg">
                  <span className="font-medium">Glad: </span>Implementation of
                  Khronos Group&apos;s OpenGL graphics API.
                </li>
                <li className="md:text-lg">
                  <span className="font-medium">Assimp:</span> Process 3D models
                  of various file formats.
                </li>
                <li className="text-base md:text-lg">
                  <span className="font-medium">FreeType:</span> Process fonts
                  for in-game text and UI elements.
                </li>
                <li className="text-base md:text-lg">
                  <span className="font-medium">OpenAL:</span> Immersive spatial
                  audio playback.
                </li>
                <li className="text-base md:text-lg">
                  <span className="font-medium">libsndfile:</span> Process audio
                  files.
                </li>
                <li className="text-base md:text-lg">
                  <span className="font-medium">Clay:</span> Immediate mode UI
                  layouting library.
                </li>
                <li className="text-base md:text-lg">
                  <span className="font-medium">cJSON: </span>Process JSON
                  files.
                </li>
                <li className="text-base md:text-lg">
                  <span className="font-medium">stb_image: </span>Process image
                  files.
                </li>
                <li className="text-base md:text-lg">
                  <span className="font-medium">Unity: </span>Unit testing.
                </li>
              </ul>
            </Question>
            <Question title="Can I contribute to Crux?">
              <p className="md:text-lg">
                If you want to help develop Crux, we&apos;d love to have you!
                Feel free to open a pull request with your contribution on our{" "}
                <Link
                  href={"https://github.com/ChristianHopf/Crux"}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-blue-700 hover:text-blue-500 transition-colors nav-underline"
                >
                  GitHub repository
                </Link>
                , or join the Discord server (coming soon).
              </p>
            </Question>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;
