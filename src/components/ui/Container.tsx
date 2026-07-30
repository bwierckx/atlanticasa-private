import { cn } from "@/lib/cn";
import type { ElementType, ReactNode } from "react";

type ContainerProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

/** Centrale contentbreedte met consistente horizontale marges. */
export function Container({ as: Tag = "div", className, children }: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-content px-6 sm:px-8 lg:px-12", className)}>
      {children}
    </Tag>
  );
}
