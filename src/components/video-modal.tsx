"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface VideoModalProps {
  trigger: React.ReactNode;
}

export function VideoModal({ trigger }: VideoModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] p-0 bg-black">
        <div className="aspect-video w-full relative flex items-center justify-center text-white/60">
          <p>Video coming soon</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

