import { useTranslations } from "next-intl"

export default function AboutCard() {
    const t = useTranslations('about');
    
    return(
        <div className="flex-1 p-6 rounded-xl bg-light shadow bg-secondary">
            <p className="leading-7">
                {t('paragraph-one')}
            </p>
            <p className="mt-3 pt-3 leading-7 border-t-quaternary border-t-[1px]">
                {t('paragraph-two')}
            </p>
        </div>
    )
}