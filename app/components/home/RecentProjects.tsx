import HomeImageSlider from "../reusable/HomeImageSlider";
import MainButton from "../reusable/MainButton";


export default function RecentProjects() {
    return (
        <section className="pt-20 w-6xl mx-auto">
            <div className="flex justify-between items-center px-6 md:px-0">
                {/* Left Side */}
                <div className="max-w-lg">
                    <div className="mb-4 mx-auto flex items-center justify-start gap-2">
                        <div className="w-2 h-2 bg-[#a5b7d2] rounded-full" />
                        <span className="uppercase text-sm text-[#a5b7d2] font-bold">RECENT PROJECTS</span>
                        <div className="w-2 h-2 bg-[#a5b7d2] rounded-full" />
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Our Latest Case Studies
                    </h2>
                    <p className="text-gray-600 mb-8">
                        {`If we had a 'secret sauce' it would be our awesome people.
                            We have only professional team!`}
                    </p>

                </div>

                {/* Right Side */}
                <div>
                    <MainButton text="All Works" href="/projects" />
                </div>
            </div>

            {/* Slider */}
            <div className="mt-12">
                <HomeImageSlider />
            </div>
        </section>

    );
}
