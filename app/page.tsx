"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Award,
  Users,
  Heart,
} from "lucide-react";
import { useState } from "react";

export default function HomePage() {
  const galleryImages = [
    { name: "Image 1", src: "/1.jpeg" },
    { name: "Image 2", src: "/2.jpeg" },
    { name: "Image 3", src: "/3.jpeg" },
    { name: "Image 4", src: "/4.jpeg" },
    { name: "Image 5", src: "/5.jpeg" },
    { name: "Image 6", src: "/6.jpeg" },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const prev = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 3 : prevIndex - 3
    );
  };

  const next = () => {
    setStartIndex((prevIndex) =>
      prevIndex + 3 >= galleryImages.length ? 0 : prevIndex + 3
    );
  };

  // Slice 3 images to show based on startIndex
  const visibleImages = galleryImages.slice(startIndex, startIndex + 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div
                className="flex items-center justify-center"
                // style={{ width: "120px", height: "120px" }}
              >
                <Image
                  src="/image.png"
                  alt="Preserve Icon"
                  width={10}
                  height={10}
                  className="w-[100px] h-[50px]"
                />
              </div>

              {/* <div>
                <h1 className="text-xl font-bold text-gray-900">Preserve</h1>
                <p className="text-xs text-gray-600">Skin Clinic</p>
              </div> */}
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#home"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                About
              </Link>
              <Link
                href="#services"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Services
              </Link>
              <Link
                href="#treatments"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Treatments
              </Link>
              <Link
                href="#gallery"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Gallery
              </Link>
              <Link
                href="#certifications"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Certification
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                <span>0123 456 7890</span>
              </div>
              <Button className="bg-[#435887] hover:bg-[#37476b]">
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center text-center overflow-hidden"
      >
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/30 z-10" />

        {/* Content */}
        <div className="relative z-20 px-4 text-white max-w-3xl space-y-8">
          <Badge className="bg-white/20 text-white hover:bg-white/30">
            Premium Aesthetic Treatments
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Preserve Your
            <span className="text-blue-300 block">Natural Beauty</span>
          </h1>
          <p className="text-lg text-white/90 leading-relaxed">
            Expert aesthetic treatments and skincare solutions tailored to
            enhance your natural beauty. Our experienced practitioners use the
            latest techniques to help you look and feel your best.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#435887] hover:bg-[#37476b] text-white"
            >
              Book Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
            >
              View Treatments
            </Button>
          </div>

          {/* Ratings */}
          <div className="flex items-center justify-center space-x-8 pt-4 text-white">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-white/20 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <span className="text-sm">500+ Happy Clients</span>
            </div>
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
              <span className="text-sm ml-2">4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">25+</div>
              <div className="text-gray-600">Treatments</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">4.9</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800">About Us</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Expert Care for Your Skin Health
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  At Preserve Skin Clinic, we combine medical expertise with
                  aesthetic artistry to deliver exceptional results. Our team of
                  qualified practitioners is dedicated to helping you achieve
                  your skincare goals safely and effectively.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-[#435887] rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Qualified Practitioners
                    </h3>
                    <p className="text-gray-600">
                      All treatments performed by certified medical
                      professionals
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-[#435887] rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Latest Technology
                    </h3>
                    <p className="text-gray-600">
                      State-of-the-art equipment for optimal results
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-[#435887] rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Personalized Approach
                    </h3>
                    <p className="text-gray-600">
                      Tailored treatment plans for individual needs
                    </p>
                  </div>
                </div>
              </div>

              <Button className="bg-[#435887] hover:bg-[#37476b]">
                Learn More About Us
              </Button>
            </div>

            <div className="relative">
              <Image
                src="/image1.jpg"
                alt="Preserve Skin Clinic Interior"
                width={600}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800">Our Services</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Comprehensive Aesthetic Treatments
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From anti-aging treatments to skin rejuvenation, we offer a full
              range of aesthetic services to help you look and feel your best.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Anti-Wrinkle Injections",
                description:
                  "Reduce fine lines and wrinkles with safe, effective treatments",
                image:
                  "https://images.squarespace-cdn.com/content/v1/677e66ed0ce5df0cab18c71e/53e00ea2-2e20-4c24-8538-796659409767/1.png?format=2500w",
              },
              {
                title: "Hydrafacial",
                description:
                  "Restore volume and enhance facial contours naturally",
                image:
                  "https://images.squarespace-cdn.com/content/v1/677e66ed0ce5df0cab18c71e/6e5842f6-7238-462f-8b03-4cc44321fe38/5.png?format=2500w",
              },
              {
                title: "Fillers",
                description:
                  "Advanced treatments for smoother, younger-looking skin",
                image:
                  "https://images.squarespace-cdn.com/content/v1/677e66ed0ce5df0cab18c71e/ff55bb7e-88f3-492a-9193-fc0a233dd5f5/3.png?format=2500w",
              },
              {
                title: "LED Red Light Therapy",
                description:
                  "Improve skin texture and tone with professional peels",
                image:
                  "https://images.squarespace-cdn.com/content/v1/677e66ed0ce5df0cab18c71e/5fd963d1-753a-421b-b87b-2117782226b1/Anti-Wrinkle.png?format=2500w",
              },
              {
                title: "Mesotherapy treatments",
                description:
                  "Cutting-edge laser technology for various skin concerns",
                image:
                  "https://images.squarespace-cdn.com/content/v1/677e66ed0ce5df0cab18c71e/10feb029-e7b7-4156-bcf7-549002a01da0/7.png?format=2500w",
              },
              {
                title: "Skin Booster",
                description:
                  "Personalized skincare advice and treatment planning",
                image:
                  "https://images.squarespace-cdn.com/content/v1/677e66ed0ce5df0cab18c71e/dd664218-1ca0-4189-a2fa-66bd5b7180b0/2.jpg?format=2500w",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-shadow"
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    {service.description}
                  </CardDescription>
                  <Button
                    variant="outline"
                    className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Clinic Gallery
          </h2>

          <div className="flex items-center justify-center gap-4">
            {/* Left Arrow */}
            <button
              onClick={prev}
              aria-label="Previous"
              className="p-3 rounded-full bg-white shadow-md hover:bg-gray-100 flex items-center justify-center"
            >
              <ArrowLeft className="w-8 h-8 text-gray-600" />
            </button>

            {/* Images */}
            {visibleImages.map((img, i) => (
              <div
                key={startIndex + i}
                className="relative w-[3000vw] max-w-[30000px] aspect-[2/3] rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  src={img.src}
                  alt={img.name}
                  fill
                  className="object-cover"
                  // sizes="(min-width: 768px) 30vw, 100vw"
                  priority={i === 0}
                />
              </div>
            ))}

            {/* Right Arrow */}
            <button
              onClick={next}
              aria-label="Next"
              className="p-3 rounded-full bg-white shadow-md hover:bg-gray-100 flex items-center justify-center"
            >
              <ArrowRight className="w-8 h-8 text-gray-600" />
            </button>
          </div>
        </div>
      </section>

      <section id="certifications" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-green-100 text-green-800">
              Certifications
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Accredited & Certified Professionals
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team is fully certified by top industry authorities to ensure
              the highest standards of safety and quality in every treatment we
              offer.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="group overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="w-64 h-auto rounded-t-lg overflow-hidden mx-auto">
                  <Image
                    src="/certificate.png" // Make sure path is correct
                    alt="Clinic Certification"
                    width={256} // or your preferred size
                    height={180}
                    className="object-contain"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">
                  Certified by Health & Beauty Authority
                </CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  Our clinic is proudly certified and compliant with
                  international safety standards and advanced aesthetic
                  procedures.
                </CardDescription>
                <Button
                  variant="outline"
                  className="w-full border-green-200 text-green-700 hover:bg-green-50 bg-transparent"
                >
                  View Certificate
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800">Contact Us</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Book Your Consultation Today
                </h2>
                <p className="text-gray-600">
                  Ready to start your journey to healthier, more beautiful skin?
                  Contact us to schedule your consultation.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">0123 456 7890</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">
                      info@preserveskinclinic.co.uk
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      123 Beauty Street, London, UK
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Opening Hours
                    </h3>
                    <p className="text-gray-600">
                      Mon-Fri: 9AM-6PM, Sat: 9AM-4PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0123 456 7890"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your skincare goals..."
                  />
                </div>
                <Button className="w-full bg-[#435887] hover:bg-[#37476b]">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-[#435887] rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-bold">Preserve</h3>
                  <p className="text-xs text-gray-400">Skin Clinic</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Expert aesthetic treatments and skincare solutions to help you
                preserve your natural beauty.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Anti-Wrinkle Injections
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Dermal Fillers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Skin Rejuvenation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Chemical Peels
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Treatments
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Book Consultation
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>0123 456 7890</li>
                <li>info@preserveskinclinic.co.uk</li>
                <li>
                  123 Beauty Street
                  <br />
                  London, UK
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Preserve Skin Clinic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
