"use client";

import React from "react";
import Link from "next/link";

import "./HyperLink.css"

const HyperLink = ({ href, className, style, children }) => {
  return (
    <Link href={href} className={`btn-hyperlink ${className}`} style={style}>
      {children}
    </Link>
  );
};

export default HyperLink;
