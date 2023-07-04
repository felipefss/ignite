"use client";

import { CaretRight, ChartLineUp } from "phosphor-react";
import BookList from "./components/BookList";
import BookCard from "./components/BookCard";
import SmallBookCard from "./components/SmallBookCard";
import Link from "next/link";

export default function Home() {
  return (
    <div className="ml-auto mr-auto mt-16">
      <header className="flex gap-3">
        <ChartLineUp className="text-green-100" />{" "}
        <span className="text-2xl font-bold leading-6 text-gray-100">
          Inicio
        </span>
      </header>

      <main className="mt-10 flex gap-16">
        <section className="flex w-[608px] flex-col gap-4">
          Avaliações mais recentes
          <BookList>
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
          </BookList>
        </section>

        <aside className="flex w-80 flex-col gap-4">
          <div className="flex items-center justify-between">
            <span>Livros populares</span>
            <Link
              className="flex cursor-pointer items-center gap-2 px-2 py-1 text-sm font-bold leading-6 text-purple-100 hover:rounded hover:bg-purple-100/5"
              href="#"
            >
              Ver todos <CaretRight />
            </Link>
          </div>

          <BookList>
            <SmallBookCard />
            <SmallBookCard />
            <SmallBookCard />
            <SmallBookCard />
          </BookList>
        </aside>
      </main>
    </div>
  );
}
