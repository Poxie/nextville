import { useTranslations } from "next-intl";
import ValueItem from "./ValueItem"

const VALUE_COUNT = 6;
export default function ValuesList() {
    const t = useTranslations('values');
    
    return(
        <ul className="grid gap-[1px] overflow-hidden">
            {Array.from(Array(VALUE_COUNT)).map((value, index) => (
                <li key={index}>
                    <ValueItem reversed={index % 2 === 0}>
                        {t(`value-${index + 1}`)}
                    </ValueItem>
                </li>
            ))}
        </ul>
    )
}