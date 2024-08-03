import { useTranslations } from "next-intl"

export default function About() {
    const t = useTranslations('about');

    return(
        <section className="main-width py-32 flex flex-col md:flex-row gap-8 md:gap-20">
            <h2 className="text-6xl leading-tight">
                {t('title')}
            </h2>
            <div>
                <p className="text-lg text-secondary">
                    {t('paragraph-one')}
                </p>
                <div className="bg-divider-gradient my-8 h-[1px] w-full" />
                <p className="text-lg text-secondary">
                    {t('paragraph-two')}
                </p>
            </div>
        </section>
    )
}