import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
const About = () => {
  return <div className="min-h-screen flex flex-col">
      <Navbar className="py-0" />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-cascade-50 border border-cascade-100 text-cascade-700 text-sm font-medium animate-fade-in">About Cascade Space</div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 animate-fade-in [animation-delay:150ms]">
                Empowering Businesses Through Technology & Innovation
              </h1>
              <p className="mt-6 text-xl text-slate-600 animate-fade-in [animation-delay:300ms]">
                We build smart digital solutions that enhance productivity, efficiency,
                and scalability for individuals, startups, and enterprises.
              </p>
            </div>
          </Container>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1 animate-slide-in">
                <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-cascade-50 border border-cascade-100 text-cascade-700 text-sm font-medium">
                  Our Mission
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                  Simplifying Complex Challenges Through Technology
                </h2>
                <p className="mt-4 text-lg text-slate-600">At CascadeTech Solutions, we are dedicated to enabling businesses to grow, innovate, and scale with cost-effective, high-quality technology solutions. We believe that technology should be accessible and empowering.</p>
                <p className="mt-4 text-lg text-slate-600">
                  Our mission is to transform complex technical challenges into 
                  simple, elegant solutions that drive real business outcomes.
                </p>
                <div className="mt-8">
                  <Button as={Link} to="/contact">
                    Work With Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="order-1 lg:order-2 animate-slide-in [animation-delay:300ms]">
                <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-md">
                  <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" alt="Our Mission" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-slate-50">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-white border border-slate-200 text-cascade-700 text-sm font-medium">
                Our Values
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                The Principles That Guide Us
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                These core values shape our approach to every project and client relationship.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 animate-scale-in [animation-delay:150ms]">
                <div className="h-14 w-14 rounded-xl bg-cascade-50 flex items-center justify-center text-cascade-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Innovation</h3>
                <p className="mt-3 text-slate-600">
                  We embrace new technologies and approaches to solve challenging 
                  problems with creative, forward-thinking solutions.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 animate-scale-in [animation-delay:300ms]">
                <div className="h-14 w-14 rounded-xl bg-cascade-50 flex items-center justify-center text-cascade-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Scalability</h3>
                <p className="mt-3 text-slate-600">
                  We design and build solutions that can grow and adapt with 
                  your business, from startup to enterprise scale.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 animate-scale-in [animation-delay:450ms]">
                <div className="h-14 w-14 rounded-xl bg-cascade-50 flex items-center justify-center text-cascade-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Empowerment</h3>
                <p className="mt-3 text-slate-600">
                  We create technology that empowers users and businesses to 
                  achieve more, work smarter, and reach their full potential.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Future Vision */}
        <section className="py-16 md:py-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="animate-slide-in">
                <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-md">
                  <img src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" alt="Our Vision" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="animate-slide-in [animation-delay:300ms]">
                <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-cascade-50 border border-cascade-100 text-cascade-700 text-sm font-medium">
                  Future Vision
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                  Becoming a Global Tech Powerhouse
                </h2>
                <p className="mt-4 text-lg text-slate-600">We're building toward a future where CascadeTech Solutions delivers global-level technology solutions with real impact across multiple sectors.</p>
                <p className="mt-4 text-lg text-slate-600">
                  Our vision includes expansion into renewable energy, trading platforms, 
                  robotics, and infrastructure—creating technologies that shape a 
                  better world for businesses and communities alike.
                </p>
                <div className="mt-8">
                  <Button as={Link} to="/contact" variant="outline">
                    Join Our Journey <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>;
};
export default About;