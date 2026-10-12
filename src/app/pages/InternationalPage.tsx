import { Archive, ArrowRight, Check, Cpu, FileCheck, Lock, Mail, Monitor, ShieldCheck } from "lucide-react";
import { useLocation } from "react-router";
import { useState } from "react";
import en from "../locales/en/site.json";
import ja from "../locales/ja/site.json";
import { CONTACT, mailto } from "../content";
import { useLocale } from "../i18n/useLocale";
import { PAGE_SLUGS, pageFromPath } from "../i18n/config";
import { ButtonLink, buttonClass } from "../components/site/Button";
import AppFeatures from "../components/site/AppFeatures";
import AppScreenPreview from "../components/site/AppScreenPreview";
import { Container, PageHero, Section, SectionIntro } from "../components/site/Layout";
import InternationalNotFound from "./InternationalNotFound";

type SiteCopy = typeof en;

function Cards({ items, numbered = false }: { items: { title: string; body: string }[]; numbered?: boolean }) {
  const icons = [Archive, Lock, Cpu, FileCheck, ShieldCheck, Monitor];
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => {
        const Icon = icons[index % icons.length];
        return (
          <article key={item.title} className="min-w-0 rounded-2xl border border-panel-line bg-panel p-5 md:p-6">
            {numbered ? <span className="grid h-8 w-8 place-items-center rounded-full bg-key font-bold text-white">{index + 1}</span> : <Icon size={28} strokeWidth={1.6} className="text-key" aria-hidden="true" />}
            <h3 className="mt-4 text-xl font-bold text-navy">{item.title}</h3>
            <p className="mt-3 text-base leading-relaxed text-ink-2">{item.body}</p>
          </article>
        );
      })}
    </div>
  );
}

function DevicePreview({ copy }: { copy: SiteCopy }) {
  const { locale } = useLocale();
  const number = new Intl.NumberFormat(locale);
  return (
    <figure className="mx-auto max-w-4xl">
      <div role="img" aria-label={copy.screen.label} className="rounded-2xl border border-navy/30 bg-[#050C28] p-5 text-white md:p-8">
        <p className="text-lg font-bold">D-GO Secure Data Vault</p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="flex flex-col justify-center rounded-xl border border-led/50 p-6">
            <Lock size={38} className="text-led" aria-hidden="true" />
            <p className="mt-4 text-sm text-on-navy-2">{copy.screen.status}</p>
            <p className="mt-2 text-2xl font-bold text-led">{copy.screen.open}</p>
          </div>
          <div className="grid gap-3">
            <div className="rounded-xl border border-white/20 p-4">
              <p className="text-sm text-on-navy-2">{copy.screen.files}</p>
              <p className="mt-1 text-3xl font-semibold">{number.format(128)}</p>
              <p className="mt-3 text-sm text-on-navy-2">{copy.screen.storage}</p>
              <p className="mt-1 text-xl font-semibold text-led">{number.format(2.4)} GB</p>
            </div>
            <div className="rounded-xl border border-white/20 p-4">
              <p className="text-sm text-on-navy-2">{copy.screen.connected}</p>
              <p className="mt-1">D-GO App</p>
            </div>
          </div>
        </div>
        <ul className="mt-4 grid gap-2 sm:grid-cols-3">
          {[copy.screen.settings, copy.screen.lock, copy.screen.power].map((label) => <li key={label} className="rounded-lg border border-white/20 px-3 py-3 text-center text-sm">{label}</li>)}
        </ul>
      </div>
      <figcaption className="mt-4 text-center text-sm leading-relaxed text-ink-2">{copy.screen.example}<br />{copy.screen.appearance}</figcaption>
    </figure>
  );
}

