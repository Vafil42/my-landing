import PageWrapper from "@/components/PageWrapper"
import React from "react"

interface AppLayoutInterface {
  children: React.ReactNode,
}

export default function AppLayout(props: AppLayoutInterface) {
  return <PageWrapper>{props.children}</PageWrapper>
}
