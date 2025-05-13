"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { usePathname } from 'next/navigation'

export default function Page() {
  const [scrollY, setScrollY] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-gradient-to-br from-blue-400/20 via-purple-300/30 to-indigo-200/20 blur-3xl animate-pulse" />
        <div className="absolute left-0 top-96 h-80 w-80 rounded-full bg-gradient-to-tr from-purple-200/30 to-pink-200/20 blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute right-40 bottom-20 h-64 w-64 rounded-full bg-gradient-to-bl from-blue-100/20 to-indigo-300/20 blur-3xl animate-pulse" style={{ animationDelay: "4s" }} />
      </div>

      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 20 ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4 mt-1">
            <Link href="/" className="flex items-center">
              <Image
                src="logos/Signiture_Black.png"
                alt="Trillion Labs"
                width={100}
                height={28}
                className="h-5 w-auto"
                priority
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              ABOUT
            </Link>
            <Link href="/products" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              PRODUCTS
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              CONTACT US
            </Link>
            <button className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              EN
            </button>
          </div>
          
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="flex flex-col space-y-1.5 md:hidden z-50"
          >
            <span className={`h-0.5 w-6 bg-black transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`h-0.5 w-6 bg-black transition-all ${menuOpen ? "opacity-0" : "opacity-100"}`}></span>
            <span className={`h-0.5 w-6 bg-black transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>
        
        {/* Mobile menu */}
        <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <Link href="/about" className="text-xl font-medium" onClick={() => setMenuOpen(false)}>
              ABOUT
            </Link>
            <Link href="/products" className="text-xl font-medium" onClick={() => setMenuOpen(false)}>
              PRODUCTS
            </Link>
            <Link href="/contact" className="text-xl font-medium" onClick={() => setMenuOpen(false)}>
              CONTACT US
            </Link>
            <button className="text-xl font-medium">
              EN
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative pt-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero section */}
          <div className="min-h-[90vh] flex flex-col justify-center">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="relative">
                  <div className="absolute -left-4 -top-4 w-20 h-20 bg-blue-100 rounded-full opacity-50 blur-md" />
                  <h1 className="text-5xl md:text-7xl font-light leading-tight tracking-tight relative">
                    <span className="block opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
                      EMPOWERING
                    </span>
                    <span className="block opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
                      THE WORLD
                    </span>
                    <span className="block opacity-0 animate-fade-in-up" style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}>
                      WITH AI
                    </span>
                    <span className="block opacity-0 animate-fade-in-up" style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}>
                      FOR EVERYONE.
                    </span>
                  </h1>
                </div>
                
                <div className="opacity-0 animate-fade-in" style={{ animationDelay: "1.8s", animationFillMode: "forwards" }}>
                  <Button 
                    variant="outline" 
                    className="rounded-full border-2 border-black px-8 py-6 text-sm font-medium hover:bg-black hover:text-white transition-all duration-300"
                  >
                    EXPLORE TRILLION-7B
                  </Button>
                  <p className="mt-8 text-sm leading-relaxed text-gray-600">
                    KOREA'S MOST POWERFUL
                    <br />
                    FOUNDATION MODEL
                  </p>
                </div>
              </div>
              
              <div className="relative hidden md:block">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-purple-50 rounded-3xl transform rotate-6 scale-95" />
                <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden p-6">
                  <Image
                    src="frontier.jpeg"
                    alt="AI Frontier"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-xl object-cover"
                    priority
                  />
                  <div className="mt-4 space-y-3">
                    <div className="space-y-4">
                      {/* <div className="h-2 rounded-full w-3/4 bg-gradient-to-r from-gray-50 to-gray-100" />
                      <div className="h-2 rounded-full w-1/2 bg-gradient-to-r from-gray-50 to-gray-100" />
                      <div className="h-2 rounded-full w-5/6 bg-gradient-to-r from-gray-50 to-gray-100" /> */}
                      <p className="text-xs text-gray-500 leading-relaxed">
                        Trillion-7B-preview achieves superior performance efficiency, reaching 66.5% average performance with just ~9.3×10²² FLOPs, outperforming other similar-sized models while competing with models requiring 3-8× more compute.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-end mt-16 opacity-0 animate-fade-in" style={{ animationDelay: "2.2s", animationFillMode: "forwards" }}>
              <div className="flex items-center space-x-4 group cursor-pointer">
                <span className="text-sm font-medium">WHO WE ARE</span>
                <span className="h-px w-12 bg-black transform transition-all group-hover:w-20 group-hover:bg-blue-500" />
                <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* About section */}
          <div className="py-24">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="relative">
                  <div className="absolute -left-6 -top-6 w-full h-full border-2 border-gray-200 rounded-xl" />
                  <div className="relative bg-white shadow-lg rounded-xl p-8">
                    <div className="space-y-6 text-sm leading-relaxed text-gray-600">
                      <p className="text-lg">
                        Our first step is building the most powerful Foundation Model (LLM) in Korea. We are strongly supported by leading VCs in Korea and US including Strong Ventures, Kakao Ventures, and Bass Investment.
                      </p>
                      <p>
                        Trillion Labs is at the forefront of AI innovation, developing cutting-edge language models that bridge cultural and linguistic divides while pushing the boundaries of what's possible with artificial intelligence.
                      </p>
                    </div>
                    
                    <div className="mt-8 flex space-x-4">
                      <Button className="rounded-full bg-black hover:bg-blue-600 text-white px-8 py-6 text-sm">
                        JOIN OUR TEAM
                      </Button>
                      <Button variant="outline" className="rounded-full border-2 border-gray-200 px-8 py-6 text-sm">
                        LEARN MORE
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 md:order-2 space-y-8">
                <h2 className="text-3xl md:text-4xl font-light">Building the future of AI in Korea</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">01</div>
                    <div>
                      <h3 className="font-medium">Advanced Foundation Models</h3>
                      <p className="text-sm text-gray-600">State-of-the-art language models that understand Korean nuance</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">02</div>
                    <div>
                      <h3 className="font-medium">Innovative Applications</h3>
                      <p className="text-sm text-gray-600">Practical AI solutions for businesses and consumers</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">03</div>
                    <div>
                      <h3 className="font-medium">Global Collaboration</h3>
                      <p className="text-sm text-gray-600">Working with partners worldwide to advance AI technology</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Partners section */}
          <div className="py-20 border-t border-gray-200">
            <h2 className="text-center text-2xl font-light mb-12">Trusted By Leading Investors</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-75">
              <div className="flex items-center justify-center p-4">
                <div className="h-12 w-full bg-gray-200 rounded-md" />
              </div>
              <div className="flex items-center justify-center p-4">
                <div className="h-12 w-full bg-gray-200 rounded-md" />
              </div>
              <div className="flex items-center justify-center p-4">
                <div className="h-12 w-full bg-gray-200 rounded-md" />
              </div>
              <div className="flex items-center justify-center p-4">
                <div className="h-12 w-full bg-gray-200 rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <Image
                src="logos/Signiture_Black.png"
                alt="Trillion Labs"
                width={100}
                height={24}
                className="h-6 w-auto mb-6"
                priority
              />
              <p className="text-sm text-gray-500 max-w-xs">
                Trillion Labs is pioneering the future of AI in Korea with advanced language models and innovative applications.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><Link href="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
                <li><Link href="/careers" className="hover:text-blue-600 transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Products</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><Link href="/trillion-7b" className="hover:text-blue-600 transition-colors">Trillion-7B</Link></li>
                <li><Link href="/api" className="hover:text-blue-600 transition-colors">API</Link></li>
                <li><Link href="/solutions" className="hover:text-blue-600 transition-colors">Solutions</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><Link href="#" className="hover:text-blue-600 transition-colors">Twitter</Link></li>
                <li><Link href="#" className="hover:text-blue-600 transition-colors">LinkedIn</Link></li>
                <li><Link href="#" className="hover:text-blue-600 transition-colors">GitHub</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-400">© 2025 Trillion Labs. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-xs text-gray-400 hover:text-blue-600 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-xs text-gray-400 hover:text-blue-600 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Add global styles for animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </div>
  )
}