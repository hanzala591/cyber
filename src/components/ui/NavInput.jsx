import * as React from "react";

import { cn } from "@/lib/utils";

function NavInput({ className, type, ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "placeholder:text-[#656565] selection:bg-primary selection:text-primary-foreground dark:bg-input/30  flex h-11 w-full min-w-0 rounded-md  bg-[#F5F5F5] px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none   md:text-sm",
        "focus-visible: focus-visible:ring-ring/50 focus-visible:ring-[]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  );
}

export { NavInput };
