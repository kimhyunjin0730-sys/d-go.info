import { ArrowRight, FolderLock, Vault } from "lucide-react";
import { Link } from "react-router";
import { useLocale } from "../../i18n/useLocale";
import { Section, SectionIntro } from "./Layout";

/** Feature names and descriptions are shared across all three languages. */
export default function AppFeatures({
  id = "app-features",
  compact = false,
}: {
  id?: string;
  compact?: boolean;
}) {
  const { app: copy, path } = useLocale();
  return (
    <Section id={id} labelledBy={`${id}-title`}>
      <SectionIntro id={`${id}-title`} eyebrow="D-GO App" title={copy.title} lead={copy.lead} />
      <div className="grid items-start gap-5 md:grid-cols-2">
        <article className="min-w-0 rounded-2xl border border-panel-line bg-panel p-5 md:p-7">
          <Vault size={28} strokeWidth={1.6} className="text-key" aria-hidden="true" />
          <p className="eyebrow mt-5 text-key">A</p>
          <h3 className="mt-2 text-xl font-bold text-navy">{copy.vault.title}</h3>
          <p className="mt-3 text-base leading-relaxed text-ink-2">{copy.vault.description}</p>
        </article>
        <article className="min-w-0 rounded-2xl border border-panel-line bg-panel p-5 md:p-7">
          <FolderLock size={28} strokeWidth={1.6} className="text-key" aria-hidden="true" />
          <p className="eyebrow mt-5 text-key">B</p>
          <h3 className="mt-2 text-xl font-bold text-navy">{copy.folder.title}</h3>
          <p className="mt-3 text-base leading-relaxed text-ink-2">{copy.folder.description}</p>
          <ul className="mt-5 space-y-3 border-t border-panel-line pt-5">
            {Object.entries(copy.features).map(([key, feature]) => (
              <li key={key} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-key" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="font-semibold text-navy">{feature.title}</p>
                  {!compact && feature.description && (
                    <p className="mt-1 text-sm leading-relaxed text-ink-2">{feature.description}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </article>
      </div>
      {compact && (
        <Link to={path("/dashboard")} className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-key hover:underline">
          {copy.detailsLabel} <ArrowRight size={17} aria-hidden="true" />
        </Link>
      )}
    </Section>
  );
}
