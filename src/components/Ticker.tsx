import { coupons } from "../content";
import { useCopyCode } from "../hooks/useCopyCode";

const vibe = ["comida de verdade", "6º semestre", "beach tennis", "parcerias abertas"];

export function Ticker() {
  const { copied, copy } = useCopyCode();
  const bits = [
    ...coupons.map((item) => ({
      kind: "coupon" as const,
      label: item.code!,
      hint: item.perk ?? "copiar",
    })),
    ...vibe.map((label) => ({ kind: "vibe" as const, label, hint: "" })),
  ];
  const loop = [...bits, ...bits];

  return (
    <div className="ticker" aria-label="Cupons e destaques">
      <div className="ticker__track">
        {loop.map((item, i) =>
          item.kind === "coupon" ? (
            <button
              key={`${item.label}-${i}`}
              className="ticker__item ticker__item--coupon"
              type="button"
              onClick={() => copy(item.label)}
            >
              <span>cupom</span>
              <b>{item.label}</b>
              <em>{copied === item.label ? "copiado" : item.hint}</em>
            </button>
          ) : (
            <span key={`${item.label}-${i}`} className="ticker__item">
              {item.label}
            </span>
          ),
        )}
      </div>
    </div>
  );
}
