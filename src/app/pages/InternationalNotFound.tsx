import { useLocation, useNavigate } from "react-router";
import { useLocale } from "../i18n/useLocale";
import { Container } from "../components/site/Layout";
import { ButtonLink, buttonClass } from "../components/site/Button";
import { CONTACT, mailto } from "../content";

export default function InternationalNotFound() {
  const { common, path } = useLocale();
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <section aria-labelledby="notfound-title" className="flex min-h-[65vh] items-center">
      <Container className="py-16 text-center">
        <p className="display text-7xl text-navy">404</p>
        <h1 id="notfound-title" className="mt-6 text-3xl font-bold text-navy">{common.notFound}</h1>
        <p className="mt-4 text-ink-2">{common.notFoundBody}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink to={path("/")}>{common.home}</ButtonLink>
          <button type="button" className={buttonClass("secondary", "whitespace-normal")} onClick={() => location.key === "default" ? navigate(path("/")) : navigate(-1)}>{common.back}</button>
        </div>
        <p className="mt-8 text-ink-2">{common.help} <a href={mailto()} className="break-all font-semibold text-key">{CONTACT.email}</a></p>
      </Container>
    </section>
  );
}
