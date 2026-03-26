import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Dra. Suzana Aparecida Silveira | Infectologia e Gestão em Saúde",
  description:
    "Landing page de infectologia com atuação em gestão em saúde, docência médica, acreditação e agendamento de consultas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-canvas text-ink">
        {children}
      </body>
    </html>
  );
}
