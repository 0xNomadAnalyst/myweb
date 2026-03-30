import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Dashboard } from "@/components/sections/dashboard";
import { Capabilities } from "@/components/sections/capabilities";
import { Outcomes } from "@/components/sections/outcomes";
import { Architecture } from "@/components/sections/architecture";
import { Engagement } from "@/components/sections/engagement";
import { Background } from "@/components/sections/background";
import { Contact } from "@/components/sections/contact";
import { ScrollTopButton } from "@/components/shared/scroll-top-button";

function SectionDivider() {
  return (
    <div
      aria-hidden
      className="mx-auto h-px max-w-[800px] bg-gradient-to-r from-transparent via-border-soft to-transparent"
    />
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-10 pb-10 md:gap-12 md:pb-12">
        <div className="order-1 md:order-none"><Hero /></div>
        <div className="order-3 md:order-none"><Dashboard /></div>
        <div className="hidden md:block"><SectionDivider /></div>
        <div className="order-2 md:order-none"><Capabilities /></div>
        <div className="order-4 md:order-none"><Outcomes /></div>
        <div className="hidden md:block"><SectionDivider /></div>
        <div className="order-7 md:order-none"><Architecture /></div>
        <div className="hidden md:block"><SectionDivider /></div>
        <div className="order-5 md:order-none"><Engagement /></div>
        <div className="hidden md:block"><SectionDivider /></div>
        <div className="order-6 md:order-none"><Background /></div>
        <div className="hidden md:block"><SectionDivider /></div>
        <div className="order-8 md:order-none"><Contact /></div>
      </main>
      <ScrollTopButton />
      <Footer />
    </>
  );
}
