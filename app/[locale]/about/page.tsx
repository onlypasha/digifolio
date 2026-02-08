import Navbar from "@/components/ui/Navbar";
import { Award, BookOpen, Code, Heart } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function About() {
    const t = useTranslations('About');

    return (
        <main className="min-h-screen bg-[#0a0a0a] bg-noise text-cream p-4 md:p-8 pb-32">
            <Navbar />

            <div className="max-w-4xl mx-auto">
                {/* Intro */}
                <section className="mb-20 pt-10">
                    <div className="mb-8">
                        <span className="inline-block px-3 py-1 rounded-full border border-brand-light/20 bg-brand-light/5 text-brand-light text-xs font-bold tracking-widest uppercase mb-6">
                            {t('badge')}
                        </span>

                        {/* Mobile Image */}
                        <div className="md:hidden flex justify-center mb-8">
                            <div className="relative w-64 h-64 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-brand-light to-brand-dark rounded-[2rem] rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-500 blur-xl"></div>
                                <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-2 border-white/10 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
                                    <Image
                                        src="/images/profile.jpg"
                                        alt="Profile"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 320px"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold leading-tight whitespace-pre-line">
                            {t('titlePrefix')}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-cream">{t('titleHighlight')}</span>
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr,1fr] gap-8 md:gap-12 items-start">
                        <div className="order-2 md:order-1">
                            <p className="text-xl text-white/70 leading-relaxed font-light">
                                {t.rich('description', {
                                    i: (chunks) => <i>{chunks}</i>
                                })}
                            </p>
                        </div>

                        {/* Desktop Image */}
                        <div className="order-1 md:order-2 hidden md:flex justify-end">
                            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-brand-light to-brand-dark rounded-[2rem] rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-500 blur-xl"></div>
                                <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-2 border-white/10 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
                                    <Image
                                        src="/images/profile.jpg"
                                        alt="Profile"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 256px, 320px"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Experience Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-mediun/30 transition-colors">
                        <Code className="h-8 w-8 text-brand-light mb-6" />
                        <h3 className="text-xl font-bold mb-3">{t('engineeringTitle')}</h3>
                        <p className="text-white/60 leading-relaxed">
                            {t('engineeringDesc')}
                        </p>
                    </div>
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-mediun/30 transition-colors">
                        <Heart className="h-8 w-8 text-brand-medium mb-6" />
                        <h3 className="text-xl font-bold mb-3">{t('designTitle')}</h3>
                        <p className="text-white/60 leading-relaxed">
                            {t('designDesc')}
                        </p>
                    </div>
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-mediun/30 transition-colors">
                        <BookOpen className="h-8 w-8 text-brand-dark mb-6" />
                        <h3 className="text-xl font-bold mb-3">{t('philosophyTitle')}</h3>
                        <p className="text-white/60 leading-relaxed">
                            {t('philosophyDesc')}
                        </p>
                    </div>
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-mediun/30 transition-colors">
                        <Award className="h-8 w-8 text-cream mb-6" />
                        <h3 className="text-xl font-bold mb-3">{t('recognitionTitle')}</h3>
                        <ul className="space-y-2 text-white/60">
                            {t.rich('recognitionList', {
                                li: (chunks) => <li>{chunks}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}
