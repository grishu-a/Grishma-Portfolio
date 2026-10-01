import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Recommendations from "@/components/Recommendations";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { education, profile, siteUrl } from "@/lib/data";

// Structured data so search engines can identify who this site is about.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  image: `${siteUrl}${profile.photo}`,
  jobTitle: profile.role.replace(" | ", " · "),
  description: profile.tagline,
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Sydney", addressRegion: "NSW", addressCountry: "AU" },
  sameAs: [profile.socials.linkedin],
  worksFor: { "@type": "CollegeOrUniversity", name: "Macquarie University" },
  alumniOf: education.map((item) => ({ "@type": "CollegeOrUniversity", name: item.school })),
  knowsAbout: ["Product delivery", "Project management", "Fintech", "Payments", "Cross-border payments"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <div className="band">
          <About />
        </div>
        <Projects />
        <div className="band">
          <Experience />
        </div>
        <Recommendations />
        <div className="band">
          <Skills />
        </div>
        <Education />
        <div className="band">
          <Certifications />
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
