import { Code, Sparkles, GraduationCap } from "lucide-react";

export default function AboutPortfolio() {
  return (
    <section id="about" className="relative w-full py-20 md:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-geist bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] bg-clip-text text-4xl md:text-5xl font-bold tracking-tighter text-transparent mb-4">
            About Me
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative mx-auto">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-[2px] bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-neutral-900">
                <img
                  src="/ProfilePic.png"
                  alt="Kavin Balaji S"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                  Engineering Student & Tech Enthusiast
                </h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate Engineering student, with a strong focus on
                software development and cloud computing. My journey in
                technology is driven by curiosity and a desire to create
                innovative solutions that make a difference. I enjoy exploring
                emerging technologies.
              </p>
            </div>

            {/* Education Card */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-teal-900/20 p-6 shadow-xl backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                  <h4 className="text-xl font-semibold text-blue-300">
                    Education
                  </h4>
                </div>
                <div className="space-y-2">
                  <p className="text-lg font-medium text-white">
                    B.Tech in Computer and Communication Engineering
                  </p>
                  <p className="text-md text-blue-400 font-medium">
                    Amrita Vishwa Vidyapeetham, Coimbatore
                  </p>
                  <p className="text-sm text-gray-400">2023 - 2027</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
