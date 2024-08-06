import messages from '@/messages/en.json';
import { useTranslations } from "next-intl"
import Value from './Value';
import { twMerge } from 'tailwind-merge';

export default function Values() {
    const t = useTranslations('values');
    
    const values = Object.entries(messages.values).filter(([key, value]) => {
        return key.startsWith('value-');
    }).map(([key, value]) => key);
    return(
        <section className="main-width py-32">
            <h2 className="text-5xl">
                {t('title')}
            </h2>
            <ul className="mt-8 grid md:grid-cols-2 divide-y-[1px] md:divide-y-0 divide-tertiary">
                {values.map((value, index) => (
                    <li className="group" key={value}>
                        <Value
                            className={twMerge(
                                "border-0 md:border-[1px] md:border-tertiary",
                                "md:border-l-0 md:border-b-0",
                                index < 2 && "md:border-t-0",
                                index % 2 !== 0 && "md:border-r-0 pl-0 md:pl-4 md:pr-0",
                                index % 2 === 0 && "pl-0",
                            )}
                        >
                            {t(value)}
                        </Value>
                    </li>
                ))}
            </ul>
        </section>
    )
}