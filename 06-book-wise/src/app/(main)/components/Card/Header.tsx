import { Star } from "phosphor-react";
import Avatar from "../Avatar";

export function Header() {
  return (
    <header className="mb-8 flex justify-between">
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
  );
}
