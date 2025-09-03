import { useState } from "react";
import { ReactTyped } from "react-typed";

export default function TypedHero() {
  const [showQuote, setShowQuote] = useState(false);

  return (
    <div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        <ReactTyped
          strings={["Jefferson Vivas"]}
          typeSpeed={60}
          backSpeed={40}
          showCursor={false}
          onComplete={() => setShowQuote(true)}
        />
      </h2>

      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-2">
        <ReactTyped
          strings={["FullStack Developer"]}
          typeSpeed={70}
          backSpeed={40}
          startDelay={1500}
          showCursor={true}
        />
      </h1>
    </div>
  );
}
