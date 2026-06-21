import { type FormEvent, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import {
  ArrowUp,
  Briefcase,
  Mail,
  Menu,
  Moon,
  Sun,
  Trophy,
  X,
  Layout,
  Server,
  Database,
  Wrench,
  Terminal,
  Cpu,
  Check,
  Phone,
} from 'lucide-react'

const GithubIcon = ({ size = 18, className = '' }: { size?: number; className?: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
)

const LinkedinIcon = ({ size = 18, className = '' }: { size?: number; className?: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const LeetCodeIcon = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
  <svg viewBox="0 0 512 512" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Right hook (yellow/orange) */}
    <path d="M339 326a24 24 0 1 1 34 35l-42 42c-40 39-103 40-143 1l-76-74a99 99 0 0 1-7-139l69-73c36-39 103-43 144-9l62 50a24 24 0 0 1-30 38l-62-50a62 62 0 0 0-79 5l-68 73c-18 19-16 49 5 70l76 74c20 20 54 20 74-1z" fill="#FFA116" />
    {/* Middle bar (light grey) */}
    <path d="M236 284a24 24 0 0 1 0-49h180a24 24 0 0 1 0 49z" fill="#B3B3B3" />
    {/* Left hook (black/dark grey) */}
    <path d="M269 16a24 24 0 1 1 36 33L141 225c-18 19-16 49 5 70l75 74a24 24 0 0 1-34 35l-75-74a99 99 0 0 1-7-139z" fill="#1E1E1E" />
  </svg>
)

const HackerRankIcon = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
  <svg viewBox="0 0 512 512" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Green Hexagon background */}
    <path d="M477.5 128C463 103.05 285.13 0 256.16 0S49.25 102.79 34.84 128s-14.49 230.8 0 256 192.38 128 221.32 128S463 409.08 477.49 384s14.51-231 .01-256z" fill="#2EC866" />
    {/* White HackerRank symbol with arrows */}
    <path d="M316.13 414.22c-4 0-40.91-35.77-38-38.69.87-.87 6.26-1.48 17.55-1.83 0-26.23.59-68.59.94-86.32 0-2-.44-3.43-.44-5.85h-79.93c0 7.1-.46 36.2 1.37 72.88.23 4.54-1.58 6-5.74 5.94-10.13 0-20.27-.11-30.41-.08-4.1 0-5.87-1.53-5.74-6.11.92-33.44 3-84-.15-212.67v-3.17c-9.67-.35-16.38-1-17.26-1.84-2.92-2.92 34.54-38.69 38.49-38.69s41.17 35.78 38.27 38.69c-.87.87-7.9 1.49-16.77 1.84v3.16c-2.42 25.75-2 79.59-2.63 105.39h80.26c0-4.55.39-34.74-1.2-83.64-.1-3.39.95-5.17 4.21-5.2 11.07-.08 22.15-.13 33.23-.06 3.46 0 4.57 1.72 4.5 5.38C333 354.64 336 341.29 336 373.69c8.87.35 17.69 1.84 17.69 1.84 2.88 2.91-33.62 38.69-37.58 38.69z" fill="#FFFFFF" />
  </svg>
)

const CodeChefIcon = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Chef Hat (white/grey) */}
    <path d="M12 2C9.5 2 7.5 3.5 7.1 5.5C5.8 5.8 5 6.8 5 8c0 1.2.8 2.2 2 2.5v1.5h10v-1.5c1.2-.3 2-1.3 2-2.5 0-1.2-.8-2.2-2-2.5C16.5 3.5 14.5 2 12 2z" fill="#F4F4F5" />
    {/* Red Band */}
    <path d="M7 11.5h10v1.5H7z" fill="#D32F2F" />
    {/* Chef Face/Head (brown) */}
    <path d="M8 13.5C8 16.5 10 18.5 12 18.5s4-2 4-5H8z" fill="#A1887F" />
    {/* Eyes */}
    <circle cx="10.5" cy="15" r="0.75" fill="#2D2D2D" />
    <circle cx="13.5" cy="15" r="0.75" fill="#2D2D2D" />
    {/* Cheeks "<" and ">" */}
    <path d="M6.5 15.5l1 1-1 1" stroke="#5D4037" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17.5 15.5l-1 1 1 1" stroke="#5D4037" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    {/* Mustache */}
    <path d="M9.5 16.8c.5.3 1 .3 1.5 0 .5-.3.5-.3 1 0 .5.3 1 .3 1.5 0" stroke="#3E2723" strokeWidth="1" fill="none" strokeLinecap="round" />
  </svg>
)

