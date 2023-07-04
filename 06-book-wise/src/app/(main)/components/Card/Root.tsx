import { ReactNode } from "react";

export function Root({ children }: { children: ReactNode }) {
  return <article>{children}</article>;
}
