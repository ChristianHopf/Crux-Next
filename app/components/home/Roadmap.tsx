import React from "react";

function Roadmap() {
  return (
    <div className="flex flex-col lg:flex-row w-full max-w-4xl">
      <div className="space-y-2">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">ROADMAP</h1>
        <p className="md:text-lg">
          We still have several milestones to hit before we can provide you with
          a &quot;complete&quot; 1.0 release. Read more below about the features
          you&apos;ll find in Crux 1.0!
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li className="md:text-lg">
            <span className="font-medium">Rendering: </span>Use OpenGL to render
            Entities with models and shaders.{" "}
            <span className="text-gray-500 italic">[Completed]</span>
          </li>
          <li className="text-base md:text-lg">
            <span className="font-medium">Physics: </span>Create a simple
            physics engine with boxes, spheres, planes, gravity, and elastic
            collisions.{" "}
            <span className="text-gray-500 italic">[Completed]</span>
          </li>
          <li className="text-base md:text-lg">
            <span className="font-medium">Game State:</span> Create a
            centralized game state observer system.{" "}
            <span className="text-gray-500 italic">[Completed]</span>
          </li>
          <li className="text-base md:text-lg">
            <span className="font-medium">Audio:</span> Create a user-friendly
            API built on top of OpenAL for music and spatial sound effects.{" "}
            <span className="text-gray-500 italic">[Completed]</span>
          </li>
          <li className="text-base md:text-lg">
            <span className="font-medium">UI:</span> Display in-game popups, HUD
            elements, menus, and more with Clay&apos;s blazingly fast
            immediate-mode UI.
          </li>
          <li className="text-base md:text-lg">
            <span className="font-medium">Multiplayer: </span>Support for
            multiplayer networking.
          </li>
          <li className="text-base md:text-lg">
            <span className="font-medium">Cross-Platform Support: </span>Add
            support for Windows machines.
          </li>
          <li className="text-base md:text-lg">
            <span className="font-medium">Documentation: </span>
            Write robust documentation, ensure compliance with third-party
            licenses, and create a tutorial for building a simple game.
          </li>
          <li className="text-base md:text-lg">
            <span className="font-medium">Licensing: </span>
            Ensure compliance with third-party licenses
          </li>
          <li className="text-base md:text-lg">
            <span className="font-medium">Tutorials: </span>
            Create a tutorial for building a simple game.
          </li>
          <li className="text-base md:text-lg">
            <span className="font-medium">Testing: </span>Write a robust test
            suite.
          </li>
          <li className="text-base md:text-lg">
            <span className="font-medium">Miscellaneous: </span>Many other
            features, bug fixes, and refactors are likely to arise, as this is
            our first time building an engine.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Roadmap;
