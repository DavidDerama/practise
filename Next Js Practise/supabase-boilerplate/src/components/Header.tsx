import Content from "./Content";
import Link from "next/link";
import DashboardBtn from "./DashboardBtn";
import Profile from "./Profile";

export default function Header() {
  return (
    <Content>
      <header className="flex justify-between">
        <Link href={".."}>Home</Link>
        <div className="flex gap-4">
          <Link href="/subscription">Subscription</Link>
          <Link href="/profile">Profile</Link>
          <DashboardBtn />
          <Profile />
        </div>
      </header>
    </Content>
  );
}
