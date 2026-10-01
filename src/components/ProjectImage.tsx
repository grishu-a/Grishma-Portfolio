"use client";

import Image from "next/image";
import { useRef } from "react";

export default function ProjectImage({
  src,
  title,
  position,
  className = "h-44 sm:h-48",
}: {
  src: string;
  title: string;
  position?: string;
  className?: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        className={`group relative block w-full cursor-zoom-in overflow-hidden ${className}`}
        aria-label={`View full image for ${title}`}
      >
        <Image
          src={src}
          alt=""
          fill
          className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
            position === "top" ? "object-top" : ""
          }`}
        />
        <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          View full image
        </span>
      </button>
      <dialog
        ref={dialogRef}
        onClick={() => dialogRef.current?.close()}
        className="m-auto max-h-none max-w-none bg-transparent p-0 backdrop:bg-black/80"
        aria-label={`${title} image`}
      >
        <div className="relative h-[85vh] w-[92vw] cursor-zoom-out">
          <Image src={src} alt={`${title} screenshots`} fill sizes="92vw" className="object-contain" />
        </div>
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          className="fixed right-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-sm font-medium text-black"
          aria-label="Close"
        >
          ✕ Close
        </button>
      </dialog>
    </>
  );
}
