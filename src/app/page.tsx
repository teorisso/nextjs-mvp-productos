import React from "react";

function Welcome({ text }: { text: string }) {
  return (
    <h1 className="text-3xl">{text}</h1>
  )
}

export default function Home() {
  return (
      <main className="flex flex-col w-full items-center justify-center">
        <h1 className="text-4xl ">HOME PAGE</h1>
      </main>
  );
}