function EnquiryForm({ copy, sales }: { copy: SiteCopy; sales: boolean }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [quantity, setQuantity] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState(copy.form.types[sales ? 0 : 1]);
  const inputClass = "mt-2 block min-h-11 w-full rounded-lg border border-line bg-white px-3 py-2 text-ink focus:border-key";
  return (
    <form
      className="mt-8 rounded-2xl border border-line bg-mist p-5 md:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        const body = [copy.form.bodyIntro, `${copy.form.type}: ${type}`, `${copy.form.name}: ${name}`, `${copy.form.email}: ${email}`, `${copy.form.organisation}: ${organisation}`, ...(sales ? [`${copy.form.quantity}: ${quantity}`] : []), "", message].join("\n");
        window.location.href = mailto(sales ? copy.form.subjectSales : copy.form.subjectSupport, body);
      }}
    >
      <h3 className="text-xl font-bold text-navy">{copy.form.title}</h3>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="font-medium text-navy">{copy.form.name}<input required autoComplete="name" name="name" value={name} onChange={(event) => setName(event.target.value)} className={inputClass} /></label>
        <label className="font-medium text-navy">{copy.form.email}<input required type="email" autoComplete="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} className={inputClass} /></label>
        <label className="font-medium text-navy">{copy.form.organisation}<input autoComplete="organization" name="organisation" value={organisation} onChange={(event) => setOrganisation(event.target.value)} className={inputClass} /></label>
        <label className="font-medium text-navy">{copy.form.type}<select name="type" value={type} onChange={(event) => setType(event.target.value)} className={inputClass}>{copy.form.types.map((item) => <option key={item}>{item}</option>)}</select></label>
        {sales && <label className="font-medium text-navy">{copy.form.quantity}<input type="number" name="quantity" min="1" step="1" value={quantity} onChange={(event) => setQuantity(event.target.value)} className={inputClass} /></label>}
      </div>
      <label className="mt-5 block font-medium text-navy">{copy.form.message}<textarea required name="message" rows={5} value={message} onChange={(event) => setMessage(event.target.value)} className={inputClass} /></label>
      <p className="mt-4 text-sm leading-relaxed text-ink-2">{copy.form.note}</p>
      <button type="submit" className={buttonClass("primary", "mt-5 max-w-full whitespace-normal text-center")}>{copy.form.submit} <ArrowRight size={17} aria-hidden="true" /></button>
    </form>
  );
}

