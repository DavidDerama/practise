import React from "react";
import Content from "./Content";

export default function Header() {
  return (
    <header className=" text-white bg-center bg-no-repeat backdrop-filter backdrop-blur-sm bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover min-h-[300px]">
      <div className="absolute inset-0 backdrop-filter backdrop-blur-sm bg-black/30 w-screen h-full"></div>
      <Content className="flex min-h-[300px] items-center relative z-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold">PollyGlot</h1>
          <p>Perfect Translation Every Time</p>
        </div>
      </Content>
    </header>
  );
}
