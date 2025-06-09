import React from 'react';
import { ShieldCheck, Search, FileText, AlertTriangle, Cloud, Brain } from 'lucide-react';

const services = [
  {
    title: 'Penetration Testing',
    description:
      'Proactively test your systems to identify and fix exploitable weaknesses before attackers do.',
    icon: ShieldCheck,
  },
  {
    title: 'Security Posture Assessment',
    description:
      'Evaluate your current security framework, policies, and defenses to detect gaps and recommend improvements.',
    icon: Search,
  },
  {
    title: 'Cybersecurity Policies & Procedures',
    description:
      'Develop formal rules and guidelines tailored to your organization\'s needs for consistent, compliant operations.',
    icon: FileText,
  },
  {
    title: 'Vulnerability Assessment & Threat Intelligence',
    description:
      'Scan for known weaknesses and monitor emerging threats to prioritize and act on security risks.',
    icon: AlertTriangle,
  },
  {
    title: 'Cloud & AI Security / MLSecOps',
    description:
      'Specialized protection for cloud environments and AI/ML systems, covering secure deployment, data protection, and best practices.',
    icon: () => (
      <span className="flex gap-2 items-center">
        <Cloud className="w-8 h-8 text-primary-400" />
        <Brain className="w-8 h-8 text-primary-400" />
      </span>
    ),
  },
];

const insights = [
  {
    title: 'Comprehensive Coverage',
    text: 'Rasbyte covers the full security lifecycle—from defensive assessments to offensive testing, policy creation, and emerging tech protection (cloud & AI).',
  },
  {
    title: 'Specialization in Emerging Tech',
    text: 'Our dedicated Cloud & AI security service signals expertise in cutting-edge MLSecOps practices.',
  },
  {
    title: 'Trusted Approach',
    text: 'We offer both proactive (penetration testing, threat intelligence) and structured (policies, posture assessment) services, aligning with industry best practices.',
  },
  {
    title: 'Ideal for Regulated Environments',
    text: 'Policy development adds value for clients bound by compliance standards (e.g. ISO, GDPR).',
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-900 via-primary-800 to-primary-700 pb-20 font-sans">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-r from-primary-700 to-primary-400 mb-16 shadow-lg">
        <h1 className="text-5xl md:text-6xl font-extrabold text-accent-400 mb-4 drop-shadow-lg">Services Offered by Rasbyte</h1>
        <p className="text-xl md:text-2xl text-primary-100 max-w-2xl mx-auto mb-6">
          Comprehensive cybersecurity solutions for modern organizations—proactive, strategic, and tailored to your needs.
        </p>
        <a href="/contact" className="inline-block bg-accent-400 text-primary-900 font-bold px-10 py-4 rounded-full shadow-lg hover:bg-primary-400 hover:text-accent-400 transition-colors text-lg mt-4">
          Request a Proposal
        </a>
      </section>
      {/* Divider */}
      <div className="w-32 h-1 bg-accent-400 rounded-full mx-auto mb-16"></div>
      {/* Services Grid */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-primary-50 p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow flex flex-col items-center gap-4 border-2 border-primary-100 hover:border-accent-400 group"
            >
              <div className="mb-2">
                {typeof service.icon === 'function' && service.title === 'Cloud & AI Security / MLSecOps'
                  ? service.icon()
                  : React.createElement(service.icon, { className: 'w-14 h-14 text-primary-400 group-hover:text-accent-400 transition-colors' })}
              </div>
              <h3 className="text-2xl font-bold text-primary-700 mb-2 text-center group-hover:text-accent-400 transition-colors">{service.title}</h3>
              <p className="text-primary-600 text-base leading-relaxed text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Insights Section */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-gradient-to-r from-primary-100 to-primary-50 rounded-3xl shadow-xl p-10 border border-primary-200">
          <h2 className="text-3xl font-bold text-accent-400 mb-6 flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-accent-400" /> Why Choose Rasbyte?
          </h2>
          <ul className="space-y-5 mb-8">
            {insights.map((insight, idx) => (
              <li key={idx} className="flex gap-3 items-start">
                <span className="mt-1 w-3 h-3 rounded-full bg-accent-400 inline-block"></span>
                <div>
                  <span className="font-semibold text-primary-600">{insight.title}:</span>{' '}
                  <span className="text-primary-700">{insight.text}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="text-primary-800 text-lg">
            <p className="mb-2 font-semibold">Recommended Next Steps</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Decide your priority area: Start with testing your current defenses (penetration testing), or build your security foundation (policies and processes).</li>
              <li>Request a proposal: Ask Rasbyte for a detailed proposal outlining methodology, deliverables, timeline, and pricing for the selected services.</li>
              <li>Clarify scope: For emerging tech like AI/cloud, specify your systems and platforms (e.g. AWS, Azure, ML frameworks).</li>
              <li>Plan integration: Identify how you'll integrate deliverables—e.g., implement policies internally, remediate vulnerabilities post-assessment.</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;