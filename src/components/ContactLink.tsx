import type { ReactNode } from "react";
import { contactHref, isExternalHref, partnershipHref, site } from "../content";

type Props = {
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
  intent?: "talk" | "partnership";
};

export function ContactLink({ className, children, onClick, intent = "talk" }: Props) {
  const href = intent === "partnership" ? partnershipHref() : contactHref();
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
