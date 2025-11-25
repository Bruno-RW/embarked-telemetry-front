import type { Metadata } from "next";

import { baseFont } from "@shared/lib/fonts/inter";
import ContextProvider from "@shared/providers/ContextProvider";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Telemetria Embarcada",
  description: "Monitoramento de dados de telemetria.",
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body suppressHydrationWarning={true} className={baseFont.className}>
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
