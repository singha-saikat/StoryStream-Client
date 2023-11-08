import img1 from "../../assets/flat-lay-work-space-with-notebook-keyboard.jpg";

const Banner = () => {
    return (
        <section>
	<div className="dark:bg-slate-200 max-w-7xl mx-auto mt-4">
		<div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
			<h1 className="text-5xl font-bold leadi sm:text-6xl xl:max-w-3xl dark:text-gray-900">Would you like guidance on creating a blog </h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">Most are written in a conversational style to reflect the voice and personal views of the blogger. </p>
			
		</div>
	</div>
	<img src={img1 } alt="" className="w-1/2 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" />
</section>
    );
};

export default Banner;