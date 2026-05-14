import Footer from "@/components/shared/Footer";
import WhatsAppFloat from "@/components/shared/WhatsAppFloat";
import Image from "next/image";
import { SITE } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Meet Susmita Chakraborty Deb, the founder of Rahi's Collection, and discover our philosophy of quality, craftsmanship, and family values in Silchar.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <main className="flex-grow">
        {/* Founder Section */}
        <div className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white">
                   <Image 
                    src="/owner.png" 
                    alt="Susmita Chakraborty Deb - Founder of Rahi's Collection" 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                    quality={100}
                    className="object-cover"
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-rahi-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute -top-10 -left-10 w-72 h-72 bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 -translate-y-1/2 -right-6 h-32 w-32 border-4 border-rahi-red-100 rounded-full hidden md:block"></div>
              </div>
              
              <div>
                <span className="text-rahi-red-500 font-bold tracking-[0.2em] uppercase text-sm mb-6 block">The Heart of Rahi's</span>
                <h1 className="font-serif text-5xl md:text-6xl text-ink-900 mb-6">Meet Susmita</h1>
                <p className="text-xl font-accent text-rahi-red-600 mb-8 italic">Susmita Chakraborty Deb · Founder & Visionary</p>
                
                <div className="space-y-6 text-ink-600 text-lg leading-relaxed">
                  <p>
                    For Susmita, Rahi's Collection is more than just a boutique—it's a tribute to the vibrant spirit of Silchar. With a keen eye for timeless elegance and a passion for community, she founded this space in 2018 to bridge the gap between traditional heritage and modern style.
                  </p>
                  <p>
                    Growing up surrounded by the rich textiles and colors of Assam, Susmita envisioned a storefront where every family—from the trend-setting student to the graceful matriarch—could find something that makes them feel extraordinary.
                  </p>
                  <p className="font-serif italic text-2xl text-ink-900 pt-4">
                    &ldquo;I wanted to create a place that feels like home, where every saree tells a story and every customer leaves with a smile.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Founder's Vision */}
        <div className="py-24 bg-ink-900 text-white relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <h2 className="font-serif text-4xl md:text-5xl mb-10">Our Philosophy</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-rahi-red-400 font-bold uppercase tracking-widest text-xs mb-4">Empowerment</h3>
                  <p className="text-sky-100/70 text-lg">
                    Susmita believes that fashion is a form of self-expression that empowers individuals to lead with confidence in their daily lives.
                  </p>
                </div>
                <div>
                  <h3 className="text-rahi-red-400 font-bold uppercase tracking-widest text-xs mb-4">Craftsmanship</h3>
                  <p className="text-sky-100/70 text-lg">
                    We prioritize handpicked materials and artisans who respect the integrity of every thread, ensuring your garments last for generations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Subtle background text */}
          <div className="absolute -bottom-6 md:-bottom-10 right-0 font-serif text-8xl md:text-[15rem] opacity-5 select-none pointer-events-none italic leading-none">
            Susmita
          </div>
        </div>

        {/* Values Section */}
        <div className="py-24 bg-sky-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl text-ink-900 mb-4">Why Rahi's?</h2>
              <div className="h-1 w-24 bg-rahi-red-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-sky-100 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-rahi-red-50 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="font-serif text-2xl text-ink-900 mb-4">Curated Quality</h3>
                <p className="text-ink-600">
                  Every piece in our shop is personally selected for its fabric quality, craftsmanship, and trendiness.
                </p>
              </div>
              
              <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-sky-100 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-sky-50 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="font-serif text-2xl text-ink-900 mb-4">Family First</h3>
                <p className="text-ink-600">
                  We are a family business, and we treat every customer like one of our own. Your satisfaction is our pride.
                </p>
              </div>
              
              <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-sky-100 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">💎</span>
                </div>
                <h3 className="font-serif text-2xl text-ink-900 mb-4">Local Trust</h3>
                <p className="text-ink-600">
                  Located in Ghungoor for years, we have built a foundation of trust with the Silchar community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
