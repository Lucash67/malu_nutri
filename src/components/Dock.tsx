import { ContactLink } from "./ContactLink";

export function Dock() {
  return (
    <div className="dock" role="navigation" aria-label="Atalhos">
      <ContactLink className="dock__wa">WhatsApp</ContactLink>
      <a className="dock__coupons" href="#cupons">
        Cupons
      </a>
    </div>
  );
}
