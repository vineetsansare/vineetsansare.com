"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { FileText, User, Github, Linkedin, Mail, Twitter, Calendar, Trophy, Mic } from "lucide-react";
import { DATA } from "@/data/resume";
import { toast } from "sonner";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <Command
          className="w-full max-w-lg rounded-xl border bg-card text-card-foreground shadow-2xl overflow-hidden"
          loop
          shouldFilter={true}
        >
          <div className="flex items-center border-b px-3">
            <Command.Input
              className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 border-none focus:ring-0"
              placeholder="Type a command or search..."
              autoFocus
            />
          </div>
          <Command.List className="max-h-[300px] overflow-y-auto p-2">
            <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
              No results found.
            </Command.Empty>
            <Command.Group heading="Navigation" className="px-2 text-xs font-medium text-muted-foreground">
              <Command.Item
                onSelect={() => runCommand(() => router.push("/"))}
                className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 mt-1"
              >
                <User className="mr-2 h-4 w-4" />
                <span>Home</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => router.push("/resume"))}
                className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground mt-1"
              >
                <FileText className="mr-2 h-4 w-4" />
                <span>Resume Preview</span>
              </Command.Item>
            </Command.Group>
            
            <Command.Group heading="Socials" className="px-2 text-xs font-medium text-muted-foreground mt-4">
              <Command.Item
                onSelect={() => runCommand(() => window.open(DATA.contact.social.GitHub.url, "_blank"))}
                className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground mt-1"
              >
                <Github className="mr-2 h-4 w-4" />
                <span>GitHub</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => window.open(DATA.contact.social.LinkedIn.url, "_blank"))}
                className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground mt-1"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                <span>LinkedIn</span>
              </Command.Item>
            </Command.Group>

            <Command.Group heading="Quick Actions" className="px-2 text-xs font-medium text-muted-foreground mt-4">
              <Command.Item
                onSelect={() => runCommand(() => {
                  navigator.clipboard.writeText(DATA.contact.email);
                  toast.success("Email copied to clipboard!");
                })}
                className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground mt-1"
              >
                <Mail className="mr-2 h-4 w-4" />
                <span>Copy Email</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => {
                  navigator.clipboard.writeText(DATA.contact.social.LinkedIn.url);
                  toast.success("LinkedIn URL copied to clipboard!");
                })}
                className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground mt-1"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                <span>Copy LinkedIn URL</span>
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
}
