import React from "react";
import { PageHeader } from "antd";

// displays a page header

export default function Header() {
  return (
    <a href="https://github.com/alvaroramiro89" target="_blank" rel="noopener noreferrer">
      <PageHeader
        title="Jarilla DApps"
        subTitle=" ⚽  Que Token, un concepto de juego"
        style={{ cursor: "pointer" }}
      />
    </a>
  );
}
