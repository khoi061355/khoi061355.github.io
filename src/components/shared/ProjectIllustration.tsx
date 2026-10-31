import { useEffect, useRef, useState } from "react";
import microbiology from "../../assets/illustrations/microbiology-workflow.svg?raw";
import water from "../../assets/illustrations/water-quality.svg?raw";
import football from "../../assets/illustrations/football-modelling.svg?raw";
import responsibleAi from "../../assets/illustrations/responsible-ai.svg?raw";
import venture from "../../assets/illustrations/venture-practice.svg?raw";

// Only trusted, repository-owned SVG artwork is inlined; evidence uploads never enter this path.
const artwork: Record<string, string> = {
  microbiology,
  "water-quality": water,
  "football-modelling": football,
  "responsible-ai": responsibleAi,
  thehoophub: venture,
};

export default function ProjectIllustration({
  id,
  title,
  alt,
  fallback,
}: {
  id: string;
  title: string;
  alt: string;
  fallback: string;
}) {
  const root = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(true);
  const [tabVisible, setTabVisible] = useState(
    () => typeof document === "undefined" || !document.hidden,
  );
  useEffect(() => {
    const node = root.current;
    const observer =
      node && typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver(
            (entries) =>
              setInView(entries.some((entry) => entry.isIntersecting)),
            { rootMargin: "120px" },
          )
        : null;
    if (node) observer?.observe(node);
    const syncVisibility = () => setTabVisible(!document.hidden);
    document.addEventListener("visibilitychange", syncVisibility);
    return () => {
      observer?.disconnect();
      document.removeEventListener("visibilitychange", syncVisibility);
    };
  }, []);
  const source = artwork[id];
  if (!source)
    return (
      <img src={fallback} alt={alt} width="720" height="600" loading="lazy" />
    );
  const markup = source
    .replace(
      /\bid="([^"]+)"/g,
      (_, name: string) => `id="project-${id}-${name}"`,
    )
    .replace(
      /url\(#([^)]+)\)/g,
      (_, name: string) => `url(#project-${id}-${name})`,
    )
    .replace("<svg ", '<svg aria-hidden="true" focusable="false" ');
  return (
    <div
      ref={root}
      className="project-art"
      data-playback={paused || !inView || !tabVisible ? "paused" : "playing"}
      data-testid={`illustration-${id}`}
    >
      <div
        className="project-art-graphic"
        role="img"
        aria-label={alt}
        dangerouslySetInnerHTML={{ __html: markup }}
      />
      <div className="project-art-controls">
        <button
          type="button"
          className="figure-motion-toggle"
          data-testid={`illustration-${id}-toggle`}
          aria-label={`${paused ? "Resume" : "Pause"} illustration: ${title}`}
          aria-pressed={paused}
          onClick={() => setPaused((value) => !value)}
        >
          {paused ? "Resume motion" : "Pause motion"}
        </button>
      </div>
    </div>
  );
}
