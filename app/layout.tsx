import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import NavBar from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import "./styles/globals.css";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <NavBar />

          <main>{children}</main>

          <Footer />
        </body>
      </html>
    </StoreProvider>
  );
}
