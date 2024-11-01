"use client"
import GloabalMenu from "@/components/GloabalMenu/GloabalMenu";
import "./globals.css";
import styles from "./layout.module.css"

import { SessionProvider } from "next-auth/react";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionProvider>
        <body id={styles.app_body}>
          <GloabalMenu />
          {children}
        </body>
      </SessionProvider>
    </html>
  );
}
