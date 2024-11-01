"use client";
import Head from "next/head";
import styles from "./layout.module.css";

import { SessionProvider } from "next-auth/react";

export default function LoginLayout({ children }) {
    
  return (
    <html lang="en">
      <SessionProvider>
        <body id={styles.login_body}>
          <style>
            {`
              * {
                margin: 0;
                padding: 0;
                font-size: 62.5%;
                box-sizing: border-box;
                font-family: Poppins, "sans-serif";
              }
            `}
          </style>
          {children}
        </body>
      </SessionProvider>
    </html>
  );
}
