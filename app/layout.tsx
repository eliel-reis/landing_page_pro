import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "Sites profissionais para pequenos negócios",
  description:
    "Criação de sites profissionais com entrega em até 48h e foco em gerar contatos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
