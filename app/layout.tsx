import type { Metadata } from "next";

import Provider from "@/components/Provider";
import { Grid } from "@chakra-ui/react";
import Sidebar from "@/components/Sidebar";
export const metadata: Metadata = {
  title: {
    default: "Inventory Management",
    template: `%s - welcome`,
  },
  description: "Created using Nextjs and chakra ui",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <Grid
            h="100vh"
            fontSize={"md"}
            templateColumns="repeat(2, 1fr, 2fr)"
            gap={4}
          >
            Welcome
            <Sidebar />
            {children}
          </Grid>
        </Provider>
      </body>
    </html>
  );
}
