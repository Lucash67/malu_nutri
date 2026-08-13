import type { ReactNode } from "react";
import { contactHref, isExternalHref, site } from "../content";

type Props = {
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
};

export function ContactLink({ className, children, onClick }: Props) {
  const href = contactHref();
  const external = isExternalHref(href);

  return (
    <a
      className={className}
      href={href}
      onClick={onClick}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children ?? site.contact.label}
    </a>
  );
}
