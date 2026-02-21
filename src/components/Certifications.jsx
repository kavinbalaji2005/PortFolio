import { motion } from "framer-motion";
import { Award, ExternalLink, CheckCircle, Shield } from "lucide-react";
import TextReveal from "./TextReveal";
import FadeIn from "./FadeIn";
import SpotlightCard from "./SpotlightCard";

export default function Certifications() {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      date: "December 2024",
      verifyUrl:
        "https://www.credly.com/badges/ccf623eb-f3ae-4da1-a35a-54eda07b5e55/public_url",
      logo: "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
      skills: ["Cloud Concepts", "Security", "Billing & Pricing", "Technology"],
    },
  ];

  return (
    <div className="min-h-[80dvh] flex items-center justify-center bg-background px-6 py-16 md:py-24 relative overflow-hidden">
      {/* Background blob */}
      {/* Background blob removed */}
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="max-w-5xl w-full z-10 flex flex-col gap-12 items-center">
        <div className="text-center space-y-4">
          <TextReveal
            text="Credentials"
            as="h2"
            className="text-4xl md:text-6xl font-bold text-white tracking-tight justify-center"
          />
          <FadeIn delay={0.3}>
            <p className="text-text-secondary text-lg">
              Validated expertise in industry standards.
            </p>
          </FadeIn>
        </div>

        {/* Featured certification — full-width horizontal card */}
        {certifications.map((cert, index) => (
          <FadeIn key={index} delay={index * 0.15} className="w-full">
             <SpotlightCard className="w-full bg-black/40 backdrop-blur-xl border-white/10 p-6 sm:p-10">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  {/* Badge */}
                  <div className="shrink-0 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl bg-white/5 p-4 flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <img
                      src={cert.logo}
                      alt={cert.title}
                      loading="lazy"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 space-y-4 text-center md:text-left">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {cert.title}
                      </h3>
                      <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-text-secondary mt-2">
                        <CheckCircle
                          size={14}
                          className="text-secondary"
                          aria-hidden="true"
                        />
                        <span>{cert.issuer}</span>
                        <span className="text-white/20">•</span>
                        <span>Issued: {cert.date}</span>
                      </div>
                    </div>

                    {/* Skills validated */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-white border border-white/10"
                        >
                          <Shield size={10} aria-hidden="true" />
                          {skill}
                        </span>
                      ))}
                    </div>

                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-2 px-6 py-2.5 rounded-full bg-white/10 text-sm font-medium text-white border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
                    >
                      <Award size={16} aria-hidden="true" />
                      Verify Credential
                      <ExternalLink size={12} aria-hidden="true" />
                    </a>
                  </div>
                </div>
             </SpotlightCard>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
