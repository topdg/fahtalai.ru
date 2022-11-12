import React, { FC } from "react";
import { ElementProps } from "../../types/types";
import { cls } from "../../utils";

export const Section = React.forwardRef<HTMLDivElement, ElementProps<HTMLDivElement>>(
  ({ attributes, children, className }, ref) => (
    <section className={cls("section", className)} {...attributes} ref={ref}>
      {children}
    </section>
  )
);
