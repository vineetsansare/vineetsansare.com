"use client";

import React, { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import { useTheme } from "next-themes";

export function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const [svg, setSvg] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: resolvedTheme === "dark" ? "dark" : "default",
      fontFamily: "var(--font-sans)",
      securityLevel: "loose",
    });

    const renderChart = async () => {
      try {
        if (!chart) return;
        
        // Generate a unique ID for the mermaid chart
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
        const { svg: renderedSvg } = await mermaid.render(id, chart);
        setSvg(renderedSvg);
        setError(null);
      } catch (err: any) {
        console.error("Mermaid rendering error:", err);
        setError(err.message || "Failed to render mermaid diagram");
      }
    };

    renderChart();
  }, [chart, resolvedTheme]);

  if (error) {
    return (
      <div className="p-4 bg-destructive/10 text-destructive text-sm rounded-md border border-destructive/20 font-mono overflow-auto">
        <div className="font-bold mb-2">Mermaid Syntax Error:</div>
        {error}
        <pre className="mt-4 p-2 bg-background/50 rounded text-xs opacity-70">
          {chart}
        </pre>
      </div>
    );
  }

  if (!svg) {
    return (
      <div className="p-8 text-center text-muted-foreground animate-pulse border border-border rounded-xl">
        Rendering diagram...
      </div>
    );
  }

  return (
    <div className="my-6 w-full flex justify-center bg-card p-4 rounded-xl border border-border">
      <div 
        ref={ref} 
        className="mermaid w-full max-w-full overflow-x-auto flex justify-center" 
        dangerouslySetInnerHTML={{ __html: svg }} 
      />
    </div>
  );
}
