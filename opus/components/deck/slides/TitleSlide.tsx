import { Slide } from "@/components/deck/Slide";

export function TitleSlide() {
  return (
    <Slide className="items-center justify-center text-center">
      <h1 className="text-6xl font-medium leading-tight tracking-tight">
        Operational Intelligence for
        <br />
        Onchain Financial Systems
      </h1>
      <p className="mt-8 max-w-[1100px] text-2xl leading-relaxed text-muted-foreground">
        Analytical infrastructure, real-time monitoring, and risk modelling for
        teams operating complex digital-asset environments.
      </p>
      <hr className="my-10 w-[400px] border-muted-foreground/20" />
      <p className="text-lg text-muted-foreground/50">
        Roderick McKinley, CFA, FRM
      </p>
      <p className="mt-1 text-base text-muted-foreground/40">
        Independent Financial Systems Analyst
      </p>
    </Slide>
  );
}
