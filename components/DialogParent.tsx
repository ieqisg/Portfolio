import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog"
import GithubIcon from "./GithubIcon";
import { Globe } from "lucide-react";
import { ExternalLink } from 'lucide-react';
export default function DialogScrollableContent({
  title,
  content,
  children,
  websiteLink,
  githubRepo
}: {
  title: string;
  content: string;
  children: React.ReactNode;
  websiteLink?: string;
  githubRepo?: string;
}) {
  return (

    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>

      <DialogContent className=" border border-zinc-700 bg-[#171717] ">
        <DialogHeader>
          <DialogTitle className="text-white text-base md:text-lg lg:text-xl">{title}</DialogTitle>
          <DialogDescription className="text-teal-300">
          </DialogDescription>
        </DialogHeader>

        <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4 text-zinc-400">
          <p>{content}</p>
        </div>
        <DialogFooter className="gap-x-2 bg-[#1e1e1e] text-muted-foreground">
          <Globe className="h-4 w-4 text-muted-foreground " /> <a href={websiteLink} className="text-teal-300" style={{ textDecoration: 'underline' }}>Website </a>
          <GithubIcon /> <a href={`${githubRepo}`} className="text-teal-300" style={{ textDecoration: 'underline' }}>Github Repo </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
