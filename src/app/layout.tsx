import PageWrapper from "@/components/PageWrapper"
import { bodyStyles } from "@/views/AppView/style.css"
import React from "react"

interface AppLayoutInterface {
  children: React.ReactNode,
}

export default function AppLayout(props: AppLayoutInterface) {
  return <html><body className={bodyStyles}><PageWrapper>{props.children}</PageWrapper></body></html>
}
