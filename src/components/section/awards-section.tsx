/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { Timeline, TimelineItem, TimelineConnectItem } from "@/components/timeline";
import { Trophy } from "lucide-react";

export default function AwardsSection() {
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
    </section>
  );
}
