"use client"
import { useState } from "react"
import Link from "next/link"
import styles from "./Header.module.css"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.header + " fixed top-0 left-0 w-full z-50  "}>
      <div
        className={`container ${styles.navContainer} + " mx-auto container md:px-0 px-5 "`}
      >
        <Link href="/" className={styles.logo}>
          Alexei Garban
        </Link>

        {/* Desktop Nav */}
        <nav className={`${styles.desktopNav} mono text-[#f8f8f8] `}>
          <Link href="/">HOME</Link>
          <Link href="/#projects">PROJECTS</Link>
          <Link href="/contact">CONTACT</Link>
          <Link href="/digital">DIGITAL SOVEREIGNTY</Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className={`${styles.menuToggle} mono text-[#f8f8f8]`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "[ CLOSE ]" : "[ MENU ]"}
        </button>

        {/* Mobile Fullscreen Menu */}
        <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
          <nav className={styles.mobileLinks}>
            <Link href="/" onClick={() => setMenuOpen(false)}>
              HOME
            </Link>
            <Link href="/#projects" onClick={() => setMenuOpen(false)}>
              PROJECTS
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              CONTACT
            </Link>
            <Link href="/digital" onClick={() => setMenuOpen(false)}>
              DIGITAL SOVEREIGNTY
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
