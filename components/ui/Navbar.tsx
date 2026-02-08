"use client";

import { Link, usePathname, useRouter } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { Home, User, Briefcase, Mail } from "lucide-react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState, useRef, useTransition } from "react";
import { useTranslations, useLocale } from "next-intl";

export default function Navbar() {
    const pathname = usePathname();
    const { scrollY } = useScroll();
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);

    // i18n
    const t = useTranslations('Navbar');
    const locale = useLocale();
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    // Minimum scroll amount to trigger change (prevents jitter)
    const SCROLL_THRESHOLD = 10;

    useMotionValueEvent(scrollY, "change", (latest) => {
        // Only trigger on desktop (width > 768px check could be done via window.matchMedia, 
        // but simple way is to check inside, or let CSS handle layout while JS handles logic.
        // For strictly disabling the logic on mobile in JS:
        if (typeof window !== "undefined" && window.innerWidth < 768) {
            if (!isVisible) setIsVisible(true);
            return;
        }

        const delta = latest - lastScrollY.current;

        // At the very top, always show
        if (latest < 50) {
            setIsVisible(true);
        } else if (Math.abs(delta) > SCROLL_THRESHOLD) {
            // Scroll Down -> Hide
            if (delta > 0) {
                setIsVisible(false);
            }
            // Scroll Up -> Show
            else {
                setIsVisible(true);
            }
        }

        lastScrollY.current = latest;
    });

    const navItems = [
        { name: t('home'), href: "/", icon: Home },
        { name: t('projects'), href: "/projects", icon: Briefcase },
        { name: t('about'), href: "/about", icon: User },
        { name: t('contact'), href: "/contact", icon: Mail },
    ];

    const toggleLanguage = () => {
        const nextLocale = locale === 'en' ? 'id' : 'en';
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    };

    return (
        <>
            {/* Desktop Hover Trigger Zone - only visible on md+ */}
            <div
                className="fixed bottom-0 left-0 w-full h-8 z-[49] hidden md:block"
                onMouseEnter={() => setIsVisible(true)}
            />

            <motion.nav
                className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
                initial={{ y: 0 }}
                animate={{
                    y: isVisible ? 0 : 120, // Slide down to hide
                    opacity: isVisible ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/50 p-2 backdrop-blur-xl shadow-lg shadow-black/20">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300",
                                    isActive
                                        ? "bg-brand-medium text-white shadow-md shadow-brand-medium/20 scale-110"
                                        : "text-white/50 hover:bg-white/10 hover:text-white"
                                )}
                            >
                                <Icon className="h-5 w-5" />
                                <span className="sr-only">{item.name}</span>
                                {isActive && (
                                    <span className="absolute -bottom-8 text-[10px] font-medium tracking-wide text-brand-light opacity-0 animate-in fade-in slide-in-from-top-1 whitespace-nowrap">
                                        {item.name}
                                    </span>
                                )}
                            </Link>
                        );
                    })}

                    {/* Separator */}
                    <div className="h-6 w-px bg-white/10 mx-1" />

                    {/* Language Toggle */}
                    <button
                        onClick={toggleLanguage}
                        disabled={isPending}
                        className={cn(
                            "relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 text-xs font-bold font-mono tracking-tighter disabled:opacity-50",
                            locale === 'id'
                                ? "bg-brand-dark/50 text-brand-light border border-brand-light/20"
                                : "text-white/50 hover:bg-white/10 hover:text-white"
                        )}
                        aria-label="Toggle Language"
                    >
                        {locale.toUpperCase()}
                        {/* Tooltip for Lang */}
                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-sans font-medium tracking-wide text-white/40 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block">
                            {locale === 'en' ? 'EN' : 'ID'}
                        </span>
                    </button>

                </div>
            </motion.nav>
        </>
    );
}
