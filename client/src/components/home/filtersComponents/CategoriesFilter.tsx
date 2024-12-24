
type CategoriesType = {
    id: number;
    name: string;
    icon: string;
};


const categories: CategoriesType[] = [
    {
        id: 1,
        name: "gain weight",
        icon: "https://www.svgrepo.com/show/321846/biceps.svg", 
    },
    {
        id: 2,
        name: "lose weight",
        icon: "https://www.svgrepo.com/show/456178/weight-loss.svg",
    },
    {
        id: 3,
        name: "maintain weight",
        icon: "https://www.svgrepo.com/show/482797/weight-scale-1.svg",
    },
    {
        id: 4,
        name: "performance",
        icon: "https://www.svgrepo.com/show/447452/performance.svg",
    },
    {
        id: 5,
        name: "strength",
        icon: "https://www.svgrepo.com/show/163208/muscular-man-flexing-silhouette.svg",
    },
];

const CategoriesFilter = () => {
    return (
        <div className="flex items-center justify-center">
            <ul className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                    <li
                        key={category.id}
                        className="flex flex-col items-center gap-2 p-5 bg-gray-300 rounded-md cursor-pointer hover:bg-gray-200"
                    >
                        <img
                            src={category.icon}
                            alt={category.name}
                            className="w-8 h-8 md:w-16 md:h-16"
                        />
                        <h3 className="text-xl">{category.name}</h3>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default CategoriesFilter;
