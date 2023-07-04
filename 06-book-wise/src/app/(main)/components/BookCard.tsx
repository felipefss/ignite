import Image from "next/image";

import bookImg from "@/images/books/Book.png";
import { Star } from "phosphor-react";
import Avatar from "./Avatar";

export default function BookCard() {
  return (
    <article className="h-72 overflow-y-hidden rounded-lg border border-solid border-transparent bg-gray-700 p-6 hover:border-2 hover:border-gray-500">
      <header className="flex justify-between">
        <div className="flex items-center gap-4">
          <Avatar size={40} />

          <div>
            <h1 className="text-base font-normal text-gray-100">Jaxson Dias</h1>
            <time
              className="text-sm leading-6 text-gray-400"
              dateTime="2023-06-19 12:00"
            >
              Hoje
            </time>
          </div>
        </div>

        <div className="flex gap-1 text-purple-100">
          {/* Put in own component */}
          <Star weight="fill" />
          <Star weight="fill" />
          <Star weight="fill" />
          <Star weight="fill" />
          <Star weight="regular" />
        </div>
      </header>

      <div className="mt-8 flex gap-5">
        <Image className="h-[152px] w-[108px] rounded" src={bookImg} alt="" />

        <section>
          <header className="mb-5">
            <h2 className="text-base font-bold text-gray-100">O hobbit</h2>
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
        </section>
      </div>
    </article>
  );
}
