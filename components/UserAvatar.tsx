import Image from "next/image";
import { cn, getInitials } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Props {
  name?: string | null;
  image?: string | null;
  className?: string;
}

const UserAvatar = ({ name, image, className }: Props) => {
  return (
    <Avatar className={cn("bg-white text-black", className)}>
      {image && (
        <Image
          src={image || ""}
          alt={name || ""}
          width={40}
          height={40}
          referrerPolicy="no-referrer"
          className="rounded-full"
        />
      )}
      <AvatarFallback
        // delayMs={1000}
        className="text-lg dark:bg-white dark:text-black"
      >
        {getInitials(name)}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
