import Image from "next/image";
import { Star } from "phosphor-react";

import bookImg from "@/images/books/Book.png";

export default function SmallBookCard() {
  return (
    <div className="flex gap-5 rounded-lg border-2 border-solid border-transparent bg-gray-700 px-5 py-4 hover:border-gray-600">
      <Image src={bookImg} width={64} height={94} alt="" />

      <div className="flex flex-col justify-between">
        <header>
          <h3 className="text-base font-bold text-gray-100">
            A Revolução dos Bichos
          </h3>
          <span className="text-sm leading-6 text-gray-400">George Orwell</span>
        </header>

        <div className="flex items-end gap-1 text-purple-100">
          {/* Put in own component */}
          <Star weight="fill" />
          <Star weight="fill" />
          <Star weight="fill" />
          <Star weight="fill" />
          <Star weight="regular" />
        </div>
      </div>
    </div>
  );
}
