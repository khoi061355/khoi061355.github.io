import { useRef, useState } from "react";
import { Dialog, Portal } from "@chakra-ui/react";
import { gallery, sectionContent } from "../data/portfolio";
import type { GalleryItem, GalleryPage } from "../types/portfolio";
import SectionShell from "./shared/SectionShell";

function EvidenceImage({
  item,
  src,
  detail = false,
}: {
  item: Pick<GalleryItem, "rotation" | "aspectRatio" | "alt">;
  src: string;
  detail?: boolean;
}) {
  const rotation = item.rotation ?? 0;
  const sideways = Math.abs(rotation) === 90;
  const ratio = item.aspectRatio ?? 0.75;
  const displayRatio = sideways ? 1 / ratio : ratio;
  return (
    <div
      className={`evidence-image ${detail ? "evidence-detail-image" : ""}`}
      style={{
        aspectRatio: displayRatio,
        maxWidth: detail ? undefined : `${displayRatio * 200}px`,
      }}
    >
      <img
        src={src}
        alt={item.alt}
        loading={detail ? "eager" : "lazy"}
        decoding="async"
        style={{
          width: sideways ? `${ratio * 100}%` : "100%",
          transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
        }}
      />
    </div>
  );
}

export default function Gallery() {
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const [zoomed, setZoomed] = useState(false);
  const opener = useRef<HTMLButtonElement | null>(null);
  const closeButton = useRef<HTMLButtonElement | null>(null);
  const pages: GalleryPage[] = selected
    ? (selected.pages ??
      [selected.src, ...(selected.additionalPages ?? [])].map((src) => ({
        src,
        alt: selected.alt,
        aspectRatio: selected.aspectRatio ?? 0.75,
        rotation: selected.rotation,
        caption: "Original supporting document",
      })))
    : [];
  const copy = sectionContent.gallery;
  return (
    <SectionShell
      id="gallery"
      eyebrow={copy.eyebrow}
      title={copy.title}
      intro={copy.description}
    >
      <div className="evidence-grid">
        {gallery.map((item) => (
          <article className="evidence-card" key={item.id}>
            <button
              type="button"
              className="evidence-open"
              data-testid={`gallery-card-${item.id}`}
              aria-label={`Open ${item.title} supporting evidence`}
              onClick={(event) => {
                opener.current = event.currentTarget;
                setZoomed(false);
                setSelected(item);
              }}
            >
              <div className="evidence-thumbnail">
                <EvidenceImage item={item} src={item.src} />
                <span className="evidence-open-hint">View evidence ↗</span>
              </div>
              <div className="evidence-card-heading">
                <span>{item.year}</span>
                <h3>{item.title}</h3>
              </div>
            </button>
            <p className="evidence-issuer">{item.issuer}</p>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
      <Dialog.Root
        open={selected !== null}
        onOpenChange={({ open }) => {
          if (!open) setSelected(null);
        }}
        initialFocusEl={() => closeButton.current}
        finalFocusEl={() => opener.current}
        lazyMount
        unmountOnExit
      >
        <Portal>
          <Dialog.Backdrop className="evidence-backdrop" />
          <Dialog.Positioner className="evidence-positioner">
            <Dialog.Content
              maxW="1050px"
              w="100%"
              borderRadius="0"
              className="evidence-dialog"
              data-testid="evidence-dialog"
            >
              <header className="evidence-dialog-header">
                <div>
                  <Dialog.Title className="evidence-dialog-title">
                    {selected?.title}
                  </Dialog.Title>
                  <Dialog.Description>
                    {selected?.issuer} · {selected?.year}
                  </Dialog.Description>
                </div>
                <div className="evidence-dialog-controls">
                  <button
                    type="button"
                    className="action"
                    onClick={() => setZoomed(!zoomed)}
                    aria-pressed={zoomed}
                    data-testid="evidence-zoom-toggle"
                  >
                    {zoomed ? "Fit to view" : "Larger view"}
                  </button>
                  <Dialog.CloseTrigger asChild position="static">
                    <button
                      type="button"
                      ref={closeButton}
                      className="action"
                      aria-label="Close supporting document"
                      data-testid="evidence-close"
                    >
                      Close <span aria-hidden="true">×</span>
                    </button>
                  </Dialog.CloseTrigger>
                </div>
              </header>
              <div className="evidence-dialog-body">
                <p>{selected?.description}</p>
                <div
                  className={`evidence-pages ${zoomed ? "evidence-pages-zoomed" : ""}`}
                >
                  {pages.map((page, index) => (
                    <figure className="evidence-page" key={page.src}>
                      <EvidenceImage item={page} src={page.src} detail />
                      <figcaption>
                        {page.caption ?? "Supporting evidence"}
                        {pages.length > 1
                          ? ` · ${index + 1} of ${pages.length}`
                          : ""}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </SectionShell>
  );
}
