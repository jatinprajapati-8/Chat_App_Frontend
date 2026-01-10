import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)]">
            {/* Left Content */}
            <div className="text-white space-y-6 order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Connect With Friends Instantly
              </h2>
              <p className="text-lg md:text-xl text-white/90">
                Experience seamless communication with our modern chat
                application. Fast, secure, and easy to use.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-50 transition duration-200 shadow-lg">
                  Get Started
                </button>
                <button className="bg-transparent text-white px-8 py-3 rounded-lg font-semibold text-lg border-2 border-white hover:bg-white/10 transition duration-200">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Content - Chat Preview */}
            <div className="order-1 md:order-2">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20">
                <div className="space-y-4">
                  {/* Chat Message 1 */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex-shrink-0"></div>
                    <div className="bg-white/90 rounded-2xl rounded-tl-none p-3 max-w-xs">
                      <p className="text-gray-800 text-sm">
                        Hey! How are you doing?
                      </p>
                    </div>
                  </div>

                  {/* Chat Message 2 */}
                  <div className="flex items-start gap-3 justify-end">
                    <div className="bg-blue-600 rounded-2xl rounded-tr-none p-3 max-w-xs">
                      <p className="text-white text-sm">
                        I'm great! Just checking out this amazing chat app 🚀
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex-shrink-0"></div>
                  </div>

                  {/* Chat Message 3 */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex-shrink-0"></div>
                    <div className="bg-white/90 rounded-2xl rounded-tl-none p-3 max-w-xs">
                      <p className="text-gray-800 text-sm">
                        It looks super clean! 😍
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 md:px-8 lg:px-16 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose Our Chat App?
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Feature 1 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition duration-200">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">
                Lightning Fast
              </h4>
              <p className="text-white/80">
                Send and receive messages instantly with our optimized
                infrastructure.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition duration-200">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">
                Secure & Private
              </h4>
              <p className="text-white/80">
                End-to-end encryption keeps your conversations safe and private.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition duration-200">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">
                Cross Platform
              </h4>
              <p className="text-white/80">
                Access your chats from any device, anywhere, anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* About section */}
      <section>
        <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 pt-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto py-12">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                About Chat App
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Connecting people through seamless and secure communication
              </p>
            </div>

            {/* Mission Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-10 mb-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                Our Mission
              </h2>
              <p className="text-white/90 text-lg leading-relaxed">
                We believe that communication should be simple, fast, and
                secure. Our mission is to provide a platform where people can
                connect with their friends, family, and colleagues without any
                barriers. We're committed to building the best chat experience
                possible.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/20">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Built for Everyone
                </h3>
                <p className="text-white/80">
                  Whether you're chatting with friends or collaborating with a
                  team, our app is designed to work for everyone, everywhere.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/20">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Privacy First
                </h3>
                <p className="text-white/80">
                  Your conversations are protected with end-to-end encryption.
                  We don't store or read your messages - your privacy is our
                  priority.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/20">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Lightning Fast
                </h3>
                <p className="text-white/80">
                  Experience instant message delivery with our optimized
                  infrastructure. No lag, no delays - just pure speed.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/20">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Cross Platform
                </h3>
                <p className="text-white/80">
                  Access your chats from any device. Desktop, mobile, or tablet
                  - your conversations sync seamlessly across all platforms.
                </p>
              </div>
            </div>

            {/* Team Section */}
            {/* <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-10 mb-8 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full mx-auto mb-4"></div>
              <h4 className="text-xl font-semibold text-white mb-1">Sarah Johnson</h4>
              <p className="text-white/70">CEO & Founder</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full mx-auto mb-4"></div>
              <h4 className="text-xl font-semibold text-white mb-1">Michael Chen</h4>
              <p className="text-white/70">CTO</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mx-auto mb-4"></div>
              <h4 className="text-xl font-semibold text-white mb-1">Emily Rodriguez</h4>
              <p className="text-white/70">Lead Designer</p>
            </div>
          </div>
        </div> */}

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
                Join thousands of users who are already enjoying seamless
                communication
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-50 transition duration-200">
                  Sign Up Now
                </button>
                <button className="bg-transparent text-white px-8 py-3 rounded-lg font-semibold text-lg border-2 border-white hover:bg-white/10 transition duration-200">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-md text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/80">
            &copy; 2024 Chat App. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
