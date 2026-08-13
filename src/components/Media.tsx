type Props = {
  src?: string;
  alt?: string;
  placeholder: string;
  shape?: "tall" | "square" | "wide";
};

export function Media({ src, alt, placeholder, shape = "tall" }: Props) {
  const cls = `media media--${shape}${src ? "" : " media--slot"}`;

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
    </div>
  );
}
