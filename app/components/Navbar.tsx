import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";

export default function Navbar() {
  return (
    <div className="bg-[#2348AF] w-full sticky top-0 z-10">
      <div className="flex max-w-screen-2xl justify-between items-center mx-auto px-4 py-4">
        <Link href={"/"}>
          <span className="text-white font-bold hover:text-stone-300 text-3xl md:text-4xl px-2 py-1 transition-colors nav-underline">
            CRUX
          </span>
        </Link>
        <span className="flex items-center gap-2 md:gap-6">
          <Link
            href={"/about"}
            className="text-white hover:text-stone-300 text-md md:text-xl xl:text-2xl px-2 py-1 transition-colors nav-underline"
          >
            <p>About</p>
          </Link>
          <Link
            href={"https://github.com/ChristianHopf/Crux"}
            rel="noopener noreferrer"
            target="_blank"
            className="text-white hover:text-stone-300 text-lg px-2 py-1 transition-colors nav-underline"
          >
            <IoLogoGithub className="text-xl md:text-2xl xl:text-3xl" />
          </Link>
        </span>
      </div>
    </div>
  );
}