export default function InternationalPage() {
  const { pathname } = useLocation();
  const { locale, common, path } = useLocale();
  const copy = locale === "ja" ? ja : en;
  const page = pageFromPath(pathname);
  if (page === "404") return <InternationalNotFound />;
  const hero = page === "device-screen"
    ? { eyebrow: locale === "ja" ? "本体画面" : "Device Monitor", title: copy.dashboardTitle, lead: copy.dashboardLead }
    : copy.hero[PAGE_SLUGS.filter((slug) => slug !== "device-screen").indexOf(page)];
  return (
    <div className="w-full">
      <PageHero {...hero}>
        <div className="mt-7 flex flex-wrap gap-3">
          <ButtonLink to={path("/purchase")} variant="onNavy">{common.sales} <ArrowRight size={17} aria-hidden="true" /></ButtonLink>
          {page === "" && <ButtonLink to={path("/product")} variant="onNavyGhost">{copy.productCTA}</ButtonLink>}
        </div>
      </PageHero>

      {(page === "" || page === "product") && <>
        <Section labelledBy="hardware-title">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <img src="/images/product/dgo-front-cut-900.webp" width={900} height={900} alt={common.productAlt} className="mx-auto h-auto max-h-[500px] w-full object-contain" fetchPriority="high" />
            <div>
              <SectionIntro id="hardware-title" eyebrow="D-GO" title={copy.hardwareTitle} lead={copy.hardwareBody} />
              <ul className="space-y-3">
                {copy.hardwareFacts.map((fact) => <li key={fact} className="flex items-start gap-3 text-ink-2"><Check size={18} className="mt-1 shrink-0 text-key" aria-hidden="true" />{fact}</li>)}
              </ul>
            </div>
          </div>
        </Section>
        <Section tone="mist" labelledBy="benefits-title"><SectionIntro id="benefits-title" title={copy.benefitsTitle} lead={copy.benefitsLead} /><Cards items={copy.benefits} /></Section>
        <AppFeatures compact />
      </>}

      {page === "technology" && <>
        <Section labelledBy="technology-title"><SectionIntro id="technology-title" title={copy.technologyTitle} lead={copy.technologyLead} /><Cards items={copy.technology} /><p className="mt-6 rounded-xl border border-line bg-mist p-5 text-ink-2">{copy.technologyNote}</p></Section>
        <AppFeatures compact />
      </>}

      {page === "dashboard" && <>
        <AppScreenPreview />
        <AppFeatures />
        <Section labelledBy="device-link-title"><SectionIntro id="device-link-title" title={locale === "ja" ? "本体の画面を見る" : "Explore the Device Screen"} /><ButtonLink to={path("/device-screen")}>{locale === "ja" ? "本体画面" : "Device Monitor"}</ButtonLink></Section>
      </>}

      {page === "device-screen" && <>
        <Section tone="mist" labelledBy="device-title"><SectionIntro id="device-title" title={copy.dashboardTitle} lead={copy.dashboardLead} /><DevicePreview copy={copy} /></Section>
        <Section labelledBy="connection-title"><SectionIntro id="connection-title" title={copy.connectionTitle} lead={copy.connectionLead} /><Cards items={copy.connectionSteps} numbered /></Section>
      </>}

      {page === "manual" && <>
        <Section labelledBy="downloads-title">
          <SectionIntro id="downloads-title" title={copy.downloadsTitle} lead={copy.downloadsLead} />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{copy.downloads.map((item) => <li key={item} className="rounded-xl border border-line p-5"><Monitor size={24} className="text-key" aria-hidden="true" /><h3 className="mt-3 text-lg font-bold text-navy">{item}</h3><p className="mt-3 text-sm text-ink-3">{copy.preparing}</p></li>)}</ul>
          <ButtonLink href={mailto(copy.requestFiles)} className="mt-6 max-w-full whitespace-normal text-center">{copy.requestFiles}</ButtonLink>
        </Section>
        <Section tone="mist" labelledBy="connection-title"><SectionIntro id="connection-title" title={copy.connectionTitle} lead={copy.connectionLead} /><Cards items={copy.connectionSteps} numbered /></Section>
        <AppFeatures />
        <Section tone="mist" labelledBy="checks-title"><SectionIntro id="checks-title" title={copy.troubleshootTitle} /><ul className="space-y-3">{copy.checks.map((item) => <li key={item} className="flex items-start gap-3"><Check size={18} className="mt-1 shrink-0 text-key" aria-hidden="true" />{item}</li>)}</ul></Section>
      </>}

      {(page === "purchase" || page === "support") && <>
        {page === "purchase" && <Section tone="mist" labelledBy="sales-title"><SectionIntro id="sales-title" title={copy.salesTitle} /><Cards items={copy.salesSteps} numbered /></Section>}
        <Section labelledBy="email-title">
          <SectionIntro id="email-title" title={copy.emailTitle} lead={copy.emailBody} />
          <a href={mailto()} className="inline-flex min-h-11 max-w-full items-center gap-3 break-all text-xl font-bold text-key"><Mail size={22} className="shrink-0" aria-hidden="true" />{CONTACT.email}</a>
          <p className="mt-4 max-w-3xl text-ink-2">{common.hours}</p>
          <p className="mt-3 max-w-3xl text-ink-2">{copy.regionalNote}</p>
          <EnquiryForm key={`${locale}-${page}`} copy={copy} sales={page === "purchase"} />
        </Section>
        {page === "support" && <Section tone="mist" labelledBy="faq-title"><SectionIntro id="faq-title" title={copy.faqTitle} /><dl className="grid gap-x-8 md:grid-cols-2">{copy.faqs.map((faq) => <div key={faq.q} className="border-t border-line py-5"><dt className="text-lg font-bold text-navy">{faq.q}</dt><dd className="mt-3 leading-relaxed text-ink-2">{faq.a}</dd></div>)}</dl></Section>}
      </>}

      {page !== "purchase" && page !== "support" && <section aria-labelledby="international-cta" className="bg-navy text-white"><Container className="py-14 md:py-20"><h2 id="international-cta" className="display text-3xl">{copy.ctaTitle}</h2><p className="mt-4 max-w-2xl text-on-navy-2">{copy.ctaBody}</p><ButtonLink to={path("/purchase")} variant="onNavy" className="mt-6">{common.sales} <ArrowRight size={17} aria-hidden="true" /></ButtonLink></Container></section>}
    </div>
  );
}
