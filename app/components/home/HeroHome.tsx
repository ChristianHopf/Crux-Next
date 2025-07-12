import React from "react";

function HeroHome() {
  return (
    <div className="flex flex-col lg:flex-row w-full max-w-4xl gap-4 lg:gap-8">
      <div className="space-y-2 lg:w-1/2">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
          GAME ENGINE
        </h1>
        <p className="md:text-lg">
          Built by Dinobytes Studio, Crux is a Linux-native, free and
          open-source game engine written in C that provides a suite of
          low-level APIs for developing lightweight, high-performance games in
          3D environments.
        </p>
      </div>
      <div className="lg:w-1/2 flex flex-col items-center text-center justify-center">
        <iframe
          className="w-full aspect-video"
          src="https://www.youtube.com/embed/xmT5EHLfxNg"
          title="Crux Game Engine Demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <span className="text-stone-700 text-sm">
          Demo videos coming soon! For now, enjoy this music by DUSQK.
        </span>
      </div>
    </div>
  );
}

export default HeroHome;
