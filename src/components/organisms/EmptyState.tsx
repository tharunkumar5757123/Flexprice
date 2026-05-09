import { Button } from '../atoms/Button';

/**
 * EmptyState explains why a page has no data and offers a next action.
 * It is useful for first-run product areas such as plans, customers, and invoices.
 */
export function EmptyState({
  icon = 'FP',
  headline,
  subtext,
  ctaLabel,
  onCta
}: {
  icon?: string;
  headline: string;
  subtext: string;
  ctaLabel?: string;
  onCta?: () => void;
}) {
  return (
    <section className="premium-panel soft-grid flex min-h-64 w-[520px] flex-col items-center justify-center border-dashed p-8 text-center animate-fade-up">
      <div className="mb-3 grid h-12 w-12 place-items-center rounded-full bg-brandSoft text-lg font-semibold text-ink shadow-glow animate-pulseRing">{icon}</div>
      <h3 className="text-lg font-semibold">{headline}</h3>
      <p className="mt-1 max-w-sm text-sm leading-6 text-muted">{subtext}</p>
      {ctaLabel && (
        <Button className="mt-5" onClick={onCta}>
          {ctaLabel}
        </Button>
      )}
    </section>
  );
}
