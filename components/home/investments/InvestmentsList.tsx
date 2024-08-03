import projects from '@/assets/projects.json';
import InvestmenutGroup from './InvestmentGroup';

export default function InvestmentsList() {
    return(
        <div className="grid gap-8">
            {Object.entries(projects).map(([key, value]) => (
                <InvestmenutGroup 
                    title={key}
                    projects={value}
                />
            ))}
        </div>
    )
}