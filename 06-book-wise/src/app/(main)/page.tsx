"use client";

import { CaretRight, ChartLineUp, Star } from "phosphor-react";
import Link from "next/link";

import * as Card from "./components/Card";
import BookCard from "./components/BookCard";
import SmallBookCard from "./components/SmallBookCard";
import bookImg from "@/images/books/Book.png";

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
          <div className="grid gap-3">
            <Card.Root>
              <div className="h-72 overflow-y-hidden rounded-lg border-2 border-solid border-transparent bg-gray-700 p-6 hover:border-2 hover:border-gray-500">
                <Card.Header />
                <Card.Body
                  imageUrl={bookImg}
                  imageHeight={152}
                  imageWidth={108}
                >
                  <header>
                    <h2 className="text-base font-bold text-gray-100">
                      O hobbit
                    </h2>
                    <span className="text-sm leading-6 text-gray-400">
                      J.R.R. Tolkien
                    </span>
                  </header>

                  <p className="text-sm font-normal leading-6 text-gray-300">
                    {`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi deleniti maxime ab quos iste rerum eligendi
            ipsam molestias harum sint, id cum repellendus soluta expedita. Praesentium vero nisi dolores consectetur.
            Nobis, nesciunt cumque autem tenetur corporis natus, quasi aliquid laudantium esse blanditiis eos quo
            repellat nulla in doloribus obcaecati, eveniet tempore sint voluptatem iste ipsum nostrum rem earum! Ad,
            labore? Sed, porro dolores quas id esse dignissimos molestias pariatur eveniet possimus enim qui culpa
            similique. Deleniti accusantium enim repellat ex esse nemo sequi perspiciatis doloremque, maiores, quidem,
            corrupti magnam ratione. Reiciendis eum veritatis rem nesciunt fugiat, eaque cum? Obcaecati dolorem tenetur
            vero ipsam necessitatibus accusantium delectus architecto provident in ad qui dicta odio, deserunt quos
            fugit, sapiente quia molestiae esse.`
                      .slice(0, 230)
                      .trim()}
                    <span>... </span>

                    <button
                      className="cursor-pointer font-bold text-purple-100 hover:opacity-80"
                      type="button"
                    >
                      ver mais
                    </button>
                  </p>
                </Card.Body>
              </div>
            </Card.Root>
            <BookCard />
            <BookCard />
            <BookCard />
          </div>
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

          <div className="grid gap-3">
            <Card.Root>
              <div className="rounded-lg border-2 border-solid border-transparent bg-gray-700 px-5 py-4 hover:border-gray-600">
                <Card.Body imageUrl={bookImg} imageHeight={94} imageWidth={64}>
                  <header>
                    <h3 className="text-base font-bold text-gray-100">
                      A Revolução dos Bichos
                    </h3>
                    <span className="text-sm leading-6 text-gray-400">
                      George Orwell
                    </span>
                  </header>

                  <div className="flex items-end gap-1 text-purple-100">
                    {/* Put in own component */}
                    <Star weight="fill" />
                    <Star weight="fill" />
                    <Star weight="fill" />
                    <Star weight="fill" />
                    <Star weight="regular" />
                  </div>
                </Card.Body>
              </div>
            </Card.Root>
            <SmallBookCard />
            <SmallBookCard />
            <SmallBookCard />
            <SmallBookCard />
          </div>
        </aside>
      </main>
    </div>
  );
}
