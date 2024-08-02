import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations('home');

  return (
    <main>
      <div className="main-width">
        <h1>
          {t('title')}
        </h1>
      </div>
    </main>
  );
}
