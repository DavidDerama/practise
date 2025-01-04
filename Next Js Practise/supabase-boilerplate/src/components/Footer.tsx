import Content from "./Content";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <Content>
        <div className="flex justify-between">
          <div>
            <h2>TEST</h2>
          </div>
          <div>
            <ul>
              <li>Links</li>
              <li>Links</li>
              <li>Links</li>
            </ul>
          </div>
        </div>
      </Content>
    </footer>
  );
}
