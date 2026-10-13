import LocalizedContent from "../i18n/LocalizedContent";
import AppFeatures from "../components/site/AppFeatures";
import AppScreenPreview from "../components/site/AppScreenPreview";
import { PageHero } from "../components/site/Layout";
import { ButtonLink } from "../components/site/Button";

export default function Dashboard() {
  return (
    <LocalizedContent>{<div className="w-full">
      <PageHero eyebrow="D-GO App" title="앱 관리" lead="디고 금고관리와 디고 안전폴더의 앱 기능과 화면 구성을 살펴보세요.">
        <ButtonLink to="/device-screen" variant="onNavyGhost" className="mt-6">본체 모니터 화면 보기</ButtonLink>
      </PageHero>
      <AppScreenPreview />
      <AppFeatures />
    </div>}</LocalizedContent>
  );
}
