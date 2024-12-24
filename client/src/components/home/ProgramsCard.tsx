import React from "react";
import Img from "../shared/Img";

const ProgramsCard: React.FC<any> = ({ program }) => {
    return (
        <div className="relative overflow-hidden bg-white rounded-lg shadow-md group athlete-card">
            {/* Program Image */}
            <Img
                // src={program.image}
                // src={`https://picsum.photos/id/${program.id}/200/300`}
                src="https://i.pinimg.com/736x/d4/68/ff/d468ff6cb246e1dede382ae1a66cbdd4.jpg"
                alt={program.title}
                className="object-cover w-full transition-transform duration-300 h-96 group-hover:scale-105"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-end transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black via-transparent to-transparent group-hover:opacity-90">
                <div className="p-4 text-white bg-black bg-opacity-60">
                    <h3 className="text-lg font-bold">{program.title}</h3>
                    <p className="mt-1 text-sm">
                        {program.duration} • {program.level}
                    </p>
                    <p className="text-sm">{program.category}</p>
                </div>
                <button className="w-full px-4 py-2 font-medium text-center text-white bg-red-500 hover:bg-red-600">
                    VIEW PROGRAM
                </button>
            </div>
        </div>
    );
};

export default ProgramsCard;
