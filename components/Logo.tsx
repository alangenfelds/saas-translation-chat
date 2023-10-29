import React from "react";
import Image from "next/image";
import Link from "next/link";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import LogoImage from "@logos/reshot-icon-chat-bubbles.svg";

const Logo = () => {
  return (
    <Link href="/" prefetch={false} className="overflow-hidden">
      <div className="flex h-14 w-72 items-center">
        <AspectRatio
          ratio={16 / 9}
          className="flex items-center justify-center"
        >
          <Image src={LogoImage} alt="Logo" width={50} height={50} />
          <h1 className="font-bold">Chat With Anyone</h1>
        </AspectRatio>
      </div>
    </Link>
  );
};

export default Logo;
