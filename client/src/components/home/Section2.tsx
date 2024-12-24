import Filters from "./Filters";

const Section2 = () => {
    return (
        <section id="section2" className="py-16 text-center bg-gray-100">
            <h2 className="mb-4 text-3xl font-bold text-gray-800 sm:text-4xl">
                Free Training Programs
            </h2>
            {/* <p className="mb-8 text-gray-600 body-container">
                Below are a list of our most popular training programs created to help
                you achieve the best version of yourself. Built by world-renowned
                trainers, these programs are used daily by thousands of others looking
                to take their fitness to the next level.
            </p> */}
            {/* <div className="max-w-md mx-auto">
                <input
                    type="text"
                    placeholder="Search training programs..."
                    className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div> */}

            <Filters />
        </section>
    )
};

export default Section2;
