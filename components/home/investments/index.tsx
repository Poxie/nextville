import { useTranslations } from "next-intl";
import InvestmentsList from "./InvestmentsList";

export default function Investments() {
    const t = useTranslations('investments');

    return(
        <div className="bg-gradient-to-t from-white from-1% to-black to-[20px]">
        <section id="investments" className="py-32 text-light">
            <div className="main-width">
                <h2 className="mb-12 text-5xl text-center">
                    {t('title')}
                </h2>
                <InvestmentsList />
            </div>
        </section>
        </div>
    )
}