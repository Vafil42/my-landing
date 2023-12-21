import PageWrapper from "@/components/PageWrapper";
import { Metadata } from "next";
import React from "react";

interface AppLayoutInterface {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Kozenkov landing",
  description: "Welcome to my landing",
};

export default function AppLayout(props: AppLayoutInterface) {
  return (
    <html>
      <body>
        <PageWrapper>{props.children}</PageWrapper>
      </body>
    </html>
  );
}
