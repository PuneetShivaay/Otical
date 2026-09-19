import { team } from "@/data";
import { Linkedin } from 'lucide-react';

function Team() {
    return (
        <div className="relative py-20 bg-neutral-900/50">
            <div className="text-center max-w-7xl mx-auto px-4">
                <div>
                    <span className="bg-orange-500/10 text-orange-500 rounded-full h-6 text-sm font-medium px-4 py-2 uppercase">
                        Our Team
                    </span>
                    <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-8 tracking-tight text-white">
                        We are a group of
                        <span className="bg-gradient-to-r from-orange-500 to-red-700 text-transparent bg-clip-text">
                            {" "}
                            awesome people
                        </span>
                    </h2>
                </div>
            </div>
            <div className="mt-20 max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap justify-center gap-8">
                    {team.map((member) => (
                        <div 
                            key={member.name} 
                            className="w-full sm:w-1/2 lg:w-1/4 p-2"
                        >
                            <div className="bg-neutral-800/50 p-6 rounded-2xl border border-neutral-700 h-full transition-all duration-300 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20 transform hover:-translate-y-2">
                                <div className="flex flex-col items-center text-center">
                                    <img
                                        className="rounded-full border-4 border-orange-500 shadow-lg mx-auto mb-6 h-32 w-32 object-cover transition-transform duration-300 hover:scale-110"
                                        src={member.image}
                                        alt={member.name}
                                    />
                                    <p className="text-2xl mb-1 text-white">{member.name}</p>
                                    <p className="mb-4 text-orange-400 tracking-tight">
                                        {member.role}
                                    </p>
                                    <div className="flex justify-center space-x-5 mt-4">
                                        {/* Only LinkedIn is real. The old data pointed the
                                            Twitter and GitHub icons at LinkedIn URLs too,
                                            which misled visitors — removed. */}
                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on LinkedIn`} className="text-neutral-400 hover:text-orange-500 transition-transform duration-300 transform hover:scale-125">
                                            <Linkedin size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Team;
