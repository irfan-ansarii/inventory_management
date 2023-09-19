"use client";
import * as React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/config/theme";

export default function Provider({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
