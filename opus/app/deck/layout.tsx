import "@/styles/deck-print.css";

export const metadata = {
  title: "Capabilities Deck — Roderick McKinley",
};

export default function DeckLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
