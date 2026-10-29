import { useState } from 'react';
import type { FormEvent } from 'react';
import { portfolioData } from '../data/portfolio';
import {
  MapPin,
  Send,
  Copy,
  Check,
  AlertCircle,
  CheckCircle2,
  Phone,
  ArrowUpRight,
} from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './Icons';

export function ContactSection() {
  const { personal, socialLinks } = portfolioData;

  const linkedin = socialLinks.find(
    (social) => social.platform === 'LinkedIn'
  );

  const github = socialLinks.find(
    (social) => social.platform === 'GitHub'
  );

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setError('Please fill in all required fields (Name, Email, and Message).');
      return;
    }

    setError(null);
    setSubmitted(false);

    const subject = encodeURIComponent(
      formData.subject.trim() ||
        `Portfolio Inquiry from ${formData.name.trim()}`
    );

    const body = encodeURIComponent(
      `Hi Preetom,\n\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}\n`
    );

    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#060709] text-[#F3F3F5] border-b border-white/10 relative overflow-hidden">
      {/* Background Subtle Grid Lines from Reference Video */}
      <div className="absolute inset-0 bg-grid-lines opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Video Frame 1:53 */}
        <div className="mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-tag bg-white/5 border border-white/10 text-[#C5A059]">
            <span>✦</span>
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-tight max-w-4xl">
            LET&apos;S CREATE SOMETHING{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5C882] via-[#C5A059] to-[#F5E6B8]">
              MEANINGFUL.
            </span>
          </h2>
          
          <p className="text-sm sm:text-base text-[#95949C] max-w-2xl leading-relaxed">
            Have an internship opportunity, a project collaboration, or simply want to talk about data science and generative AI? I&apos;d love to hear from you.
          </p>
        </div>

        {/* Contact Layout matching Video Frame 1:55 - 1:57 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Pill Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#0F1015] border border-white/10 hover:border-[#C5A059]/40 transition-all shadow-md">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono-tag uppercase tracking-widest text-[#7C7B84]">
                  DIRECT EMAIL
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 text-xs font-mono-tag text-[#C5A059] hover:underline cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${personal.email}`}
                className="mt-2 block font-mono-tag text-sm sm:text-base font-bold text-white hover:text-[#E5C882] transition-colors break-all"
              >
                {personal.email}
              </a>
              <p className="mt-1 text-xs text-[#7C7B84]">
                Preetom checks his inbox regularly for professional inquiries.
              </p>
            </div>

            {/* LinkedIn Card */}
            {linkedin?.isAvailable && (
              <a
                href={linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#0F1015] border border-white/10 hover:border-[#C5A059]/40 transition-all flex items-center justify-between group shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#0A66C2]">
                    <LinkedInIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-tag uppercase tracking-widest text-[#7C7B84] block">
                      PROFESSIONAL NETWORK
                    </span>
                    <span className="font-mono-tag text-xs sm:text-sm font-bold text-white group-hover:text-[#E5C882] transition-colors">
                      Preetom Saha on LinkedIn
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#7C7B84] group-hover:text-white transition-colors" />
              </a>
            )}

            {/* GitHub Card */}
            {github?.isAvailable && (
              <a
                href={github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#0F1015] border border-white/10 hover:border-[#C5A059]/40 transition-all flex items-center justify-between group shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white">
                    <GitHubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-tag uppercase tracking-widest text-[#7C7B84] block">
                      OPEN SOURCE
                    </span>
                    <span className="font-mono-tag text-xs sm:text-sm font-bold text-white group-hover:text-[#E5C882] transition-colors">
                      github.com/preetomsaha-07
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#7C7B84] group-hover:text-white transition-colors" />
              </a>
            )}

            {/* Phone & Location */}
            <div className="p-5 rounded-2xl bg-[#0F1015] border border-white/10 space-y-3 shadow-md">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <a
                  href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                  className="font-mono-tag text-xs sm:text-sm font-bold text-white hover:text-[#E5C882]"
                >
                  {personal.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                <MapPin className="w-4 h-4 text-[#C5A059]" />
                <span className="font-mono-tag text-xs text-[#95949C]">
                  {personal.location}
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Dark Minimalist Form matching Video Frame 1:55 */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-[#0F1015] border border-white/10 shadow-2xl">
              
              <h3 className="font-display text-2xl uppercase tracking-tight text-white">
                Send a Direct Message
              </h3>
              <p className="mt-1 text-xs font-mono-tag text-[#7C7B84]">
                Submitting this form prepares your message directly into your email client.
              </p>

              {error && (
                <div className="mt-4 p-3 rounded-xl bg-red-950/40 border border-red-800 text-xs text-red-300 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{error}</span>
                </div>
              )}

              {submitted && (
                <div className="mt-4 p-3 rounded-xl bg-emerald-950/40 border border-emerald-800 text-xs text-emerald-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>Your email client was opened with the drafted message to <strong>{personal.email}</strong>.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono-tag uppercase tracking-wider text-[#95949C] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jane Doe"
                      className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-[#5E5D66] focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono-tag uppercase tracking-wider text-[#95949C] mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-[#5E5D66] focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono-tag uppercase tracking-wider text-[#95949C] mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Internship Opportunity / Data Science Project"
                    className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-[#5E5D66] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono-tag uppercase tracking-wider text-[#95949C] mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-[#5E5D66] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[11px] font-mono-tag text-[#7C7B84]">
                    Direct dispatch: {personal.email}
                  </span>

                  {/* High contrast pill button matching Video Frame 1:55 */}
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-xs font-mono-tag font-bold bg-white text-black hover:bg-[#E5C882] transition-colors shadow-lg cursor-pointer"
                  >
                    <span>SEND MESSAGE</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
