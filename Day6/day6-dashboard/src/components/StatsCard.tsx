type StatsCardProps = {
    title: string;
    value: number;
};

function StatsCard ({title, value}: StatsCardProps) {
    return (
        <div>
            <h3>{title}</h3>
            <h2>{value}</h2>
        </div>
    );
};

export default StatsCard;