import messages from '@/messages/en.json';
import { useTranslations } from "next-intl"
import Value from './Value';

export default function Values() {
    const t = useTranslations('values');
    
    const values = Object.entries(messages.values).filter(([key, value]) => {
        return key.startsWith('value-');
    }).map(([key, value]) => key);
    return(
        <section className="main-width py-32">
            <h2 className="text-5xl font-medium text-center">
                {t('title')}
            </h2>
            <ul className="mt-8 grid md:grid-cols-2 gap-2">
                {values.map(value => (
                    <li key={value}>
                        <Value>
                            {t(value)}
                        </Value>
                    </li>
                ))}
            </ul>
        </section>
    )
}