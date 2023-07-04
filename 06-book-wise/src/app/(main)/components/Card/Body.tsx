import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  imageUrl: string | StaticImageData;
  imageWidth: number;
  imageHeight: number;
  alt?: string;
}

export function Body({
  children,
  imageUrl,
  imageWidth,
  imageHeight,
  alt,
}: Props) {
  return (
    <div className="flex gap-5">
      <Image
        className="rounded"
        src={imageUrl}
        width={imageWidth}
        height={imageHeight}
        alt={alt ?? ""}
      />

      <div className="flex flex-col justify-between">{children}</div>
    </div>
  );
}
