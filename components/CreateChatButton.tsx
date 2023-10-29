"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { MessageSquarePlus } from "lucide-react";

const CreateChatButton = () => {
  const router = useRouter();

  const createNewChat = async () => {
    router.push("/chat/123");
  };

  return (
    <Button variant="ghost" onClick={createNewChat}>
      <MessageSquarePlus />
    </Button>
  );
};

export default CreateChatButton;
