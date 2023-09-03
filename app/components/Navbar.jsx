import Image from "next/image";
import Logo from "./dojo-logo.png";
import Link from "next/link";

export default function Navbar({ user }) {
  return (
    <nav>
      <Image
        src={Logo}
        alt="HelpDesk logo"
        width={70}
        quality={100}
        placeholder="blur"
      />
      <h1>NetNinja Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
      {user && <span>Hello, {user.email}</span>}
    </nav>
  );
}
