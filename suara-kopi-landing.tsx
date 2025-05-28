import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Coffee, Users, Award, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-amber-50">
      {/* Header */}
      <header className="bg-amber-900 text-amber-50 px-4 lg:px-6 h-16 flex items-center sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center">
          <Coffee className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold">Suara Kopi</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#about" className="text-sm font-medium hover:text-amber-200 transition-colors">
            About
          </Link>
          <Link href="#menu" className="text-sm font-medium hover:text-amber-200 transition-colors">
            Menu
          </Link>
          <Link href="#location" className="text-sm font-medium hover:text-amber-200 transition-colors">
            Location
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-amber-200 transition-colors">
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-6 text-center text-white">
              <Badge variant="secondary" className="bg-amber-100 text-amber-900 px-4 py-2">
                Authentic Indonesian Coffee Experience
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">Suara Kopi</h1>
              <p className="mx-auto max-w-[700px] text-xl md:text-2xl text-amber-100">
                Where every cup tells a story. Experience the rich flavors and warm hospitality of traditional
                Indonesian coffee culture.
              </p>
              <div className="space-x-4">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                  Explore Our Menu
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-amber-900"
                >
                  Visit Us Today
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <Badge variant="outline" className="border-amber-600 text-amber-700">
                    Our Story
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-amber-900">
                    The Voice of Coffee
                  </h2>
                  <p className="text-lg text-amber-800 leading-relaxed">
                    Suara Kopi, meaning "Voice of Coffee," was born from a passion to share the authentic taste of
                    Indonesian coffee. Our journey began in the highlands of Java, where we discovered the perfect beans
                    that speak to the soul.
                  </p>
                  <p className="text-lg text-amber-800 leading-relaxed">
                    Every cup we serve carries the heritage of traditional Indonesian coffee culture, combined with
                    modern brewing techniques to create an unforgettable experience for coffee lovers.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <Award className="h-8 w-8 text-amber-600" />
                    <div>
                      <h3 className="font-semibold text-amber-900">Premium Quality</h3>
                      <p className="text-sm text-amber-700">Carefully selected beans</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Heart className="h-8 w-8 text-amber-600" />
                    <div>
                      <h3 className="font-semibold text-amber-900">Made with Love</h3>
                      <p className="text-sm text-amber-700">Crafted by passionate baristas</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  width={600}
                  height={500}
                  alt="Coffee beans and brewing equipment"
                  className="rounded-lg shadow-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="w-full py-16 md:py-24 lg:py-32 bg-amber-100">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="outline" className="border-amber-600 text-amber-700">
                Our Menu
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-amber-900">
                Signature Coffee Selection
              </h2>
              <p className="mx-auto max-w-[700px] text-lg text-amber-800">
                Discover our carefully curated selection of traditional and modern coffee creations
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Coffee Items */}
              <Card className="bg-white border-amber-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    width={300}
                    height={200}
                    alt="Kopi Tubruk"
                    className="rounded-lg mb-4 w-full object-cover"
                  />
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">Kopi Tubruk</h3>
                  <p className="text-amber-700 mb-3">Traditional Indonesian coffee with rich, bold flavors</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-amber-600">$4.50</span>
                    <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                      Order Now
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-amber-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    width={300}
                    height={200}
                    alt="Es Kopi Susu"
                    className="rounded-lg mb-4 w-full object-cover"
                  />
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">Es Kopi Susu</h3>
                  <p className="text-amber-700 mb-3">Iced coffee with condensed milk, perfectly balanced</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-amber-600">$5.00</span>
                    <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                      Order Now
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-amber-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    width={300}
                    height={200}
                    alt="Cappuccino Suara"
                    className="rounded-lg mb-4 w-full object-cover"
                  />
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">Cappuccino Suara</h3>
                  <p className="text-amber-700 mb-3">Our signature cappuccino with Indonesian coffee beans</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-amber-600">$5.50</span>
                    <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                      Order Now
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-amber-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    width={300}
                    height={200}
                    alt="Kopi Luwak"
                    className="rounded-lg mb-4 w-full object-cover"
                  />
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">Kopi Luwak</h3>
                  <p className="text-amber-700 mb-3">Premium civet coffee, rare and exquisite</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-amber-600">$15.00</span>
                    <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                      Order Now
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-amber-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    width={300}
                    height={200}
                    alt="Affogato Nusantara"
                    className="rounded-lg mb-4 w-full object-cover"
                  />
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">Affogato Nusantara</h3>
                  <p className="text-amber-700 mb-3">Vanilla ice cream drowned in hot espresso</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-amber-600">$6.50</span>
                    <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                      Order Now
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-amber-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    width={300}
                    height={200}
                    alt="Cold Brew Jawa"
                    className="rounded-lg mb-4 w-full object-cover"
                  />
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">Cold Brew Jawa</h3>
                  <p className="text-amber-700 mb-3">Smooth cold brew with Javanese coffee beans</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-amber-600">$4.75</span>
                    <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                      Order Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-amber-900">
                Why Choose Suara Kopi?
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                  <Coffee className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-amber-900">Premium Beans</h3>
                <p className="text-amber-700">Sourced directly from Indonesian coffee farms</p>
              </div>

              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-amber-900">Expert Baristas</h3>
                <p className="text-amber-700">Skilled craftspeople passionate about coffee</p>
              </div>

              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-amber-900">Cozy Atmosphere</h3>
                <p className="text-amber-700">Warm and welcoming space for all</p>
              </div>

              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                  <Award className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-amber-900">Award Winning</h3>
                <p className="text-amber-700">Recognized for excellence in coffee quality</p>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Contact Section */}
        <section id="location" className="w-full py-16 md:py-24 lg:py-32 bg-amber-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <div className="space-y-4">
                  <Badge variant="outline" className="border-amber-600 text-amber-700">
                    Visit Us
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-amber-900">Find Suara Kopi</h2>
                  <p className="text-lg text-amber-800">
                    Located in the heart of the city, our coffee shop offers a perfect escape from the hustle and
                    bustle.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-6 w-6 text-amber-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-amber-900">Address</h3>
                      <p className="text-amber-700">123 Coffee Street, Jakarta 12345, Indonesia</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-6 w-6 text-amber-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-amber-900">Opening Hours</h3>
                      <p className="text-amber-700">Monday - Friday: 7:00 AM - 9:00 PM</p>
                      <p className="text-amber-700">Saturday - Sunday: 8:00 AM - 10:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="h-6 w-6 text-amber-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-amber-900">Phone</h3>
                      <p className="text-amber-700">+62 21 1234 5678</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="h-6 w-6 text-amber-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-amber-900">Email</h3>
                      <p className="text-amber-700">hello@suarakopi.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Suara Kopi coffee shop interior"
                  className="rounded-lg shadow-xl object-cover w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-amber-900 to-amber-800">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-6 text-white">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Experience the Voice of Coffee
              </h2>
              <p className="mx-auto max-w-[600px] text-xl text-amber-100">
                Join us for an authentic Indonesian coffee experience. Every cup tells a story, and we can't wait to
                share ours with you.
              </p>
              <div className="space-x-4">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                  Order Online
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-amber-900"
                >
                  Book a Table
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-50 py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Coffee className="h-6 w-6" />
                <span className="text-xl font-bold">Suara Kopi</span>
              </div>
              <p className="text-amber-200">
                Bringing you the authentic taste of Indonesian coffee culture, one cup at a time.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <div className="space-y-2">
                <Link href="#about" className="block text-amber-200 hover:text-white transition-colors">
                  About Us
                </Link>
                <Link href="#menu" className="block text-amber-200 hover:text-white transition-colors">
                  Menu
                </Link>
                <Link href="#location" className="block text-amber-200 hover:text-white transition-colors">
                  Location
                </Link>
                <Link href="#contact" className="block text-amber-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Info</h3>
              <div className="space-y-2 text-amber-200">
                <p>123 Coffee Street</p>
                <p>Jakarta 12345, Indonesia</p>
                <p>+62 21 1234 5678</p>
                <p>hello@suarakopi.com</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Follow Us</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-amber-200 hover:text-white transition-colors">
                  Instagram
                </Link>
                <Link href="#" className="block text-amber-200 hover:text-white transition-colors">
                  Facebook
                </Link>
                <Link href="#" className="block text-amber-200 hover:text-white transition-colors">
                  Twitter
                </Link>
                <Link href="#" className="block text-amber-200 hover:text-white transition-colors">
                  TikTok
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-200">
            <p>&copy; {new Date().getFullYear()} Suara Kopi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
