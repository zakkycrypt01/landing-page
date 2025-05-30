"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import {
  ArrowRight,
  Shield,
  Zap,
  MessageSquare,
  Users,
  Coins,
  CheckCircle,
  Github,
  Twitter,
  Globe,
  Lock,
  TrendingUp,
  Rocket,
  Star,
  Menu,
  X,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react"

export default function SuiXchangeLanding() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle waitlist signup
    setIsSubmitted(true)
    setEmail("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#020617]/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="SuiXchange Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-lg sm:text-xl font-bold text-white">SuiXchange</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-gray-300 hover:text-blue-400 transition-colors">
                Features
              </a>
              <a href="#problems" className="text-gray-300 hover:text-blue-400 transition-colors">
                Solutions
              </a>
              <a href="#roadmap" className="text-gray-300 hover:text-blue-400 transition-colors">
                Roadmap
              </a>
              <Button className="bg-blue-600 hover:bg-blue-500 text-white rounded-full px-6">Join Waitlist</Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white h-8 w-8"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0f172a] border-t border-white/10 p-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-gray-300 hover:text-blue-400 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#problems"
                className="text-gray-300 hover:text-blue-400 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solutions
              </a>
              <a
                href="#roadmap"
                className="text-gray-300 hover:text-blue-400 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Roadmap
              </a>
              <Button
                className="bg-blue-600 hover:bg-blue-500 text-white w-full rounded-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-600 rounded-full filter blur-[128px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500 rounded-full filter blur-[128px]"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <Badge className="mb-4 sm:mb-6 bg-blue-500/15 text-blue-300 border-blue-500/30 py-1.5 px-3 rounded-full text-xs sm:text-sm">
            <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1 sm:mr-1.5" />
            Launching Q2 2025
          </Badge>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight px-2">
            The Future of{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              P2P Token Trading
            </span>
          </h1>

          <p className="text-base sm:text-xl text-gray-300 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
            Trade tokens directly with peers on Sui blockchain. Zero gas fees, trustless escrow, and encrypted
            communication. No KYC, no intermediaries, just pure decentralized trading.
          </p>

          {/* Waitlist Form */}
          <div className="max-w-md mx-auto mb-12 sm:mb-16 px-4">
            {!isSubmitted ? (
              <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 rounded-full flex-1"
                />
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-500 text-white rounded-full px-6 whitespace-nowrap"
                >
                  Join Waitlist
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-2 text-green-400 bg-green-400/10 py-3 px-4 rounded-full">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm sm:text-base">Thanks! You're on the waitlist.</span>
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto px-4">
            <div className="bg-white/3 backdrop-blur-sm rounded-xl p-4 sm:p-6 transform transition-transform hover:scale-105">
              <div className="text-2xl sm:text-4xl font-bold text-white mb-2">0%</div>
              <div className="text-gray-400 text-sm sm:text-base">Gas Fees</div>
            </div>
            <div className="bg-white/3 backdrop-blur-sm rounded-xl p-4 sm:p-6 transform transition-transform hover:scale-105">
              <div className="text-2xl sm:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-400 text-sm sm:text-base">Trustless</div>
            </div>
            <div className="bg-white/3 backdrop-blur-sm rounded-xl p-4 sm:p-6 transform transition-transform hover:scale-105">
              <div className="text-2xl sm:text-4xl font-bold text-white mb-2">∞</div>
              <div className="text-gray-400 text-sm sm:text-base">Privacy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="mb-4 bg-blue-500/15 text-blue-300 border-blue-500/30 py-1.5 px-3 rounded-full text-xs sm:text-sm">
              Features
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Revolutionary Features</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
              Built on Sui blockchain with cutting-edge technology to solve real problems in P2P trading
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="bg-white/3 border-white/10 backdrop-blur-sm rounded-xl overflow-hidden group hover:border-blue-500/50 transition-all">
              <CardHeader className="p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-white text-lg sm:text-xl">Zero-Gas Trading</CardTitle>
                <CardDescription className="text-gray-400 text-sm sm:text-base">
                  Trade without worrying about gas fees. Our sponsored transaction system covers all costs.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/3 border-white/10 backdrop-blur-sm rounded-xl overflow-hidden group hover:border-blue-500/50 transition-all">
              <CardHeader className="p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-white text-lg sm:text-xl">Trustless Escrow</CardTitle>
                <CardDescription className="text-gray-400 text-sm:text-base">
                  Smart contract-based escrow ensures secure trades without intermediaries holding your funds.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/3 border-white/10 backdrop-blur-sm rounded-xl overflow-hidden group hover:border-blue-500/50 transition-all">
              <CardHeader className="p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-white text-lg sm:text-xl">zk-Encrypted Chat</CardTitle>
                <CardDescription className="text-gray-400 text-sm sm:text-base">
                  Private, end-to-end encrypted communication using ZK proofs for secure negotiations.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/3 border-white/10 backdrop-blur-sm rounded-xl overflow-hidden group hover:border-blue-500/50 transition-all">
              <CardHeader className="p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-white text-lg sm:text-xl">P2P Direct Trading</CardTitle>
                <CardDescription className="text-gray-400 text-sm sm:text-base">
                  Trade directly with other users. Set your own prices and terms without platform interference.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/3 border-white/10 backdrop-blur-sm rounded-xl overflow-hidden group hover:border-blue-500/50 transition-all">
              <CardHeader className="p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-white text-lg sm:text-xl">Real-Time Updates</CardTitle>
                <CardDescription className="text-gray-400 text-sm:text-base">
                  WebSocket-powered live updates for trades, orders, and market activity.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/3 border-white/10 backdrop-blur-sm rounded-xl overflow-hidden group hover:border-blue-500/50 transition-all">
              <CardHeader className="p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-white text-lg sm:text-xl">No KYC Required</CardTitle>
                <CardDescription className="text-gray-400 text-sm sm:text-base">
                  Trade freely without identity verification, withdrawal limits, or minimum purchase amounts.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section id="problems" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#020617]/90 relative">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 sm:w-96 sm:h-96 bg-blue-600 rounded-full filter blur-[128px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="mb-4 bg-blue-500/15 text-blue-300 border-blue-500/30 py-1.5 px-3 rounded-full text-xs sm:text-sm">
              Solutions
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Problems We Solve</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
              Traditional crypto trading has barriers. We're removing them all.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white/3 backdrop-blur-sm rounded-xl p-4 sm:p-6 transform transition-all hover:bg-white/5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-400 text-sm">✗</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base sm:text-lg mb-2">High Gas Fees</h3>
                    <p className="text-gray-400 text-sm sm:text-base">
                      New users need native tokens for gas, creating a cold start problem
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/3 backdrop-blur-sm rounded-xl p-4 sm:p-6 transform transition-all hover:bg-white/5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-400 text-sm">✗</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base sm:text-lg mb-2">Centralized Dependencies</h3>
                    <p className="text-gray-400 text-sm sm:text-base">
                      Users forced to use centralized exchanges for initial token acquisition
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/3 backdrop-blur-sm rounded-xl p-4 sm:p-6 transform transition-all hover:bg-white/5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-400 text-sm">✗</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base sm:text-lg mb-2">KYC & Limits</h3>
                    <p className="text-gray-400 text-sm sm:text-base">
                      Mandatory verification, minimum purchases, and withdrawal thresholds
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white/3 backdrop-blur-sm rounded-xl p-4 sm:p-6 transform transition-all hover:bg-white/5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base sm:text-lg mb-2">Gasless Experience</h3>
                    <p className="text-gray-400 text-sm sm:text-base">
                      Sponsored transactions eliminate gas fee barriers completely
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/3 backdrop-blur-sm rounded-xl p-4 sm:p-6 transform transition-all hover:bg-white/5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base sm:text-lg mb-2">True Decentralization</h3>
                    <p className="text-gray-400 text-sm sm:text-base">
                      Direct P2P trading without relying on centralized intermediaries
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/3 backdrop-blur-sm rounded-xl p-4 sm:p-6 transform transition-all hover:bg-white/5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base sm:text-lg mb-2">Privacy First</h3>
                    <p className="text-gray-400 text-sm sm:text-base">
                      No KYC, no limits, no restrictions - trade freely and privately
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sui */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="mb-4 bg-blue-500/15 text-blue-300 border-blue-500/30 py-1.5 px-3 rounded-full text-xs sm:text-sm">
              Technology
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Built on Sui Blockchain</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
              Leveraging Sui's cutting-edge technology for the ultimate P2P trading experience
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white/3 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center transform transition-all hover:bg-white/5 hover:scale-105">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">High Throughput</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Rapid transaction processing for dynamic marketplace</p>
            </div>

            <div className="bg-white/3 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center transform transition-all hover:bg-white/5 hover:scale-105">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coins className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Object-Centric</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Flexible data model for efficient token management</p>
            </div>

            <div className="bg-white/3 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center transform transition-all hover:bg-white/5 hover:scale-105">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Parallel Execution</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Low-latency operations and cost-effective scaling</p>
            </div>

            <div className="bg-white/3 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center transform transition-all hover:bg-white/5 hover:scale-105">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Sponsored Transactions</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Native gasless support for seamless user experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#020617]/90 relative">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 sm:w-96 sm:h-96 bg-blue-600 rounded-full filter blur-[128px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="mb-4 bg-blue-500/15 text-blue-300 border-blue-500/30 py-1.5 px-3 rounded-full text-xs sm:text-sm">
              Timeline
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Roadmap</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
              Our journey to revolutionize P2P token trading
            </p>
          </div>

          <Tabs defaultValue="q2-2025" className="w-full relative">
            <div className="flex justify-center mb-6 sm:mb-8">
              <TabsList className="inline-flex items-center gap-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-1">
                <TabsTrigger
                  value="q2-2025"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-blue-500/25 bg-transparent text-gray-300 text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-300 whitespace-nowrap"
                >
                  Q2 2025
                </TabsTrigger>
                <TabsTrigger
                  value="q3-2025"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-blue-500/25 bg-transparent text-gray-300 text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-300 whitespace-nowrap"
                >
                  Q3 2025
                </TabsTrigger>
                <TabsTrigger
                  value="q4-2025"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-blue-500/25 bg-transparent text-gray-300 text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-300 whitespace-nowrap"
                >
                  Q4 2025
                </TabsTrigger>
                <TabsTrigger
                  value="q1-2026"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-blue-500/25 bg-transparent text-gray-300 text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-300 whitespace-nowrap"
                >
                  Q1 2026
                </TabsTrigger>
                <TabsTrigger
                  value="q2-2026"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-blue-500/25 bg-transparent text-gray-300 text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-300 whitespace-nowrap"
                >
                  Q2 2026
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="q2-2025" className="mt-0">
              <Card className="bg-white/3 border-white/10 backdrop-blur-sm rounded-xl">
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 mr-3 sm:mr-4">
                      <span className="text-white font-bold text-sm sm:text-base">Q2</span>
                    </div>
                    <CardTitle className="text-white text-lg sm:text-xl">2025 - MVP Launch</CardTitle>
                  </div>
                  <Badge className="bg-blue-500/15 text-blue-300 border-blue-500/30 w-fit text-xs sm:text-sm">
                    Current Focus
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mt-0.5" />
                    <p className="text-gray-300 text-sm sm:text-base">
                      Core escrow trading smart contracts deployed on Sui mainnet.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mt-0.5" />
                    <p className="text-gray-300 text-sm sm:text-base">Gas-drip system enables gasless onboarding.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mt-0.5" />
                    <p className="text-gray-300 text-sm sm:text-base">
                      Initial web UI live: basic P2P token listing and trades.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mt-0.5" />
                    <p className="text-gray-300 text-sm sm:text-base">zk-chat (private in-app messaging) launched.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mt-0.5" />
                    <p className="text-gray-300 text-sm sm:text-base">
                      Testing phase: testnet, internal QA, user feedback.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="q3-2025" className="mt-0">
              <Card className="bg-white/3 border-white/10 backdrop-blur-sm rounded-xl">
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center flex-shrink-0 mr-3 sm:mr-4">
                      <span className="text-gray-300 font-bold text-sm sm:text-base">Q3</span>
                    </div>
                    <CardTitle className="text-white text-lg sm:text-xl">2025 - Platform Foundation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 mt-0.5" />
                    <p className="text-gray-400 text-sm sm:text-base">Admin dashboard for disputes.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 mt-0.5" />
                    <p className="text-gray-400 text-sm sm:text-base">User & trade analytics dashboard.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 mt-0.5" />
                    <p className="text-gray-400 text-sm sm:text-base">UI/UX improvements.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 mt-0.5" />
                    <p className="text-gray-400 text-sm sm:text-base">Enhanced security features.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="q4-2025" className="mt-0">
              <Card className="bg-white/3 border-white/10 backdrop-blur-sm rounded-xl">
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center flex-shrink-0 mr-3 sm:mr-4">
                      <span className="text-gray-300 font-bold text-sm sm:text-base">Q4</span>
                    </div>
                    <CardTitle className="text-white text-lg sm:text-xl">2025 - Scalability & Growth</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 mt-0.5" />
                    <p className="text-gray-400 text-sm sm:text-base">Scalability improvements for high demand.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 mt-0.5" />
                    <p className="text-gray-400 text-sm sm:text-base">Integration with more tokens and DApps.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 mt-0.5" />
                    <p className="text-gray-400 text-sm sm:text-base">Community-driven features and enhancements.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 mt-0.5" />
                    <p className="text-gray-400 text-sm sm:text-base">Marketing campaigns to increase awareness.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="q1-2026" className="mt-0">
              <Card className="bg-white/3 border-white/10 backdrop-blur-sm rounded-xl">
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center flex-shrink-0 mr-3 sm:mr-4">
                      <span className="text-gray-300 font-bold text-sm sm:text-base">Q1</span>
                    </div>
                    <CardTitle className="text-white text-lg sm:text-xl">2026 - Expansion & Innovation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 mt-0.5" />
                    <p className="text-gray-400 text-sm sm:text-base">Global user base expansion.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 mt-0.5" />
                    <p className="text-gray-400 text-sm sm:text-base">New trading features and integrations.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 mt-0.5" />
                    <p className="text-gray-400 text-sm sm:text-base">Partnerships with leading projects.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 mt-0.5" />
                    <p className="text-gray-400 text-sm sm:text-base">Continuous security audits and updates.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="q2-2026" className="mt-0">
              <Card className="bg-white/3 border-white/10 backdrop-blur-sm rounded-xl">
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center flex-shrink-0 mr-3 sm:mr-4">
                      <span className="text-gray-300 font-bold text-sm sm:text-base">Q2</span>
                    </div>
                    <CardTitle className="text-white text-lg sm:text-xl">2026 - Advanced Features</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 mt-0.5" />
                    <p className="text-gray-400 text-sm sm:text-base">Advanced trading algorithms and analytics.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 mt-0.5" />
                    <p className="text-gray-400 text-sm sm:text-base">Cross-chain trading capabilities.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 mt-0.5" />
                    <p className="text-gray-400 text-sm sm:text-base">Improved user interface and experience.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 mt-0.5" />
                    <p className="text-gray-400 text-sm sm:text-base">Community governance and voting system.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-white/3 backdrop-blur-sm rounded-xl border border-white/10">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-4">Ongoing Goals</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex items-start gap-3">
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mt-0.5" />
                <p className="text-gray-300 text-sm sm:text-base">Community DAO & decentralized governance.</p>
              </div>
              <div className="flex items-start gap-3">
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mt-0.5" />
                <p className="text-gray-300 text-sm sm:text-base">Native token launch with expanding utility.</p>
              </div>
              <div className="flex items-start gap-3">
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mt-0.5" />
                <p className="text-gray-300 text-sm sm:text-base">Regular security audits & bug bounties.</p>
              </div>
              <div className="flex items-start gap-3">
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mt-0.5" />
                <p className="text-gray-300 text-sm:text-base">Marketing partnerships & user base expansion.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-blue-600 rounded-full filter blur-[150px]"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready to Trade Without Limits?
          </h2>
          <p className="text-base sm:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Join the waitlist and be among the first to experience truly decentralized P2P token trading.
          </p>

          {!isSubmitted ? (
            <div className="max-w-md mx-auto mb-8 sm:mb-12">
              <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 rounded-full flex-1"
                />
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-500 text-white rounded-full px-6 whitespace-nowrap"
                >
                  Join Waitlist
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2 text-green-400 bg-green-400/10 py-3 px-6 rounded-full text-base sm:text-lg mb-8 sm:mb-12 mx-auto max-w-md">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>You're all set! We'll notify you when we launch.</span>
            </div>
          )}

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <a
              href="https://github.com/suixchange"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors bg-white/5 hover:bg-white/5 px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </a>
            <a
              href="https://suixchange.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors bg-white/5 hover:bg-white/5 px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base"
            >
              <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Website</span>
              <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors bg-white/5 hover:bg-white/5 px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base"
            >
              <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Twitter</span>
              <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="SuiXchange Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-lg sm:text-xl font-bold text-white">SuiXchange</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mb-6 md:mb-0 text-center md:text-left">
              <div>
                <h4 className="text-white font-medium mb-3 text-sm sm:text-base">Product</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm">
                      Roadmap
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm">
                      Waitlist
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-3 text-sm sm:text-base">Resources</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm">
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-3 text-sm sm:text-base">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm">
                      Team
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-3 text-sm sm:text-base">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm">
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm">
                      Compliance
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10 text-center text-gray-400 text-xs sm:text-sm">
            <p>&copy; 2025 SuiXchange. Building the future of decentralized trading.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