const GeeksforGeeksIcon = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="#308D46" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078 3.571 3.571 0 0 1-.13-.353h7.418a4.26 4.26 0 0 1-.368 1.008zm-11.99-.654a3.793 3.793 0 0 1-2.134 2.078 4.51 4.51 0 0 1-3.117.016 3.7 3.7 0 0 1-1.104-.695 2.652 2.652 0 0 1-.564-.745 4.221 4.221 0 0 1-.368-1.006H9.59c-.038.12-.08.238-.13.352zm14.501-1.758a3.849 3.849 0 0 0-.082-.475l-9.634-.008a3.932 3.932 0 0 1 1.143-2.348c.363-.35.79-.625 1.26-.809a3.97 3.97 0 0 1 4.484.957l1.521-1.49a5.7 5.7 0 0 0-1.922-1.357 6.283 6.283 0 0 0-2.544-.49 6.35 6.35 0 0 0-2.405.457 6.007 6.007 0 0 0-1.963 1.276 6.142 6.142 0 0 0-1.325 1.94 5.862 5.862 0 0 0-.466 1.864h-.063a5.857 5.857 0 0 0-.467-1.865 6.13 6.13 0 0 0-1.325-1.939A6 6 0 0 0 8.21 6.34a6.698 6.698 0 0 0-4.949.031A5.708 5.708 0 0 0 1.34 7.73l1.52 1.49a4.166 4.166 0 0 1 4.484-.958c.47.184.898.46 1.26.81.368.36.66.792.859 1.268.146.344.242.708.285 1.08l-9.635.008A4.714 4.714 0 0 0 0 12.457a6.493 6.493 0 0 0 .345 2.127 4.927 4.927 0 0 0 1.08 1.783c.528.56 1.17 1 1.88 1.293a6.454 6.454 0 0 0 2.504.457c.824.005 1.64-.15 2.404-.457a5.986 5.986 0 0 0 1.964-1.277 6.116 6.116 0 0 0 1.686-3.076h.273a6.13 6.13 0 0 0 1.686 3.077 5.99 5.99 0 0 0 1.964 1.276 6.345 6.345 0 0 0 2.405.457 6.45 6.45 0 0 0 2.502-.457 5.42 5.42 0 0 0 1.882-1.293 4.928 4.928 0 0 0 1.08-1.783A6.52 6.52 0 0 0 24 12.457a4.757 4.757 0 0 0-.039-.554z"/>
  </svg>
)

const CodeforcesIcon = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Left bar (yellow) */}
    <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5h3z" fill="#FFA900" />
    {/* Middle bar (blue) */}
    <path d="M13.5 3C14.328 3 15 3.672 15 4.5v15c0 .828-.672 1.5-1.5 1.5h-3C9.673 21 9 20.328 9 19.5v-15C9 3.672 9.673 3 10.5 3h3z" fill="#2196F3" />
    {/* Right bar (red) */}
    <path d="M22.5 10.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5V12c0-.828.673-1.5 1.5-1.5h3z" fill="#EF3F3F" />
  </svg>
)

const skillsByCategory = [
  {
    category: 'Frontend',
    icon: Layout,
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    icon: Server,
    items: ['Python (Flask)', 'Java (Swing)', 'JDBC'],
  },
  {
    category: 'Database',
    icon: Database,
    items: ['MySQL', 'MongoDB'],
  },
  {
    category: 'Concepts',
    icon: Cpu,
    items: ['DSA', 'OOP', 'DBMS', 'OS'],
  },
  {
    category: 'Tools',
    icon: Wrench,
    items: ['VS Code', 'Git', 'GitHub'],
  },
  {
    category: 'Other',
    icon: Terminal,
    items: ['C', 'C++', 'Python', 'Java'],
  },
]

