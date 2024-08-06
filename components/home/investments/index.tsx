import { useTranslations } from "next-intl";
import InvestmentsList from "./InvestmentsList";

export default function Investments() {
    const t = useTranslations('investments');

    return(
        <section id="investments" className="py-32 bg-dark text-light">
            <div className="main-width">
                <h2 className="mb-12 text-5xl text-center">
                    {t('title')}
                </h2>
                <InvestmentsList />
            </div>
        </section>
    )
}