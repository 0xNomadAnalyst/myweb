import { HeroSection, DashboardSection } from "@/components/sections/HeroDashboard";
import { CapabilitiesSection, ArchitectureSection } from "@/components/sections/CapabilitiesArchitecture";
import { EngagementSection, BackgroundSection, ContactSection } from "@/components/sections/EngagementBackgroundContact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30">
      <HeroSection />
      <DashboardSection />
      <CapabilitiesSection />
      <ArchitectureSection />
      <EngagementSection />
      <BackgroundSection />
      <ContactSection />
      
      <footer className="border-t border-border/40 py-8">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl flex justify-between items-center text-sm text-muted-foreground">
          <div>&copy; {new Date().getFullYear()} Data Infrastructure Consulting.</div>
          <div>Strictly technical.</div>
        </div>
      </footer>
    </main>
  );
}
