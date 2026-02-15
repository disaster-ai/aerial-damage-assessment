import { Button } from "@/components/ui/button";
import MapView from "@/components/MapView";
import { ChatWidget } from "@/components/ui/ChatWidget.tsx";

export default function App() {
  return (
    <div className="flex h-screen flex-col bg-background text-foreground">
      
      {/* Header / Landing Section */}
      <div className="z-10 bg-background/95 backdrop-blur border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <header className="space-y-3">
            <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">
              Aerial Damage Assessment
            </p>

            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Rapid post-disaster insights from aerial imagery.
            </h1>

            <p className="max-w-2xl text-base text-muted-foreground">
              Inspect, quantify, and triage damage with a unified dashboard
              combining satellite imagery and AI damage detection.
            </p>
          </header>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button>Connect Backend</Button>
            <Button variant="outline">Upload Imagery</Button>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="flex-1 relative">
        <MapView />
      </div>

      {/* AI Chatbot Button */}
      <ChatWidget />

    </div>
  );
}
