import { headers } from "next/headers"
import Link from "next/link"
import { Button } from "./ui/button"
import { Nav } from "./Nav"

export const Header = () => {
  return (
    <header className="py-8 xl:py12 text-white">
      <div className="container mx-auto">
        <Link href="/">
        <h1 className="text-4xl font-semibold">
          Vincenzo<span className="text-accent">.</span>
        </h1>
        </Link>
        <div className="hidden xl:flex">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>
        </div>
      </header>
  )
}
