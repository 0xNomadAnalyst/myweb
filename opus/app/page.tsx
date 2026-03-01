import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Dashboard } from "@/components/sections/dashboard";
import { Capabilities } from "@/components/sections/capabilities";
import { Architecture } from "@/components/sections/architecture";
import { Engagement } from "@/components/sections/engagement";
import { Background } from "@/components/sections/background";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-14 pb-14">
        <Hero />
        <Dashboard />
        <Capabilities />
        <Architecture />
        <Engagement />
        <Background />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
