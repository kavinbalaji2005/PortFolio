import { motion } from "framer-motion";
import { Award, ExternalLink, CheckCircle, Shield } from "lucide-react";
import TextReveal from "./TextReveal";
import FadeIn from "./FadeIn";
import SpotlightCard from "./SpotlightCard";

export default function Certifications() {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner CLF-C02",
      issuer: "Amazon Web Services (AWS)",
      date: "December 2025",
      verifyUrl:
        "https://www.credly.com/badges/ccf623eb-f3ae-4da1-a35a-54eda07b5e55/public_url",
      logo: "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
    },
  ];

  return (
    <div className="min-h-[70dvh] flex items-center justify-center bg-background px-6 py-16 md:py-24 relative overflow-hidden">
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="max-w-5xl w-full z-10 flex flex-col gap-12 items-center">
        <div className="text-center space-y-4">
          <TextReveal
            text="Certifications"
            as="h2"
            mode="word"
            className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight justify-center"
          />
          <FadeIn delay={0.3}>
            <p className="text-white/60 text-base font-light">
              Industry-recognized.
            </p>
          </FadeIn>
        </div>

        {/* Featured certification */}
        {certifications.map((cert, index) => (
          <FadeIn key={index} delay={index * 0.15} className="w-full">
            <SpotlightCard
              className="w-full bg-white/[0.01] backdrop-blur-xl border border-white/20 hover:border-white/40 p-6 sm:p-10 transition-all duration-300"
              spotlightColor="rgba(255, 153, 0, 0.05)"
            >
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                {/* Badge */}
                <div className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl bg-white/[0.02] p-4 flex items-center justify-center border border-white/12">
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
                    <h3 className="text-xl md:text-2xl font-display font-bold text-white/90">
                      {cert.title}
                    </h3>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-white/60 mt-2">
                      <CheckCircle
                        size={12}
                        className="text-secondary/60"
                        aria-hidden="true"
                      />
                      <span>{cert.issuer}</span>
                      <span className="text-white/20">•</span>
                      <span>Issued: {cert.date}</span>
                    </div>
                  </div>

                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="Verify"
                    className="inline-flex items-center gap-2 mt-2 px-5 py-2 rounded-full bg-white/[0.04] text-xs font-medium text-white/70 border border-white/[0.1] hover:bg-white hover:text-black hover:border-white transition-all duration-500"
                  >
                    <Award size={14} aria-hidden="true" />
                    Verify Credential
                    <ExternalLink size={10} aria-hidden="true" />
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
