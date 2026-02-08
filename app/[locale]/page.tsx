'use client'

import BentoCard from "@/components/ui/BentoCard";
import Navbar from "@/components/ui/Navbar";
import { ArrowUpRight, Globe, Zap, Code, ShieldCheck, Briefcase, User, Mail } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Snowfall } from "react-snowfall";
import { useState, useEffect } from "react";

export default function Home() {
  const t = useTranslations('Home');
  const [isWinter, setIsWinter] = useState(false);

  useEffect(() => {
    const month = new Date().getMonth();
    // Winter months: December (11), January (0), February (1)
    if (month === 11 || month === 0 || month === 1) {
      setIsWinter(true);
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a0a] bg-noise text-cream p-4 md:p-8 md:pb-32 selection:bg-brand-light/30 overflow-hidden relative">
      {isWinter && <Snowfall />}
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-dark/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-medium/10 rounded-full blur-[100px] -z-10" />

      {/* Navbar for Mobile/Desktop access */}
      <Navbar />

      {/* Header Section */}
      <header className="mb-12 flex items-center justify-between py-6 max-w-7xl mx-auto w-full">
        <h1 className="text-2xl font-bold tracking-tight">
          Abdee<span className="text-brand-light">Pasha</span>
        </h1>
        <div className="text-xs font-mono text-white/40">{t('headerSubtitle')}</div>
      </header>

      {/* BENTO GRID LAYOUT */}
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[160px] lg:auto-rows-[180px]">

        {/* 1. Hero Title Card (Span 2 col, 2 row) */}
        <div className="md:col-span-2 md:row-span-2">
          <BentoCard className="bg-gradient-to-br from-brand-dark/40 to-transparent !border-brand-light/20">
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="inline-flex items-center rounded-full border border-brand-light/30 bg-brand-light/10 px-3 py-1 text-xs text-brand-light mb-6">
                  <span className="mr-2 h-1.5 w-1.5 animate-pulse rounded-full bg-brand-light"></span>
                  {t('available')}
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter whitespace-pre-line">
                  {t.rich('heroTitle', {
                    highlight: (chunks) => <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-cream">{chunks}</span>
                  })}
                </h2>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/50 mt-4">
                <Globe className="h-4 w-4 text-brand-light" />
                <span>{t('location')}</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span>UTC+7</span>
              </div>
            </div>
          </BentoCard>
        </div>

        {/* 2. Stats/About Link Card (Span 1 col, 1 row) */}
        <div className="md:col-span-1 md:row-span-1">
          <Link href="/about" className="h-full block">
            <BentoCard delay={0.1} className="flex flex-col justify-center items-center text-center group cursor-pointer hover:bg-white/10">
              <User className="h-8 w-8 text-brand-medium mb-2 group-hover:scale-110 transition-transform" />
              <p className="text-sm font-bold uppercase tracking-widest text-white">{t('aboutTitle')}</p>
              <p className="text-xs text-white/50 mt-1">{t('aboutDesc')}</p>
            </BentoCard>
          </Link>
        </div>

        {/* 3. Projects Link Card (Span 1 col, 2 row) */}
        <div className="md:col-span-1 md:row-span-2">
          <Link href="/projects" className="h-full block">
            <BentoCard delay={0.2} className="group cursor-pointer hover:bg-white/10">
              <div className="flex flex-col justify-between h-full">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-brand-light to-brand-dark flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-brand-dark/20">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{t('projectsTitle')}</h3>
                    <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {t('projectsDesc')}
                  </p>
                </div>
              </div>
            </BentoCard>
          </Link>
        </div>

        {/* 4. Contact Link Card (Span 1 col, 1 row) */}
        <div className="md:col-span-1 md:row-span-1">
          <Link href="/contact" className="h-full block">
            <BentoCard delay={0.3} className="!bg-cream !border-cream group relative overflow-hidden cursor-pointer">
              <div className="h-full w-full flex flex-col justify-between relative z-10 text-black">
                <div className="flex justify-between items-start">
                  <span className="font-bold text-lg">{t('contactTitle')}</span>
                  <Mail className="h-6 w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest opacity-60">{t('contactAction')}</span>
              </div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-brand-light/20 rounded-full blur-xl group-hover:bg-brand-light/40 transition-colors" />
            </BentoCard>
          </Link>
        </div>

        {/* 5. Wide Bottom Card: Tech Stack (Span 2 col, 1 row) */}
        <div className="md:col-span-2 md:row-span-1">
          <BentoCard delay={0.4} className="flex items-center">
            <div className="flex items-center gap-6 w-full">
              <div className="p-4 rounded-2xl bg-brand-dark/20 text-brand-light shrink-0">
                <Zap className="h-8 w-8" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-white">{t('techStack')}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['Next.js', 'Laravel', 'Flutter', 'Java', 'MySql', 'Sql Server'].map((tag) => (
                    <span key={tag} className="text-[10px] uppercase font-bold px-2 py-1 rounded bg-white/5 border border-white/5 text-white/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </BentoCard>
        </div>

        {/* 6. Security/Trust Card (Span 1 col, 1 row) */}
        <div className="md:col-span-1 md:row-span-1">
          <BentoCard delay={0.5} className="flex flex-col justify-center gap-3">
            <div className="flex items-center gap-2 text-brand-light">
              <ShieldCheck className="h-5 w-5" />
              <span className="font-semibold text-sm">{t('cleanCodeTitle')}</span>
            </div>
            <p className="text-xs text-white/50 leading-relaxed">
              {t('cleanCodeDesc')}
            </p>
          </BentoCard>
        </div>

        {/* 7. Code Snippet Card (Span 1 col, 1 row) */}
        <div className="md:col-span-1 md:row-span-1">
          <BentoCard delay={0.6} className="!p-0 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
            <div className="p-4 opacity-50 font-mono text-[10px] leading-relaxed text-brand-light/80 select-none group-hover:opacity-80 transition-opacity">
              <p>{"<Suspense fallback="}</p>
              <p className="pl-2">{"<Loading />"}</p>
              <p>{">"}</p>
              <p className="pl-2">{"<Portfolio />"}</p>
              <p>{"</Suspense>"}</p>
            </div>
            <div className="absolute bottom-4 left-5 z-20 flex items-center gap-2">
              <Code className="h-4 w-4 text-cream" />
              <span className="text-xs font-bold text-cream">{t('modernStack')}</span>
            </div>
          </BentoCard>
        </div>

      </div>
    </main>
  );
}