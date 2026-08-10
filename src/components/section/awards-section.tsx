/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { Timeline, TimelineItem, TimelineConnectItem } from "@/components/timeline";
import { Trophy, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function AwardsSection() {
  const [selectedGallery, setSelectedGallery] = useState<{ images: any[], index: number } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedGallery) return;
      if (e.key === "Escape") {
        setSelectedGallery(null);
      } else if (e.key === "ArrowLeft") {
        setSelectedGallery(prev => prev ? { ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length } : null);
      } else if (e.key === "ArrowRight") {
        setSelectedGallery(prev => prev ? { ...prev, index: (prev.index + 1) % prev.images.length } : null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedGallery]);

  if (!DATA.awards) return null;

  return (
    <section id="awards" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">Awards</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Recognitions</h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              Awards and milestones achieved throughout my career.
            </p>
          </div>
        </div>
        <Timeline>
          {DATA.awards.map((award) => (
            <TimelineItem key={award.title + award.dates} className="w-full flex items-start justify-between gap-10">
              <TimelineConnectItem className="flex items-start justify-center">
                {award.image ? (
                  <img
                    src={award.image}
                    alt={award.title}
                    className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border object-contain flex-none"
                  />
                ) : (
                  <div className="size-10 bg-card text-muted-foreground flex items-center justify-center z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border flex-none">
                    <Trophy className="size-5" />
                  </div>
                )}
              </TimelineConnectItem>
              <div className="flex flex-1 flex-col justify-start gap-2 min-w-0">
                {award.dates && (
                  <time className="text-xs text-muted-foreground">{award.dates}</time>
                )}
                {award.title && (
                  <h3 className="font-semibold leading-none">{award.title}</h3>
                )}
                {award.location && (
                  <p className="text-sm text-muted-foreground">{award.location}</p>
                )}
                {award.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed wrap-break-word">
                    {award.description}
                  </p>
                )}
                
                {/* Photo Gallery Carousel */}
                {/* @ts-ignore - resume.tsx has custom fields */}
                {award.images && award.images.length > 0 && (
                  <div className="relative mt-4 w-full group">
                    <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
                    
                    <div className="flex w-full overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                      {/* @ts-ignore */}
                      {award.images.map((img: any, idx: number) => (
                        <div 
                          key={idx} 
                          className="relative flex-none w-[85vw] sm:w-[280px] md:w-[320px] aspect-[16/10] snap-center sm:snap-start overflow-hidden rounded-xl border border-border shadow-sm bg-muted cursor-pointer transition-transform duration-300 hover:shadow-md"
                          onClick={() => setSelectedGallery({ images: award.images as any[], index: idx })}
                        >
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {((award as any).links && (award as any).links.length > 0) && (
                  <div className="mt-1 flex flex-row flex-wrap items-start gap-2">
                    {(award as any).links.map((link: any, idx: number) => (
                      <Link
                        href={link.href}
                        key={idx}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Badge className="flex items-center gap-1.5 text-xs bg-primary text-primary-foreground">
                          {/* @ts-ignore */}
                          {link.icon}
                          {link.title}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </TimelineItem>
          ))}
        </Timeline>
      </div>

      {/* Lightbox Modal */}
      {selectedGallery && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-md p-4 md:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedGallery(null)}
        >
          <div 
            className="relative w-full max-w-7xl h-full max-h-[90vh] rounded-lg overflow-hidden flex items-center justify-center group"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 z-[110] p-2 bg-black/40 hover:bg-black/80 text-white rounded-full transition-colors backdrop-blur-sm"
              onClick={() => setSelectedGallery(null)}
            >
              <X className="size-6" />
            </button>

            {/* Left Chevron - hide if only 1 image */}
            {selectedGallery.images.length > 1 && (
              <button 
                className="absolute left-4 z-[110] p-3 bg-black/40 hover:bg-black/80 text-white rounded-full transition-colors backdrop-blur-sm hidden sm:flex"
                onClick={() => setSelectedGallery(prev => prev ? { ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length } : null)}
              >
                <ChevronLeft className="size-6" />
              </button>
            )}

            {/* Right Chevron - hide if only 1 image */}
            {selectedGallery.images.length > 1 && (
              <button 
                className="absolute right-4 z-[110] p-3 bg-black/40 hover:bg-black/80 text-white rounded-full transition-colors backdrop-blur-sm hidden sm:flex"
                onClick={() => setSelectedGallery(prev => prev ? { ...prev, index: (prev.index + 1) % prev.images.length } : null)}
              >
                <ChevronRight className="size-6" />
              </button>
            )}

            {/* Image Container */}
            <div className="relative w-full h-full flex items-center justify-center">
              <img 
                src={selectedGallery.images[selectedGallery.index].src} 
                alt={selectedGallery.images[selectedGallery.index].alt || "Gallery Image"} 
                className="max-w-full max-h-full object-contain select-none shadow-2xl drop-shadow-2xl rounded-sm"
              />
            </div>
            
            {/* Counter */}
            {selectedGallery.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[110] px-4 py-2 bg-black/50 backdrop-blur-sm text-white/90 text-sm font-medium rounded-full pointer-events-none">
                {selectedGallery.index + 1} / {selectedGallery.images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
