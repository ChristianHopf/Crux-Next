import HeroHome from "./components/home/HeroHome";
import Roadmap from "./components/home/Roadmap";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen justify-between p-8 md:p-12 gap-12">
      <main className="flex w-full flex-col gap-[32px] items-center">
        <HeroHome />
        <Roadmap />
        <div className="flex flex-col lg:flex-row w-full max-w-4xl">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
              BEYOND 1.0
            </h1>
            <p className="md:text-lg">
              We have a few ideas for continuing development after the 1.0
              release:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li className="md:text-lg">
                <span className="font-medium">Rendering: </span>Features such as
                anti-aliasing and physically-based rendering, optimizations such
                as instancing, and bug fixes such as sorting transparent objects
                by depth for accurate blending of multiple transparent objects.
              </li>
              <li className="md:text-lg">
                <span className="font-medium">Physics: </span>Enhance our
                physics engine with more sophisticated features, such as more
                bounding volumes, force generators, a constraint solver, and a
                stack for resolving collisions in realistic order.
              </li>
              <li className="md:text-lg">
                <span className="font-medium">Level Editor!</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <span className="text-[#2348AF] font-semibold">
          © Dinobytes Studio 2025
        </span>
      </footer>
    </div>
  );
}
