import { useState } from 'react';
import { Calendar, Banknote, FileText, CheckCircle, Shield, Users, Zap, Clock, ChevronDown, Heart, Globe } from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';

export default function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      setSubmitted(true);
      setEmail('');
    } else {
      alert('Something went wrong. Please try again.');
    }
  } catch (error) {
    alert('Something went wrong. Please try again.');
  }
};

 

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Section */}
      <section className="relative px-4 py-10 md:py-16 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50/30 -z-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-100/20 to-transparent -z-10"></div>

        <div className="max-w-6xl mx-auto relative">
          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left Side - Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-[1.1] tracking-tight">
                Turn Your Available Hours Into High-Paying Patient Consultations
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                Set your availability, accept home visit consultations, and get paid per patient — without admin or long-term commitments.
              </p>

              {/* Benefits - Enhanced Visual Style */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur rounded-xl px-5 py-4 shadow-sm border border-blue-100">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Choose When and Where You Work</h3>
                    <p className="text-sm text-gray-600">Offer in-person or virtual consultations on your schedule</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/80 backdrop-blur rounded-xl px-5 py-4 shadow-sm border border-blue-100">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <Banknote className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Paid Per Patient</h3>
                    <p className="text-sm text-gray-600">Clear earnings per consultation</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/80 backdrop-blur rounded-xl px-5 py-4 shadow-sm border border-blue-100">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Zero Admin</h3>
                    <p className="text-sm text-gray-600">We handle logistics and coordination</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Email Capture Card */}
            <div className="relative md:mt-0">
              <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-100">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Start the Conversation</h2>
                <p className="text-gray-600 mb-6">
                  Register your interest and our team will reach out with next steps, including qualification verification and onboarding details.
                </p>

                
              
                  <form onSubmit={handleSubmit} className="space-y-3">
                  
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                      />
                      <div className="mt-2 space-y-1">
                        <p className="text-sm text-gray-500 text-center">No commitment required</p>
                        <p className="text-xs text-gray-400 text-center">For qualified healthcare professionals only</p>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#2563EB] text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-[1.02]"
                    >
                      Register Interest
                    </button>
                  </form>
                
                  <div className="text-center py-6">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">You're on the list!</h3>
                    <p className="text-gray-600 text-lg">We'll be in touch soon with early access details.</p>
                  </div>
                
              </div>

              {/* Professional Note - Below Form */}
              <div className="mt-4 text-center">
                <div className="inline-flex items-center gap-2 bg-gray-50 text-gray-600 px-4 py-2 rounded-lg border border-gray-200">
                  <Shield className="w-4 h-4" />
                  <span className="text-sm">Onboarding managed personally by our team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">How it works</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 text-center border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-200">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Register & verify</h3>
              <p className="text-gray-600">
                Submit your details and we'll guide you through qualification verification and onboarding.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 text-center border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-200">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Set your availability</h3>
              <p className="text-gray-600">
                Define your schedule and preferred consultation types — in-person or virtual.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 text-center border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-200">
                <Banknote className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Provide care & get paid</h3>
              <p className="text-gray-600">
                Connect with patients, deliver quality consultations, and receive transparent compensation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Doctors Are Choosing Doc2Door - Merged Section */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Why doctors are choosing Doc2Door</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 bg-[#F8FAFC] rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Work When and Where You Choose</h3>
                <p className="text-gray-600">Flexible work that fits your lifestyle — in-person or virtual</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-[#F8FAFC] rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                <Banknote className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Paid Per Patient</h3>
                <p className="text-gray-600">Clear, transparent earnings per consultation</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-[#F8FAFC] rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Zero Admin</h3>
                <p className="text-gray-600">We handle scheduling, routing, and coordination</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-[#F8FAFC] rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">No Long-Term Contracts</h3>
                <p className="text-gray-600">Total flexibility with no commitments</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-[#F8FAFC] rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md transition-shadow md:col-span-2">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Direct Patient Access</h3>
                <p className="text-gray-600">Connect with patients in your area who need care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="px-4 py-20 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Our Story Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            </div>

            <div className="space-y-5 text-lg text-gray-700 leading-relaxed max-w-3xl">
              <p>
                Doc2Door was founded by doctors who saw firsthand how many qualified professionals were being left without opportunities in an increasingly constrained healthcare system.
              </p>

              <p>
                <strong>We believe your skills should not be limited by hospital capacity or rigid structures.</strong>
              </p>

              <p>
                Our mission is to put the power of care back in your hands — giving you the ability to work on your terms, connect directly with patients, and be fairly compensated for your time.
              </p>
            </div>
          </div>

          {/* Our Vision Card */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-50/50 rounded-xl shadow-sm border border-blue-100 p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
            </div>

            <div className="space-y-5 text-lg text-gray-700 leading-relaxed max-w-3xl">
              <p>
                <strong>Our vision is to build a nationwide network that brings care to every corner of the country</strong> — while giving doctors more freedom than ever before.
              </p>

              <p>
                As we grow, we're expanding into telehealth and digital care, unlocking even more flexible ways for you to practice and earn, while improving access for patients everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Frequently asked questions</h2>

          <Accordion.Root type="single" collapsible className="space-y-4">
            <Accordion.Item value="item-1" className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <Accordion.Header>
                <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors group">
                  <span className="font-bold text-gray-900 text-lg pr-4">How does payment work?</span>
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-6 pb-6 text-gray-600">
                Doctors are paid per completed consultation with clear, upfront rates. You'll see exactly what you'll earn before accepting any consultation, and payments are processed quickly after each visit.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-2" className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <Accordion.Header>
                <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors group">
                  <span className="font-bold text-gray-900 text-lg pr-4">What kind of consultations will I do?</span>
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-6 pb-6 text-gray-600">
                Doctors can provide a combination of home visits, in-person consultations, and, as the platform expands, virtual telehealth consultations depending on availability and location.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-3" className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <Accordion.Header>
                <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors group">
                  <span className="font-bold text-gray-900 text-lg pr-4">Do I choose when I work?</span>
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-6 pb-6 text-gray-600">
                Yes, you set your availability and accept only the consultations you want. There's complete flexibility to work around your existing commitments.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-4" className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <Accordion.Header>
                <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors group">
                  <span className="font-bold text-gray-900 text-lg pr-4">Is there a long-term commitment?</span>
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-6 pb-6 text-gray-600">
                No — completely flexible with no contracts. You can take on as many or as few consultations as you like, with no minimum requirements.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-5" className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <Accordion.Header>
                <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors group">
                  <span className="font-bold text-gray-900 text-lg pr-4">How long does onboarding take?</span>
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-6 pb-6 text-gray-600">
                Verification is completed within 24 hours so you can start quickly. We streamline the process to get you up and running with minimal hassle.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-6" className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <Accordion.Header>
                <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors group">
                  <span className="font-bold text-gray-900 text-lg pr-4">Will this add admin to my workload?</span>
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-6 pb-6 text-gray-600">
                No — we handle scheduling, routing, and patient coordination. You focus on providing excellent care while we take care of the logistics.
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-4 py-20 bg-gradient-to-br from-[#2563EB] via-blue-600 to-[#1e40af] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1),_transparent_50%)]"></div>
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Ready to join our network?
          </h2>
          <p className="text-xl text-blue-100 mb-2">
            Register your interest and we'll guide you through the next steps.
          </p>

          
            <form onSubmit={handleSubmit} className="space-y-3">
            
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-5 py-4 rounded-xl focus:outline-none focus:ring-4 focus:ring-white/50 text-lg shadow-xl border-2 border-white/80 focus:border-white transition-all"
                />
                <button
                  type="submit"
                  className="bg-white text-[#2563EB] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 whitespace-nowrap"
                >
                  Register Interest
                </button>
              </div>
              <p className="text-blue-100 text-sm mt-4">
                No commitment required • For healthcare professionals only
              </p>
            </form>
          
            <div className="mt-8 bg-white/10 backdrop-blur rounded-2xl p-10 border border-white/20">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                <CheckCircle className="w-10 h-10 text-[#2563EB]" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">You're on the list!</h3>
              <p className="text-blue-100 text-lg">We'll be in touch soon with early access details.</p>
            </div>
          
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 bg-gray-900 text-center">
        <p className="text-gray-400 text-sm">
          © 2026 Doc2Door. Built for doctors in South Africa.
        </p>
      </footer>
    </div>
  );
}
