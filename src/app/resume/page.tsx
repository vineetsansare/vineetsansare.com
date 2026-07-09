import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { Download, FileText } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function ResumePage() {
  return (
    <main className="min-h-dvh flex flex-col gap-8 relative pb-20">
      <section id="resume-header">
        <div className="flex flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Resume</h1>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance">
              Preview or download my latest resume below.
            </p>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 3} className="flex gap-4 mt-2">
            <Link
              href="/resume/Vineet_Sansare_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 gap-2"
            >
              <Download className="size-4" />
              Download PDF
            </Link>
          </BlurFade>
        </div>
      </section>
      <section id="resume-preview">
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="w-full aspect-[1/1.4] border bg-muted/20 rounded-xl overflow-hidden flex flex-col items-center justify-center text-muted-foreground p-8 text-center ring-2 ring-border/20 shadow-sm relative">
            <div className="absolute inset-0 flex items-center justify-center flex-col gap-4">
              <FileText className="size-16 opacity-20" />
              <p>Resume PDF Preview</p>
              <p className="text-sm">Please place your actual PDF at <code className="bg-muted px-1 rounded">public/resume/Vineet_Sansare_Resume.pdf</code></p>
            </div>
            {/* In a real scenario, you could use an iframe or react-pdf here if the PDF existed. */}
            <iframe src="/resume/Vineet_Sansare_Resume.pdf" className="w-full h-full z-10" />
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
