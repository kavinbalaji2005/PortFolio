import { Award, ExternalLink, CheckCircle } from "lucide-react";
import TiltCard from "./TiltCard";

export default function CertificationsPortfolio() {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      date: "December 2024",
      credentialId: "ccf623eb-f3ae-4da1-a35a-54eda07b5e55",
      verifyUrl:
        "https://www.credly.com/badges/ccf623eb-f3ae-4da1-a35a-54eda07b5e55/public_url",
      logo: "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
      color: "from-orange-500 to-yellow-500",
    },
  ];

  return (
    <section id="certifications" className="relative w-full py-20 md:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-geist bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] bg-clip-text text-4xl md:text-5xl font-bold tracking-tighter text-transparent mb-4">
            Certifications
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400"></div>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Professional certifications and achievements
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <TiltCard
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-neutral-900/80 hover:scale-105"
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              <div className="relative p-6 space-y-4">
                {/* Badge Image */}
                <div className="flex justify-center">
                  <div className="relative w-32 h-32 rounded-xl overflow-hidden bg-white/5 p-4">
                    <img
                      src={cert.logo}
                      alt={cert.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-400 transition-all">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <p className="text-sm text-gray-400">{cert.issuer}</p>
                </div>

                {/* Date */}
                <p className="text-sm text-gray-500 text-center">
                  Issued: {cert.date}
                </p>

                {/* Verify Button */}
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl border border-white/10 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 text-sm font-medium text-white hover:border-orange-500/50 hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-yellow-500/20 transition-all"
                >
                  <Award className="w-4 h-4" />
                  Verify Credential
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Decorative corner gradient */}
              <div
                className={`absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br ${cert.color} opacity-20 blur-2xl group-hover:opacity-30 transition-opacity`}
              ></div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
