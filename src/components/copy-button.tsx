import { Check, Copy } from "lucide-react";
import * as React from "react";
import { Button } from "./ui/button";
//======================================
export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = React.useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <Button variant="ghost" size="icon" className="size-8" onClick={handleCopy}>
      {copied ? (
        <Check className="size-4" />
      ) : (
        <Copy className="size-4" />
      )}
    </Button>
  );
}
