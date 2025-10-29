// Team Members placeholder
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import TeamGrid from "../components/TeamGrid";
import TeamVoices from "../components/TeamVoices";
import ContactSection from "../components/ContactSection";

import styles from "./team.module.css";

export default function TeamPage() {
  return (
    <>
      <Head>
        <title>Team</title>
        <meta name="description" content="Our Team" />
      </Head>

      <div className="min-h-screen bg-[#0b0f14] text-slate-100">
        <Navbar />

        <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-16">
          {/* Hero */}
          <header className={styles.hero}>
            <h1 className={styles.heroTitle}>Meet our team</h1>
            <p className={styles.heroSub}>
              Passionate students building innovative digital solutions through
              collaborative projects
            </p>
          </header>

          {/* Section intro */}
          <p className={styles.kicker}>Innovators</p>
          <h2 className={styles.sectionTitle}>Our team</h2>
          <p className={styles.sectionSub}>
            Dedicated students transforming ideas into powerful digital experiences
          </p>

          {/* Team grid */}
          <TeamGrid />

          {/* Voices */}
          <section className="mt-16 text-center">
            <h2 className="text-3xl font-extrabold">Team voices</h2>
            <p className="mt-2 text-slate-300">
              Insights from our passionate student innovators
            </p>
            <TeamVoices />
          </section>

          {/* Contact */}
          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  );
}
