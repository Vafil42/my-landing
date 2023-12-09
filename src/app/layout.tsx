import PageWrapper from "@/components/PageWrapper";
import React from "react";

interface AppLayoutInterface {
  children: React.ReactNode;
}

export default function AppLayout(props: AppLayoutInterface) {
  return (
    <html>
      <body>
        <PageWrapper>{props.children}</PageWrapper>
      </body>
    </html>
  );
}
