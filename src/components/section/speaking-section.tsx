/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { Timeline, TimelineItem, TimelineConnectItem } from "@/components/timeline";
import { Mic } from "lucide-react";

export default function SpeakingSection() {
  if (!DATA.speaking) return null;
  return (
    <section id="speaking" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">Speaking</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Conferences & Talks</h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              I frequently speak at internal all-hands, workshops, and tech conferences on AI, architecture, and engineering excellence.
            </p>
          </div>
        </div>
        <Timeline>
          {DATA.speaking.map((talk) => (
            <TimelineItem key={talk.title + talk.dates} className="w-full flex items-start justify-between gap-10">
              <TimelineConnectItem className="flex items-start justify-center">
                {talk.image ? (
                  <img
                    src={talk.image}
                    alt={talk.title}
                    className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border object-contain flex-none"
                  />
                ) : (
                  <div className="size-10 bg-card text-muted-foreground flex items-center justify-center z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border flex-none">
                    <Mic className="size-5" />
                  </div>
                )}
              </TimelineConnectItem>
              <div className="flex flex-1 flex-col justify-start gap-2 min-w-0">
                {talk.dates && (
                  <time className="text-xs text-muted-foreground">{talk.dates}</time>
                )}
                {talk.title && (
                  <h3 className="font-semibold leading-none">{talk.title}</h3>
                )}
                {talk.location && (
                  <p className="text-sm text-muted-foreground">{talk.location}</p>
                )}
                {talk.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed wrap-break-word">
                    {talk.description}
                  </p>
                )}
                {((talk as any).links && (talk as any).links.length > 0) && (
                  <div className="mt-1 flex flex-row flex-wrap items-start gap-2">
                    {(talk as any).links.map((link: any, idx: number) => (
                      <Link
                        href={link.href}
                        key={idx}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Badge className="flex items-center gap-1.5 text-xs bg-primary text-primary-foreground">
                          {/* @ts-ignore - Assuming link has an icon property like hackathons */}
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
    </section>
  );
}
