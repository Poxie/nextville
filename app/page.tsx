import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations('home');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        {t('title')}
      </h1>
    </main>
  );
}
