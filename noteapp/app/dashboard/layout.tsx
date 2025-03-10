import type { Metadata } from "next";
import "../globals.css";
import { TopSection } from "./components/TopSection";
import { NotesContextProvider } from "../context/notesStore";
import { MainDash } from "./components/MainDash";
import { MyProvider } from "../context/store";


export const metadata: Metadata = {
  title: "NoteVault",
  description: "Generated by NoteVault",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body >
        
          <NotesContextProvider>
            <MyProvider>
            <TopSection/>
            <MainDash/>
            {children}
            </MyProvider>
          </NotesContextProvider>
        
        </body>
    </html>
  );
}
