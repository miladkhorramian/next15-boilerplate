"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function ApplicationPageSonner() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast("اینونت تست", {
          description: "نشتساشسنتاینت",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      Show Toast
    </Button>
  );
}
