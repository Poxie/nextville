import { useTranslations } from "next-intl"

export default function About() {
    const t = useTranslations('about');

    return (
        <div className="bg-gradient-to-b from-[#FCC383] from-10% via-white via-35% to-white to-90%">
            <section id="about" className="main-width py-32 flex flex-col md:flex-row gap-8 md:gap-20">
                <h2 className="text-5xl leading-tight">
                    {t('title')}
                </h2>
                <div>
                    <p className="text-lg text-secondary">
                        {t('paragraph-one')}
                    </p>
                    <div className="bg-gradient-to-r from-gray-400 to-gray-200 my-8 h-[1px] w-full" />
                    <p className="text-lg text-secondary">
                        {t('paragraph-two')}
                    </p>
                </div>
            </section>
        </div>
    );
}