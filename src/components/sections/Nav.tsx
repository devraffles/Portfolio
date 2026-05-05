'use client';

import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { navLinks } from '@/data/nav';
import Logo from '@/assets/logo/Logo.svg';

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex max-w-2xl items-center justify-between px-6 py-5 sm:px-12"
        aria-label="Navegação principal"
      >
        <a
          href="#"
          className="flex items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green rounded-sm"
          aria-label="Rafael Giorgi — Início"
        >
          <Image src={Logo} alt="Logo RG" width={64} height={64} />
        </a>

        <div className="hidden items-center gap-6 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs tracking-widest uppercase text-muted transition-colors duration-200 hover:text-porto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div
            className="flex items-center gap-1.5 text-xs tracking-wider text-green"
            aria-label="Status: disponível para oportunidades"
          >
            <motion.div
              className="h-1.5 w-1.5 rounded-full bg-green"
              animate={shouldReduce ? {} : { opacity: [1, 0.3, 1] }}
              transition={shouldReduce ? { duration: 0 } : { duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span className="hidden sm:inline">disponível</span>
          </div>

          <button
            className="text-porto sm:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <motion.div
          id="mobile-nav"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="border-b border-border bg-bg/95 backdrop-blur-md px-6 pb-6 sm:hidden"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xs tracking-widest uppercase text-muted transition-colors hover:text-porto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}
