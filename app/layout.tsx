import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { Header } from "./components/Header/Header";

import "./styles/globals.css";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <Header />

          <main>{children}</main>

          <footer></footer>
        </body>
      </html>
    </StoreProvider>
  );
}
