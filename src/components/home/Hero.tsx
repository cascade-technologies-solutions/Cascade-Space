import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
export function Hero() {
  return <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden py-[63px]">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] rounded-full bg-cascade-100 blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] rounded-full bg-cascade-200 blur-3xl opacity-30"></div>
      </div>

      <Container>
        <div className="max-w-4xl mx-auto text-center">
          

          <h1 className="font-display font-bold text-slate-900 animate-fade-in [animation-delay:150ms]">
            Transforming Ideas into{" "}
            <span className="relative inline-block">
              <span className="text-cascade-600">Digital Solutions</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-cascade-600/30 rounded-full"></span>
            </span>
          </h1>

          <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto animate-fade-in [animation-delay:300ms] text-balance">
            Cascade Space builds intelligent software, websites, apps, and AI-driven
            platforms to enhance productivity and scalability for businesses
            and entrepreneurs.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:450ms]">
            <Button as={Link} to="/services" size="lg">
              Explore Services
            </Button>
            <Button as={Link} to="/contact" variant="outline" size="lg">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in [animation-delay:600ms]">
          <div className="glass-card p-6 group hover:shadow-md transition-all duration-300">
            <div className="h-12 w-12 rounded-full bg-cascade-100 flex items-center justify-center text-cascade-600 mb-4 group-hover:bg-cascade-600 group-hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900">Digital Transformation</h3>
            <p className="mt-2 text-slate-600">
              Establish a powerful online presence with websites, apps, and automation tools.
            </p>
          </div>

          <div className="glass-card p-6 group hover:shadow-md transition-all duration-300">
            <div className="h-12 w-12 rounded-full bg-cascade-100 flex items-center justify-center text-cascade-600 mb-4 group-hover:bg-cascade-600 group-hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900">Startup Ecosystem</h3>
            <p className="mt-2 text-slate-600">
              Connect founders with investors and resources through platforms like Startopia.
            </p>
          </div>

          <div className="glass-card p-6 group hover:shadow-md transition-all duration-300">
            <div className="h-12 w-12 rounded-full bg-cascade-100 flex items-center justify-center text-cascade-600 mb-4 group-hover:bg-cascade-600 group-hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900">AI & Smart Solutions</h3>
            <p className="mt-2 text-slate-600">We build intelligent systems that automate processes, unlock data insights, and drive significant ROI.</p>
          </div>

          <div className="glass-card p-6 group hover:shadow-md transition-all duration-300">
            <div className="h-12 w-12 rounded-full bg-cascade-100 flex items-center justify-center text-cascade-600 mb-4 group-hover:bg-cascade-600 group-hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900">Design & Branding</h3>
            <p className="mt-2 text-slate-600">
              Create intuitive UI/UX, branding, and marketing materials aligned with business goals.
            </p>
          </div>
        </div>
      </Container>
    </section>;
}