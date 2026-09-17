import { ArrowLeft, House } from "lucide-react";
import { useLocation, useNavigate } from "react-router";
import { CONTACT, mailto } from "../content";
import { ButtonLink, buttonClass } from "../components/site/Button";
import { Container } from "../components/site/Layout";

export default function NotFound() {
  const navigate = useNavigate();
  const location = useLocation();

  // "default" key = the visitor landed here directly, so there is no in-app page to go back to.
  const goBack = () => (location.key === "default" ? navigate("/") : navigate(-1));

  return (
    <section aria-labelledby="notfound-title" className="flex min-h-[70vh] items-center bg-white">
      <Container className="py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="display text-[clamp(4.5rem,15vw,7.5rem)] leading-none text-navy">404</p>
          <h1 id="notfound-title" className="mt-6 text-2xl font-extrabold tracking-tight text-navy md:text-3xl">
            페이지를 찾을 수 없습니다
          </h1>
          <p className="mt-3 text-base leading-relaxed text-ink-2 md:text-lg">요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.</p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink to="/">
              <House size={18} aria-hidden="true" />
              홈으로 가기
            </ButtonLink>
            <button
              type="button"
              onClick={goBack}
              className={buttonClass("secondary")}
            >
              <ArrowLeft size={18} aria-hidden="true" />
              이전 페이지
            </button>
          </div>

          <p className="mt-12 border-t border-line pt-6 text-[0.9375rem] leading-relaxed text-ink-2">
            도움이 필요하신가요?{" "}
            <a href={mailto()} className="font-semibold text-key underline-offset-4 hover:underline">
              {CONTACT.email}
            </a>
            로 문의해 주세요.
          </p>
        </div>
      </Container>
    </section>
  );
}
