import { projects } from "../../constants";

function Projects() {
  return (
    <div className="relative py-20 border-b border-neutral-800 bg-neutral-900/50">
      <div className="text-center max-w-7xl mx-auto px-4">
        <div>
          <span className="bg-orange-500/10 text-orange-500 rounded-full h-6 text-sm font-medium px-4 py-2 uppercase">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-8 tracking-tight text-white">
            We&apos;re proud of the work
            <span className="bg-gradient-to-r from-orange-500 to-red-700 text-transparent bg-clip-text">
              {" "}
              we&apos;ve done
            </span>
          </h2>
        </div>
      </div>
      <div className="mt-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="p-2">
              <div className="bg-neutral-800/50 p-6 rounded-2xl border border-neutral-700 h-full flex flex-col transition-all duration-300 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20">
                <img
                  className="rounded-lg border border-neutral-600 shadow-md mx-auto h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  src={project.image}
                  alt={project.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
