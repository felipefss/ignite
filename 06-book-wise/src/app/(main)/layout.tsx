import { ReactNode } from "react";
import NavBar from "./components/NavBar";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <NavBar />
      {children}
    </div>
  );
}
