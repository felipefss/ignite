import { ReactNode } from "react";

export default function BookList({ children }: { children: ReactNode }) {
  return <div className="grid gap-3">{children}</div>;
}
