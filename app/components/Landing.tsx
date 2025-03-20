"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mic, Ear, MessageCircle, ChevronRight } from "lucide-react";
import { Jomhuria } from "next/font/google";

const jomhuria = Jomhuria({ subsets: ["latin"], weight: "400" });
export default function Home() {
  return (
    <div className="bg-gradient-to-b from-black to-purple-900 min-h-screen text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6">
        <div className="flex flex-col items-center">
          <Image src="/logo.svg" alt="Kraftwave Logo" width={80} height={80} />
          <p className={`text-4xl -mt-5 text-white ${jomhuria.className}`}>
            KRAFTWAVE
          </p>
        </div>

        <div className="hidden md:flex space-x-6 mr-30">
          <a href="#" className="hover:text-gray-300 mr-10">
            Features
          </a>
          <a href="#" className="hover:text-gray-300 mr-10">
            Blog
          </a>
          <a href="#" className="hover:text-gray-300 mr-10">
            FAQ&apos;s
          </a>
          <Button className="bg-purple-600 px-4 py-2 rounded-full">
            <a href="http://localhost:5173/">Sign Up</a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center mt-12 px-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Unleashing the power of <br />
          <span className="bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent">
            Artificial Intelligence
          </span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-300">
          Embracing the age of Artificial Intelligence. Discover the boundless
          Potential and impact of AI in every sphere of life...
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <Button className="bg-purple-600 px-6 py-3">Get Started</Button>
          <Button className="bg-gray-800 px-6 py-3 border border-gray-600">
            Watch Demo
          </Button>
        </div>
        <div className="mt-10 flex justify-center">
          <Image
            src="/image.png"
            alt="AI Concept"
            width={700}
            height={400}
            className="rounded-xl"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-20 px-6">
        <h2 className="text-center text-3xl font-bold">
          Elevate your <span className="text-purple-400">conversations</span>
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <FeatureCard
            icon={Mic}
            title="Text-To-Speech"
            description="Prompt AI with space bar to get responses."
          />
          <FeatureCard
            icon={Ear}
            title="Audio Conversations"
            description="Start AI conversations hands-free."
          />
          <FeatureCard
            icon={MessageCircle}
            title="Audio Cues"
            description="AI gives written responses for hearing-impaired users."
          />
        </div>
      </section>

      {/* Blogs Section */}
      <section className="mt-20 px-6 pb-20">
        <h2 className="text-center text-3xl font-bold">
          KRAFTWAVE <span className="text-purple-400">Blogs</span>
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <BlogCard
            image="/blog1.png"
            title="Latest AI Technology"
            description="This is the latest AI and it is favorable for who you are and what ever disability you have."
          />
          <BlogCard
            image="/blog2.png"
            title="Kraftwave AI"
            description="This is the latest AI and it is favorable for who you are and what ever disability you have."
          />
          <BlogCard
            image="/blog3.png"
            title="AI"
            description="We believe our research will eventually lead to artificial general intelligence, a system that can solve human-level problems."
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 pb-20">
        <h2 className="text-center text-3xl font-bold">
          Frequently Asked Questions (FAQ&apos;s)
        </h2>
        <div className="mt-10 max-w-2xl mx-auto space-y-4">
          <FAQItem
            question="Do you need to pay to access this AI’s services?"
            answer="KRAFTWAVE AI is free and does not require payment to access it."
          />
          <FAQItem
            question="How do I contact the support?"
            answer="You can contact support via our website contact form."
          />
          <FAQItem
            question="Can I cancel my session?"
            answer="Yes, you can cancel your session anytime from your dashboard."
          />
          <FAQItem
            question="What technologies were used to make this AI?"
            answer="Our AI is built using cutting-edge machine learning and neural network frameworks."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center px-6 pb-20">
        <h2 className="text-3xl font-bold">Want to Get Started Now?</h2>
        <Button className="mt-6 bg-purple-600 px-6 py-3">Get Started</Button>
      </section>

      {/* Footer Section */}
     <footer className="text-gray-300 p-10 mt-10 bg-gradient-to-b from-purple-900 to-black">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-6 gap-12">
        {/* Logo Section */}
        <div className="flex flex-col items-center self-start ml-2">
          <Image src="/logo.svg" alt="Kraftwave Logo" width={80} height={80} />
          <p className="text-4xl -mt-5 text-white font-jomhuria">KRAFTWAVE</p>
        </div>

        {/* Feedback Form */}
        <div className="md:col-span-1 flex items-center space-x-2">
          <form className="space-y-4">
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Email"
                className="w-1/2 p-2 bg-gray-200 text-black rounded"
              />
              <input
                type="text"
                placeholder="Name"
                className="w-1/2 p-2 bg-gray-200 text-black rounded"
              />
            </div>
            <textarea
              placeholder="Write your feedback here"
              className="w-full p-2 bg-gray-200 text-black rounded h-24"
            ></textarea>
            <button className="bg-gradient-to-r from-purple-500 to-orange-400 px-6 py-2 rounded w-full">
              Send Feedback
            </button>
          </form>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-bold">LINKS</h3>
          <ul>
            <li>Features</li>
            <li>Blog</li>
            <li>FAQ&apos;s</li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="font-bold">COMPANY</h3>
          <ul>
            <li>Careers</li>
            <li>About</li>
            <li>Developers</li>
          </ul>
        </div>

        {/* Terms and Policies */}
        <div>
          <h3 className="font-bold">TERMS AND POLICIES</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Cookie Policies</li>
          </ul>
        </div>

        {/* Feedback Section */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-center">
            Send Us Your Feedback
          </h3>
        </div>
      </div>
    </footer>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ComponentType<{ size: number }>;
  title: string;
  description: string;
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-gray-900 p-6 rounded-2xl w-72 text-center shadow-md border border-gray-700">
      <div className="text-purple-400 mb-4 mx-auto">
        <Icon size={40} />
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-400 text-sm mt-2">{description}</p>
      <button className="mt-4 text-purple-400 flex items-center justify-center gap-2 hover:text-purple-300">
        Explore more <ChevronRight size={16} />
      </button>
    </div>
  );
}

interface BlogCardProps {
  image: string;
  title: string;
  description: string;
}

function BlogCard({ image, title, description }: BlogCardProps) {
  return (
    <div className="bg-gray-900 p-6 rounded-2xl w-72 text-center shadow-md border border-gray-700">
      <Image
        src={image}
        alt={title}
        width={250}
        height={150}
        className="rounded-xl"
      />
      <h3 className="text-lg font-bold mt-4">{title}</h3>
      <p className="text-gray-400 text-sm mt-2">{description}</p>
      <button className="mt-4 text-purple-400 flex items-center justify-center gap-2 hover:text-purple-300">
        Explore more <ChevronRight size={16} />
      </button>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 cursor-pointer">
      <details>
        <summary className="font-bold text-lg text-purple-400">
          {question}
        </summary>
        <p className="text-gray-400 mt-2">{answer}</p>
      </details>
    </div>
  );
}
