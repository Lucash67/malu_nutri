type Extra = {
  src: string;
  alt: string;
};

type Props = {
  src?: string;
  alt?: string;
  extra?: Extra;
  placeholder: string;
  shape?: "tall" | "square" | "wide" | "thumb";
};

export function Media({ src, alt, extra, placeholder, shape = "tall" }: Props) {
  const cls = `media media--${shape}${src ? "" : " media--slot"}${extra ? " media--pair" : ""}`;

  if (!src) {
    return (
      <div className={cls} role="img" aria-label={placeholder}>
        <span>{placeholder}</span>
      </div>
    );
  }

  return (
    <div className={cls}>
      <img src={src} alt={alt ?? ""} />
      {extra ? <img src={extra.src} alt={extra.alt} /> : null}
    </div>
  );
}
