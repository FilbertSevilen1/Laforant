import "./globals.css";

export const metadata = {
  title: "LaForant - 10 Vs 10 FPS Tactical Multiplayer Game",
  description: "A 10 versus 10 first person tactical shooter. Experience active squad-based battlefields, elite agents, and radioactive conflict zones.",
  keywords: ["LaForant", "FPS Game", "Multiplayer Shooter", "Tactical FPS", "Agents", "Dota 2 Hero Select"],
  authors: [{ name: "HCI Group" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