const codingProfiles = [
  {
    name: 'LeetCode',
    icon: LeetCodeIcon,
    url: 'https://leetcode.com/u/chandrasekhar_93/',
  },
  {
    name: 'GeeksforGeeks',
    icon: GeeksforGeeksIcon,
    url: 'https://www.geeksforgeeks.org/profile/chandrasekhar_93',
  },
  {
    name: 'CodeChef',
    icon: CodeChefIcon,
    url: 'https://www.codechef.com/users/chandrasek_93',
  },
  {
    name: 'Codeforces',
    icon: CodeforcesIcon,
    url: 'https://codeforces.com/profile/Chandrasekhar_93',
  },
  {
    name: 'HackerRank',
    icon: HackerRankIcon,
    url: 'https://www.hackerrank.com/profile/chandrasekharp22',
  },
]

const projects = [
  {
    title: 'University Examination Hall Allocation & Clash Detection System',
    tech: ['Java Swing', 'JDBC', 'MySQL'],
    description:
      'A smart hall allocation platform that automates scheduling, detects conflicts, and generates reports for academic operations.',
    github: 'https://github.com/Chandrasekhar711',
  },
  {
    title: 'Disaster Management & Emergency Alert System',
    tech: ['Python', 'Flask', 'MySQL', 'Maps API'],
    description:
      'A real-time emergency response platform that helps users report incidents, track alerts, and coordinate disaster response efficiently.',
    github: 'https://github.com/Chandrasekhar711/Disaster-Management-Emergency-Alert-System',
  },
  {
    title: 'Personal Portfolio Website',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    description:
      'A modern, animated portfolio website showcasing skills, projects, certifications, and contact details.',
    github: 'https://github.com/Chandrasekhar711/Portfolio',
  },
]

const certificates = [
  {
    name: 'Excel 2019 Associate',
    url: 'https://1drv.ms/b/c/d0fdfce98b64169a/IQDFmmdyWttxTJfw1MIagEypASqumd0zsFfEUt4qnTnusXE?e=6sEZb7',
  },
  {
    name: 'Power Platform Fundamentals',
    url: 'https://1drv.ms/b/c/d0fdfce98b64169a/IQBGvwPcgN5JQoSOzqn8-KRhAdJwADZTBIusTMNCVcI8wGQ?e=yOQXQy',
  },
  {
    name: 'Oracle Academy Data Foundations - English',
    url: 'https://1drv.ms/b/c/d0fdfce98b64169a/IQA-R66jyeyrTJoBmvH4BdMtAXg5dHOSixBhZVPP-HCZcDI?e=ZjwMpU',
  },
  {
    name: 'Red Hat System Administration II (RH134 - RHA) - Ver. 10',
    url: 'https://1drv.ms/b/c/d0fdfce98b64169a/IQAU0Y45i2NvSaVHIniZs4W9AYt7XpQ9Jr75XzY0tvowZhA?e=XfPTLo',
  },
  {
    name: 'Oracle Academy Java Programming - English',
    url: 'https://1drv.ms/b/c/d0fdfce98b64169a/IQB7v_pGp_r8SZN0YmsbpLkzATtN8T0DjAK_s_gmK3g9P9s?e=Z4qY8Q',
  },
]

const internshipCertificateUrl =
  'https://1drv.ms/b/c/d0fdfce98b64169a/IQCr0udpp33LRLvsI5_G5ev5ASkzw0vhlyNbEmBosZ7Sm4s?e=x8QgJv'

const socials = [
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/Chandrasekhar711' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/chandra-sekhar-pampana/' },
  { icon: Mail, label: 'Email', href: 'mailto:chandrasekharpampana93@gmail.com' },
]

const resumeUrl = 'https://1drv.ms/b/c/d0fdfce98b64169a/IQDkRFfgzdmWQ6m50ZC3xh8eAfetojGS85mukBzEmxp9bfw?e=RPoKgW'



