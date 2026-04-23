// import Link from "next/link";
import React from "react";
import Footer from "../components/home/Footer";
import InfoBlock from "../components/InfoBlock";

function About() {
  return (
    <div className="flex flex-col w-full min-h-screen justify-between p-8 md:p-12 gap-12">
      <main className="flex w-full flex-col gap-[32px] items-center">
        {/* FAQ */}
        <div className="flex flex-col lg:flex-row w-full max-w-5xl gap-4 lg:gap-8">
          <div className="space-y-12">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
              DEVLOG
            </h1>
            <InfoBlock title="What's new?">
              <span className="md:text-lg">
                Check this page for development updates and videos showing off
                new features.
              </span>
            </InfoBlock>

            <InfoBlock title="Trigger Components">
              <span className="md:text-lg">
                A TriggerComponent gives an Entity the ability to trigger events on
                interactions such as physics collisions. This will be used to do
                things like exit levels, autosave, change music, and more.
              </span>
              <iframe
                className="mt-4 w-full aspect-video"
                src="https://www.youtube.com/embed/_tKM3g__muA?si=MiewzpaJ2N_eaKm1"
                title="Triggers"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </InfoBlock>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;
