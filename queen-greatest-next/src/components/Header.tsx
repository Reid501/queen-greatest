import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../../public/logo.png";

export default function Header() {
  const router = useRouter();
  return (
    <header className="flex flex-col items-center mb-10">
      <div className="my-5">
        <Image src={logo} alt="queen logo" width={200} />
      </div>
      <nav className="">
        <ul className="flex">
          <li className="mx-4 text-lg ">
            <Link
              href="/"
              className={
                router.pathname == "/"
                  ? "bg-primary-100 text-white py-2 px-4 rounded-md"
                  : "bg-white text-primary-100 py-2 px-4 border-2 border-primary-100 rounded-md"
              }
            >
              VOTE
            </Link>
          </li>
          <li className="mx-4 text-lg text-primary-100">
            <Link
              href="/leaderboard"
              className={
                router.pathname == "/leaderboard"
                  ? "bg-primary-100 text-white py-2 px-4 rounded-md"
                  : "bg-white text-primary-100 py-2 px-4 border-2 border-primary-100 rounded-md"
              }
            >
              LEADER BOARD
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
