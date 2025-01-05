import Content from "./Content";
import Link from "next/link";
import Profile from "./Profile";

export default function Header() {
  return (
    <Content>
      <header className="flex justify-between">
        <Link href={".."}>TEST</Link>
        <div className="flex gap-4">
          <Link
            href={"dashboard"}
            className="bg-black py-2 px-3 text-white rounded-sm font-medium"
          >
            Dashboard
          </Link>
          <Profile />
        </div>
      </header>
    </Content>
  );
}
