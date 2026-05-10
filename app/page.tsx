import Hero from "@/components/home/Hero";
import Footer from "@/components/shared/Footer";
import WhatsAppFloat from "@/components/shared/WhatsAppFloat";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />
        
        {/* Placeholder for subsequent sections */}
        <div className="py-24 bg-white text-center">
          <div className="container mx-auto px-6">
            <h2 className="font-serif text-3xl lg:text-4xl text-ink-900 mb-4 italic">
              &ldquo;New collections arriving soon...&rdquo;
            </h2>
            <p className="text-ink-600 font-accent text-xl">
              Stay tuned for Durga Puja 2026 Lookbook
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
