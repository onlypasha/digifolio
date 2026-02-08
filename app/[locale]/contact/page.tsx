import Navbar from "@/components/ui/Navbar";
import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Contact() {
    const t = useTranslations('Contact');

    return (
        <main className="min-h-screen bg-[#0a0a0a] bg-noise text-cream p-4 md:p-8 pb-32 flex flex-col justify-center">
            <Navbar />

            <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Info */}
                <div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 whitespace-pre-line">
                        {t.rich('title', {
                            highlight: (chunks) => <span className="text-brand-light">{chunks}</span>
                        })}
                    </h1>
                    <p className="text-xl text-white/60 mb-12 max-w-md">
                        {t('subtitle')}
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 group">
                            <div className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-medium group-hover:text-white transition-colors">
                                <Mail className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-xs uppercase text-white/40 font-bold tracking-widest">{t('emailLabel')}</p>
                                <p className="text-lg">onlypasha7@outlook.co.id</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-medium group-hover:text-white transition-colors">
                                <Phone className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-xs uppercase text-white/40 font-bold tracking-widest">{t('phoneLabel')}</p>
                                <p className="text-lg">+62 856 9511 8600</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-medium group-hover:text-white transition-colors">
                                <MapPin className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-xs uppercase text-white/40 font-bold tracking-widest">{t('locationLabel')}</p>
                                <p className="text-lg">{t('locationValue')}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Form */}
                <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-light/10 blur-3xl -z-10" />

                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium ml-1">{t('formName')}</label>
                            <input type="text" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-medium transition-colors" placeholder={t('namePlaceholder')} />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium ml-1">{t('formEmail')}</label>
                            <input type="email" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-medium transition-colors" placeholder={t('emailPlaceholder')} />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium ml-1">{t('formMessage')}</label>
                            <textarea className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 h-32 resize-none focus:outline-none focus:border-brand-medium transition-colors" placeholder={t('messagePlaceholder')} />
                        </div>
                        <button type="button" className="w-full bg-brand-medium text-white font-bold py-4 rounded-xl hover:bg-brand-light transition-colors shadow-lg shadow-brand-medium/20">
                            {t('sendButton')}
                        </button>
                    </form>
                </div>

            </div>
        </main>
    );
}
