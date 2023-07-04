"use client";

import * as AvatarImg from "@radix-ui/react-avatar";

interface Props {
  size: number;
}

export default function Avatar({ size }: Props) {
  return (
    <AvatarImg.Root className="flex max-w-[42px] items-center justify-center rounded-full bg-gradient-to-b from-green-150 to-purple-150 p-[1px]">
      <AvatarImg.Image
        className="rounded-full"
        src="https://github.com/felipefss.png"
        alt="Felipe Santos"
        width={size}
      />
      <AvatarImg.Fallback className="flex h-8 w-8 max-w-[42px] items-center justify-center rounded-full">
        FS
      </AvatarImg.Fallback>
    </AvatarImg.Root>
  );
}