function App() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [darkMode, setDarkMode] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true })
    let rafId = 0

    const frame = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(frame)
    }

    rafId = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    if (!heroRef.current) return

    const ctx = gsap.context(() => {
      gsap.from('.hero-animate', {
        y: 32,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const progress =
        window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      setScrollProgress(Number.isFinite(progress) ? progress : 0)
    }

    window.addEventListener('scroll', onScroll)
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const emailAddress = 'chandrasekharpampana93@gmail.com'

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )

    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`
  }

  const themeClasses = darkMode
    ? 'bg-slate-950 text-slate-50'
    : 'bg-slate-50 text-slate-900'



  const inputClass = darkMode
    ? 'bg-[#05070c] border-slate-800 text-white placeholder:text-slate-500 focus:border-violet-500 focus:ring-1 focus:ring-violet-500'
    : 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-500 focus:border-violet-500 focus:ring-1 focus:ring-violet-500'

  const textTitleClass = darkMode ? 'text-white' : 'text-slate-900'
  const textBodyClass = darkMode ? 'text-slate-300' : 'text-slate-600'
  const textMutedClass = darkMode ? 'text-slate-400' : 'text-slate-500'

  const bgAccentMutedClass = darkMode
    ? 'bg-cyan-400/10 border-cyan-400/30 text-cyan-200'
    : 'bg-cyan-50 border-cyan-200 text-cyan-700'

  const btnSecondaryClass = darkMode
    ? 'border-white/10 bg-white/5 text-white hover:bg-white/10'
    : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100 shadow-sm'

  const headerBgClass = darkMode
    ? 'bg-slate-950/50 border-white/5'
    : 'bg-white/70 border-slate-200/80'

  const navLinkClass = darkMode
    ? 'text-slate-300 hover:text-white'
    : 'text-slate-600 hover:text-slate-900'

  const statsBgClass = darkMode
    ? 'bg-slate-900/30 border border-white/10'
    : 'bg-slate-100/50 border border-slate-200'

  return (
    <div className={`relative overflow-x-hidden transition-colors duration-500 ${themeClasses}`}>
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className={`absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full blur-3xl transition-colors duration-500 ${darkMode ? 'bg-fuchsia-500/10' : 'bg-fuchsia-500/5'}`} />
        <div className={`absolute right-0 top-1/4 h-72 w-72 rounded-full blur-3xl transition-colors duration-500 ${darkMode ? 'bg-cyan-500/10' : 'bg-cyan-500/5'}`} />
        <div className={`absolute left-0 bottom-0 h-80 w-80 rounded-full blur-3xl transition-colors duration-500 ${darkMode ? 'bg-emerald-500/10' : 'bg-emerald-500/5'}`} />
      </div>

      <div
        className="fixed top-0 left-0 z-50 h-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <header className={`fixed top-0 left-0 right-0 z-40 border-b backdrop-blur-2xl transition-colors duration-500 ${headerBgClass}`}>
        <div className="mx-auto flex max-w-7xl items-center px-6 py-4 lg:px-10">
          <a href="#about" className={`font-heading text-lg font-semibold tracking-wide ${textTitleClass}`}>
            CS
          </a>
          <div className="flex flex-1 items-center justify-end gap-6">
            <nav className="hidden gap-6 text-sm md:flex">
              {['About', 'Skills', 'Experience', 'Projects', 'Coding', 'Contact'].map((item) => (
                <a key={item} href={`#${item === 'Coding' ? 'coding' : item.toLowerCase()}`} className={`transition ${navLinkClass}`}>
                  {item}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`rounded-full border p-2.5 transition ${btnSecondaryClass}`}
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`rounded-full border p-2.5 md:hidden transition ${btnSecondaryClass}`}
              >
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`fixed top-[73px] left-0 right-0 z-30 border-b md:hidden shadow-lg overflow-hidden backdrop-blur-2xl transition-colors duration-500 ${
              darkMode ? 'bg-slate-950/95 border-white/5' : 'bg-white/95 border-slate-200'
            }`}
          >
            <nav className="flex flex-col px-6 py-6 gap-4">
              {['About', 'Skills', 'Experience', 'Projects', 'Coding', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item === 'Coding' ? 'coding' : item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-medium py-2 border-b last:border-none transition ${
                    darkMode
                      ? 'border-white/5 text-slate-300 hover:text-white'
                      : 'border-slate-100 text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10">
        <section id="about" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-24 pt-16 lg:px-10">
          <div className="mx-auto max-w-4xl pt-10 text-center">
            <motion.div
              ref={heroRef}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="flex flex-wrap justify-center gap-3">
                <span className={`hero-animate inline-flex items-center rounded-full border px-4 py-1.5 text-xs sm:text-sm font-medium ${bgAccentMutedClass}`}>
                  <span className="mr-2 h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Available for new projects
                </span>
                <span className={`hero-animate inline-flex items-center rounded-full border px-4 py-1.5 text-xs sm:text-sm font-medium ${bgAccentMutedClass}`}>
                  <span className="mr-2 h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Available for internships
                </span>
              </div>
              <h1 className={`hero-animate mt-8 max-w-4xl text-center text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl leading-tight ${textTitleClass}`}>
                HEY , I am Chandra Sekhar
                <br />
                <span className="text-cyan-500">An Aspiring Full Stack Developer</span>
              </h1>
              <p className={`hero-animate mt-8 max-w-3xl text-center text-base leading-relaxed md:text-lg ${textBodyClass}`}>
                I am a Full Stack Developer focused on building scalable web applications with intelligent AI integration. I combine strong Python and database fundamentals, system design thinking, and cloud optimization to create high-performance, real-world solutions.
              </p>
              <div className="hero-animate mt-10 flex flex-col items-center gap-4 w-full max-w-md">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full sm:w-auto text-center rounded-xl border px-8 py-3 text-sm font-semibold transition ${btnSecondaryClass}`}
                >
                  Download Resume
                </a>
                <div className="flex flex-wrap justify-center gap-4 w-full">
                  <a
                    href="#projects"
                    className="flex-1 sm:flex-none text-center rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 hover:opacity-90 transition"
                  >
                    View My Work
                  </a>
                  <a
                    href="#contact"
                    className={`flex-1 sm:flex-none text-center rounded-xl border px-8 py-3 text-sm font-semibold transition ${btnSecondaryClass}`}
                  >
                    Get in Touch
                  </a>
                </div>
              </div>

            </motion.div>
          </div>
        </section>

        <section id="skills" className="px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-500 font-semibold">Skills</p>

            <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {skillsByCategory.map((category) => {
                const Icon = category.icon
                return (
                  <div
                    key={category.category}
                    className={`rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1 ${
                      darkMode
                        ? 'border-white/10 bg-gradient-to-br from-cyan-500/5 via-violet-500/10 to-fuchsia-500/5 hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]'
                        : 'border-slate-200 bg-white hover:border-violet-400 shadow-md shadow-slate-100 hover:shadow-lg'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/5">
                        <Icon size={24} className="text-cyan-500" />
                      </div>
                    </div>
                    <h3 className={`mt-6 text-2xl font-bold tracking-tight ${textTitleClass}`}>
                      {category.category}
                    </h3>
                    <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3">
                      {category.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-200 hover:bg-cyan-500/10 hover:text-cyan-400 group/item"
                        >
                          <Check size={14} className="text-cyan-500 transition-transform group-hover/item:scale-110" />
                          <span className={`text-sm ${textBodyClass} transition-colors group-hover/item:text-cyan-400`}>
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section id="experience" className="px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                darkMode
                  ? 'border-white/10 bg-gradient-to-br from-cyan-500/5 via-violet-500/10 to-fuchsia-500/5 hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]'
                  : 'border-slate-200 bg-white hover:border-violet-400 shadow-md shadow-slate-100 hover:shadow-lg'
              }`}
            >
              <div className="flex items-center gap-2 text-sm text-cyan-500 font-semibold"><Briefcase size={16} /> Experience</div>
              <div className="mt-6 space-y-5">
                {[
                  { title: 'Data Science & Analytics Intern', company: 'Future Interns', date: 'Mar 2026 – Apr 2026' },
                  { title: 'Full Stack Development Intern', company: 'Ava Intern', date: 'May 2026 – June 2026' },
                ].map((item) => (
                  <div
                    key={item.title}
                    className={`rounded-2xl p-4 transition-all duration-300 hover:scale-[1.01] ${statsBgClass} ${
                      darkMode
                        ? 'hover:border-violet-500/40 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]'
                        : 'hover:border-violet-300 hover:shadow-sm'
                    }`}
                  >
                    <p className={`text-sm ${textMutedClass}`}>{item.date}</p>
                    <h3 className={`mt-1 text-lg font-semibold ${textTitleClass}`}>{item.title}</h3>
                    <p className={`mt-1 text-sm ${textBodyClass}`}>{item.company}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="projects" className="px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-500 font-semibold">Projects</p>
            <div className="mt-6 grid gap-6">
              {projects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1 ${
                    darkMode
                      ? 'border-white/10 bg-gradient-to-br from-cyan-500/5 via-violet-500/10 to-fuchsia-500/5 hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]'
                      : 'border-slate-200 bg-white hover:border-violet-400 shadow-md shadow-slate-100 hover:shadow-lg'
                  }`}
                >
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <h3 className={`text-2xl font-semibold ${textTitleClass}`}>{project.title}</h3>
                      <p className={`mt-4 max-w-3xl ${textBodyClass}`}>{project.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className={`rounded-full border px-3 py-1 text-sm ${
                              darkMode
                                ? 'border-white/10 bg-white/5 text-slate-200'
                                : 'border-slate-200 bg-slate-100 text-slate-700'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a
                      href={project.github || '#'}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-500 hover:bg-cyan-500/20 transition whitespace-nowrap"
                    >
                      <GithubIcon size={16} /> GitHub
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="internship" className="px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1 ${
                darkMode
                  ? 'border-white/10 bg-gradient-to-br from-cyan-500/5 via-violet-500/10 to-fuchsia-500/5 hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]'
                  : 'border-slate-200 bg-white hover:border-violet-400 shadow-md shadow-slate-100 hover:shadow-lg'
              }`}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-500 font-semibold">Internship</p>
                  <h2 className={`mt-3 text-3xl font-semibold ${textTitleClass}`}>Data Science & Analytics Intern</h2>
                </div>
                <a
                  href={internshipCertificateUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-500 hover:bg-cyan-500/20 transition whitespace-nowrap"
                >
                  <Trophy size={16} /> Preview
                </a>
              </div>
              <p className={`mt-2 ${textBodyClass}`}>Future Interns</p>
              <p className={`mt-2 text-sm ${textMutedClass}`}>Mar 2026 – Apr 2026</p>
            </motion.div>
          </div>
        </section>

        <section id="certifications" className="px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-500 font-semibold">Certifications</p>
            <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {certificates.map((cert, index) => (
                <motion.a
                  key={cert.name}
                  href={cert.url}
                  target={cert.url !== '#' ? '_blank' : undefined}
                  rel={cert.url !== '#' ? 'noreferrer' : undefined}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className={`block rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                    darkMode
                      ? 'border-white/10 bg-gradient-to-br from-cyan-500/5 via-violet-500/10 to-fuchsia-500/5 hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]'
                      : 'border-slate-200 bg-white hover:border-violet-400 shadow-md shadow-slate-100 hover:shadow-lg'
                  }`}
                >
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${darkMode ? 'bg-white/5' : 'bg-slate-100'}`}>
                    <Trophy size={22} className="text-cyan-500" />
                  </div>
                  <h3 className={`mt-4 text-lg font-semibold ${textTitleClass}`}>{cert.name}</h3>
                  <p className={`mt-2 text-sm ${textMutedClass}`}>Verified achievement</p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        <section id="coding" className="px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-500 font-semibold">Coding</p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
              {codingProfiles.map((profile, index) => {
                const Icon = profile.icon
                return (
                  <motion.a
                    key={profile.name}
                    href={profile.url}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className={`flex flex-col items-center justify-center rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                      darkMode
                        ? 'border-white/10 bg-gradient-to-br from-cyan-500/5 via-violet-500/10 to-fuchsia-500/5 hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]'
                        : 'border-slate-200 bg-white hover:border-violet-400 shadow-md shadow-slate-100 hover:shadow-lg'
                    }`}
                  >
                    <div className={`flex h-20 w-20 items-center justify-center rounded-2xl transition-transform duration-300 ${darkMode ? 'bg-white/5' : 'bg-slate-100'}`}>
                      <Icon size={44} className="transition-transform duration-300" />
                    </div>
                    <h3 className={`mt-4 text-xl font-bold text-center ${textTitleClass}`}>{profile.name}</h3>
                  </motion.a>
                )
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 pb-24 pt-10 lg:px-10">
          <div className={`mx-auto max-w-7xl rounded-3xl border p-8 ${
            darkMode
              ? 'border-white/10 bg-gradient-to-br from-cyan-500/10 via-violet-500/5 to-fuchsia-500/10'
              : 'border-slate-200 bg-white shadow-md'
          }`}>
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="flex flex-col justify-between h-full space-y-8">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-500 font-semibold">Contact</p>
                  <h2 className={`mt-3 text-4xl font-semibold ${textTitleClass}`}>Let’s build something exceptional.</h2>
                  <p className={`mt-4 text-base ${textBodyClass}`}>
                    I'm seeking opportunities to collaborate on projects, join a forward-thinking engineering team, or contribute as a developer intern.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <div className={`p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                    darkMode
                      ? 'bg-slate-900/50 border-white/5 hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]'
                      : 'bg-slate-50 border-slate-200 hover:border-violet-400 shadow-sm hover:shadow-md'
                  }`}>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10">
                        <Briefcase size={20} className="text-cyan-500" />
                      </div>
                      <div>
                        <h4 className={`text-sm font-semibold uppercase tracking-wider text-cyan-500`}>Role Status</h4>
                        <p className={`text-base font-bold ${textTitleClass} mt-0.5`}>Open to Work</p>
                      </div>
                    </div>
                    <p className={`mt-3 text-xs leading-relaxed ${textMutedClass}`}>
                      Actively seeking Full Stack, Frontend, or Backend developer roles. Open to relocation and remote opportunities.
                    </p>
                  </div>

                  <div className={`p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                    darkMode
                      ? 'bg-slate-900/50 border-white/5 hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]'
                      : 'bg-slate-50 border-slate-200 hover:border-violet-400 shadow-sm hover:shadow-md'
                  }`}>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10">
                        <Trophy size={20} className="text-violet-500" />
                      </div>
                      <div>
                        <h4 className={`text-sm font-semibold uppercase tracking-wider text-violet-500`}>Internship</h4>
                        <p className={`text-base font-bold ${textTitleClass} mt-0.5`}>Ready to Work</p>
                      </div>
                    </div>
                    <p className={`mt-3 text-xs leading-relaxed ${textMutedClass}`}>
                      Ready for immediate placement in technical internships. Excited to learn, adapt, and build real-world systems.
                    </p>
                  </div>
                </div>
              </div>
              <form
                onSubmit={handleContactSubmit}
                className={`space-y-6 rounded-3xl border p-8 ${
                  darkMode ? 'border-violet-500/80 bg-slate-900/40' : 'border-violet-400 bg-white shadow-lg shadow-violet-100/50'
                }`}
              >
                <div>
                  <label className={`mb-2 block text-base font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>Your Name</label>
                  <input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full rounded-lg border px-4 py-3 transition ${inputClass}`}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label className={`mb-2 block text-base font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>Your Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full rounded-lg border px-4 py-3 transition ${inputClass}`}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label className={`mb-2 block text-base font-semibold ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>Your Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className={`w-full rounded-lg border px-4 py-3 transition ${inputClass}`}
                    placeholder="Enter your message"
                    required
                  />
                </div>
                <div className="flex justify-center pt-2">
                  <button type="submit" className="px-8 py-2.5 text-base font-semibold text-white bg-violet-600 hover:bg-violet-500 rounded-xl transition shadow-md shadow-violet-600/30">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full bg-slate-950/80 border-t border-white/5 py-12 px-6 lg:px-10 mt-12 text-slate-400 relative z-10">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Social Media</h4>
            <div className="flex items-center gap-4 mt-2">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Contact</h4>
            <div className="flex flex-col gap-2 mt-2">
              <a href="tel:+919701338588" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-200">
                <Phone size={18} className="text-cyan-500" />
                <span>+91 9701338588</span>
              </a>
              <a href={`mailto:${emailAddress}`} className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-200">
                <Mail size={18} className="text-cyan-500" />
                <span>{emailAddress}</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl border-t border-white/5 mt-8 pt-6 text-center text-xs text-slate-500">
          © Copyrights Reserved Chandra Sekhar
        </div>
      </footer>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 z-40 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 p-4 text-white shadow-lg shadow-cyan-500/20"
      >
        <ArrowUp size={18} />
      </button>
    </div>
  )
}

export default App
