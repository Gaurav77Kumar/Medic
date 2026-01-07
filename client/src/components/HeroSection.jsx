import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Lock,
  CheckCircle2,
  ShieldCheck,
  FileLock,
  UserCheck,
} from "lucide-react";

/* Mock data */
const securityFeatures = [
  {
    title: "End-to-End Encryption",
    description: "Your data is encrypted at rest and in transit.",
    icon: ShieldCheck,
  },
  {
    title: "Secure Storage",
    description: "Files stored with industry-grade security.",
    icon: FileLock,
  },
  {
    title: "Access Control",
    description: "You control who sees your data.",
    icon: UserCheck,
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Create Account",
    description: "Sign up securely in minutes.",
  },
  {
    step: 2,
    title: "Upload Records",
    description: "Store all medical files safely.",
  },
  {
    step: 3,
    title: "Share Securely",
    description: "Share access with doctors when needed.",
  },
];


const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
<section className="relative overflow-hidden py-20 md:py-32">
  <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white" />
  <div className="container relative mx-auto px-4">
    <div className="mx-auto max-w-3xl text-center">

      <div className="mb-6 inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm">
        <Lock className="mr-2 h-4 w-4 text-blue-600" />
        <span className="text-gray-500">HIPAA Compliant & Secure</span>
      </div>

      <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
        Your Health Data{" "}
        <span className="text-blue-600">Under Your Control</span>
      </h1>

      <p className="mb-10 text-lg text-gray-500 md:text-xl">
        A secure vault for all your medical records. Upload, organize, and share
        your health information with doctors—on your terms.
      </p>

      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <Link
          to="/auth"
          className="flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-lg font-medium text-white hover:bg-blue-700 transition"
        >
          Start Your Vault
          <ArrowRight className="h-5 w-5" />
        </Link>

        <Link
          to="/auth"
          className="rounded-md border border-gray-300 px-6 py-3 text-lg text-gray-700 hover:bg-gray-100 transition"
        >
          See How It Works
        </Link>
      </div>

      {/* Trust badges */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-green-600" />
          <span>256-bit Encryption</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-green-600" />
          <span>HIPAA Compliant</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-green-600" />
          <span>SOC 2 Certified</span>
        </div>
      </div>

    </div>
  </div>
</section>

{/* Security Section */}
<section className="py-20 md:py-28">
  <div className="container mx-auto px-4">
    <div className="mx-auto mb-16 max-w-2xl text-center">
      <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
        Security First, Always
      </h2>
      <p className="text-lg text-gray-500">
        Your medical data deserves the highest level of protection.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-3">
      {securityFeatures.map((feature) => (
        <div
          key={feature.title}
          className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
            <feature.icon className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="mb-2 text-lg font-semibold text-gray-900">
            {feature.title}
          </h3>
          <p className="text-gray-500">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* How It Works */}
<section className="bg-gray-50 py-20 md:py-28">
  <div className="container mx-auto px-4">
    <div className="mx-auto mb-16 max-w-2xl text-center">
      <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
        How It Works
      </h2>
      <p className="text-lg text-gray-500">
        Get started in minutes. No complex setup required.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-3">
      {howItWorks.map((step) => (
        <div
          key={step.step}
          className="rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm"
        >
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-2xl font-bold text-white">
            {step.step}
          </div>
          <h3 className="mb-2 text-lg font-semibold text-gray-900">
            {step.title}
          </h3>
          <p className="text-gray-500">{step.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* CTA */}
<section className="py-20 md:py-28">
  <div className="container mx-auto px-4">
    <div className="mx-auto max-w-4xl rounded-3xl bg-blue-600 p-8 text-center md:p-16">
      <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
        Take Control of Your Health Data Today
      </h2>
      <p className="mb-8 text-lg text-white/90">
        Free to start. No credit card required.
      </p>

      <Link
        to="/auth"
        className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-lg font-medium text-blue-600 hover:bg-gray-100 transition"
      >
        Start Your Vault — It's Free
        <ArrowRight className="h-5 w-5" />
      </Link>
    </div>
  </div>
</section>

    </>
  );
};

export default HeroSection;
