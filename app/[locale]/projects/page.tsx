import Navbar from "@/components/ui/Navbar";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Projects() {
    const t = useTranslations('Projects');

    const projects = [
        {
            id: 1,
            title: "Digital Portofolio",
            category: "Web App",
            descriptionKey: "project1Desc",
            image: "/images/digifolio.png",
            externallinks: "https://github.com/onlypasha/digifolio",
            color: "from-blue-500/20 to-cyan-500/20",
        },
        {
            id: 2,
            title: "Kado.Key Store Landing Page",
            category: "Landing Page",
            descriptionKey: "project2Desc",
            image: "/images/kadokey.png",
            externallinks: "https://kadokey.vercel.app/",
            color: "from-blue-500/20 to-cyan-500/20"
        }
    ];

    return (
        <main className="min-h-screen bg-[#0a0a0a] bg-noise text-cream p-4 md:p-8 pb-32">
            <Navbar />

            <div className="max-w-6xl mx-auto space-y-12">
                <div className="md:flex justify-between items-end border-b border-white/10 pb-8">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
                            {t.rich('title', {
                                highlight: (chunks) => <span className="text-brand-light">{chunks}</span>
                            })}
                        </h1>
                        <p className="text-white/60 max-w-md leading-relaxed">
                            {t('description')}
                        </p>
                    </div>
                    <div className="hidden md:block text-right">
                        <span className="text-4xl font-bold text-white/10">{t('year')}</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 hover:border-brand-light/30 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-dark/10">
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative aspect-video w-full overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="relative p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <span className="text-xs font-bold uppercase tracking-widest text-brand-light mb-2 block">{project.category}</span>
                                        <h3 className="text-2xl font-bold">{project.title}</h3>
                                    </div>
                                    <a href={project.externallinks} className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                                        <ArrowUpRight className="h-5 w-5" />
                                    </a>
                                </div>
                                <p className="text-white/60 leading-relaxed text-sm">
                                    {t(project.descriptionKey)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
