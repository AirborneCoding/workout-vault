/* 

https://img.freepik.com/free-photo/strong-tattooed-athlete-shows-how-calisthenic-moves-step-by-step-full-leg-rises-pull-bar_346278-1568.jpg?ga=GA1.1.106872350.1717615705&semt=ais_hybrid

*/
const Section1 = () => {
    const scrollToSection2 = () => {
        const section2 = document.getElementById("section2");
        if (section2) {
            section2.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            className="relative flex items-center justify-center h-screen bg-center bg-cover"
            style={{
                backgroundImage:
                    'url("https://img.freepik.com/free-photo/low-angle-view-unrecognizable-muscular-build-man-preparing-lifting-barbell-health-club_637285-2497.jpg?ga=GA1.1.106872350.1717615705&semt=ais_hybrid")',
            }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative text-center text-white">
                <h1 className="mb-4 text-4xl font-bold sm:text-6xl">
                    Welcome to Workout Vault
                </h1>
                <button
                    onClick={scrollToSection2}
                    className="px-4 py-2 font-medium text-white bg-red-500 rounded shadow-lg hover:bg-red-600"
                >
                    Explore Programs
                </button>
            </div>
        </section>
    )
};

export default Section1;
