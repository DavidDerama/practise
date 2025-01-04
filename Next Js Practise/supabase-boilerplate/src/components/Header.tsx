import Content from "./Content";
import Link from "next/link";
import Profile from "./Profile";

export default function Header() {
  return (
    <Content>
      <header className="flex justify-between">
        <Link href={".."}>TEST</Link>
        <Profile />
      </header>
    </Content>
  );
}
