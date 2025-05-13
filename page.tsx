import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      <header className="flex items-center justify-between p-6">
        <div className="flex space-x-2">
          <div className="h-2 w-2 rounded-full bg-black"></div>
          <div className="h-2 w-2 rounded-full bg-black"></div>
        </div>
        <div className="flex items-center space-x-6">
          <button className="text-sm">EN</button>
          <Link href="/contact" className="text-sm hover:underline">
            CONTACT US
          </Link>
          <button className="flex flex-col space-y-1">
            <span className="h-0.5 w-6 bg-black"></span>
            <span className="h-0.5 w-6 bg-black"></span>
          </button>
        </div>
      </header>

      <main className="relative px-6 pt-12">
        {/* Gradient blob */}
        <div
          className="absolute right-0 top-0 h-[300px] w-[300px] animate-pulse rounded-full bg-gradient-to-br from-blue-400 via-purple-300 to-indigo-200 opacity-70 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative">
          <h1 className="max-w-3xl text-6xl font-light leading-tight tracking-tight">
            EMPOWERING THE WORLD
            <br />
            WITH AI
            <br />
            FOR EVERYONE.
          </h1>

          <div className="mt-24 flex justify-between">
            <div className="max-w-md">
              <Button variant="outline" className="rounded-full border-2 px-8">
                <span className="relative">
                  EXPLORE TRILLION-7B
                  <div className="absolute -left-4 -right-4 -top-4 -bottom-4 animate-spin-slow rounded-full border border-black opacity-50"></div>
                </span>
              </Button>
              <p className="mt-8 text-sm leading-relaxed text-gray-600">
                BUILDING THE MOST POWERFUL
                <br />
                FOUNDATION MODEL IN KOREA.
              </p>
            </div>

            <div className="flex items-end">
              <div className="flex items-center space-x-2">
                <span className="text-sm">WHO WE ARE</span>
                <span className="h-px w-12 bg-black"></span>
              </div>
            </div>
          </div>

          <div className="mt-24 max-w-2xl space-y-6 text-sm leading-relaxed text-gray-600">
            <p>
              We're a small and agile team with the mission to empower the Rest of the World with AI — the most rapid & transformative tech in history. To accomplish this audacious goal, we're building a world-class multi-disciplinary group of laser-focused and motivated individuals that are eager to make a dent in the world.
            </p>
            <p>
              Our first step is building the most powerful Foundation Model (LLM) in Korea. We are strongly supported by leading VCs in Korea and US including Strong Ventures, Kakao Ventures, and Bass Investment.
            </p>
            <p>
              Introducing Trillion-7B-preview: A 7-billion-parameter large language model built to advance multilingual AI scalability and performance. With state-of-the-art results and significantly lower computational footprint, it's designed for efficiency, accuracy, and adaptability.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
