import { useTranslations } from "next-intl"

export default function People() {
    const t = useTranslations('people');
    
    return(
        <section className="py-32 bg-dark text-light">
            <div className="main-width flex flex-col md:flex-row gap-6 md:gap-24">
                <h2 className="text-5xl leading-tight">
                    {t('title')}
                </h2>
                <div className="grid gap-3">
                    <p className="text-xl">
                        {t('paragraph-one')}
                    </p>
                    <p className="text-lg text-light/60">
                        {t('paragraph-two')}
                    </p>
                </div>
            </div>
        </section>
    )
}