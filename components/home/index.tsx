import About from "./about";
import Books from "./books";
import Contact from "./contact";
import Hero from "./hero";
import Investments from "./investments";
import People from "./people";
import Values from "./values";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <div className="absolute left-2/4 -translate-x-2/4 w-main max-w-main h-[1px] bg-divider-dark-gradient opacity-20" />
      <Values />
      <People />
      <div className="absolute left-2/4 -translate-x-2/4 w-main max-w-main h-[1px] bg-divider-light-gradient" />
      <Investments />
      <Books />
      <div className="absolute left-2/4 -translate-x-2/4 w-main max-w-main h-[1px] bg-divider-gradient" />
      <Contact />
    </main>
  )
}
