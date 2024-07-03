import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen w-screen h-screen bg-[#1C1C1C] flex-col items-center justify-between p-24">

      <div className="absolute top-1/2 -translate-x-1/2  -translate-y-1/2 left-1/2 flex place-items-center flex-col">
        <Image
          src="/max-logo.png"
          alt="Next.js Logo"
          width={1128}
          height={550}
          priority
        />
        <span className="relative flex h-10 w-10 mt-20">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-10 w-10 bg-white"></span>
        </span> 
      </div>
    </main>
  );
}
