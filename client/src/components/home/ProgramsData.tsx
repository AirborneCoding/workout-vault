// import React from "react";
// import ProgramsCard from "./ProgramsCard";

// const ProgramsData = () => {
//     return <div>ProgramsData</div>;
// };

// export default ProgramsData;

import ProgramsCard from "./ProgramsCard";

const ProgramsData = () => {
    // Sample programs data
    const programs = [
        {
            id: 1,
            title: "Strength Builder",
            duration: "6 Weeks",
            level: "Intermediate",
            category: "Strength",
            image: "https://via.placeholder.com/300", // Replace with your image URLs
        },
        {
            id: 2,
            title: "Fat Loss Accelerator",
            duration: "8 Weeks",
            level: "Beginner",
            category: "Weight Loss",
            image: "https://via.placeholder.com/300",
        },
        {
            id: 3,
            title: "Muscle Growth Plan",
            duration: "12 Weeks",
            level: "Advanced",
            category: "Bodybuilding",
            image: "https://via.placeholder.com/300",
        },
        {
            id: 4,
            title: "HIIT Bootcamp",
            duration: "4 Weeks",
            level: "All Levels",
            category: "Cardio",
            image: "https://via.placeholder.com/300",
        },
    ];

    return (
        <div className="py-8 body-container min-h-screen">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                Explore Programs
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {programs.map((program) => (
                    <ProgramsCard key={program.id} program={program} />
                ))}
            </div>
        </div>
    );
};

export default ProgramsData;
