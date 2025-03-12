import Image from "next/image"
import {
  ArrowRight,
  Check,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Heart,
  Coffee,
  Brain,
  Activity,
  Shield,
  Smile,
  Droplet,
  Sun,
} from "lucide-react"

// Define the benefits array
const benefits = [
  {
    icon: <Leaf className="h-6 w-6" />,
    title: "Antioxidant Properties",
    description: "Rich in chlorogenic acids to reduce oxidative stress and fight free radicals.",
  },
  {
    icon: <Activity className="h-6 w-6" />,
    title: "Weight Management",
    description: "Promotes fat burning and reduces body fat by boosting metabolism naturally.",
  },
  {
    icon: <Droplet className="h-6 w-6" />,
    title: "Blood Sugar Regulation",
    description: "Improves insulin sensitivity and lowers glucose absorption for better health.",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Heart Health",
    description: "Lowers blood pressure and improves cardiovascular health for a stronger heart.",
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Enhanced Cognitive Function",
    description: "Improves focus and reduces the risk of neurodegenerative diseases.",
  },
  {
    icon: <Smile className="h-6 w-6" />,
    title: "Improved Mood",
    description: "Boosts mood and cognitive performance for better mental wellbeing.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Support for Liver Health",
    description: "Protects the liver and improves liver function for better detoxification.",
  },
  {
    icon: <Coffee className="h-6 w-6" />,
    title: "Digestive Health",
    description: "Promotes gut health and acts as a prebiotic for better digestion.",
  },
  {
    icon: <Sun className="h-6 w-6" />,
    title: "Skin Health",
    description: "Protects skin from free radical damage for a more youthful appearance.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Anti-Inflammatory Effects",
    description: "Reduces chronic inflammation in the body for better overall health.",
  },
]

// Define the testimonials array
const testimonials = [
  {
    name: "Jane D.",
    image: "/placeholder.svg?height=48&width=48",
    quote: "I lost 5kg in just two weeks! Trimmex Green Coffee is amazing!",
  },
  {
    name: "John S.",
    image: "/placeholder.svg?height=48&width=48",
    quote: "My energy levels are through the roof, and I feel healthier than ever!",
  },
  {
    name: "Sarah T.",
    image: "/placeholder.svg?height=48&width=48",
    quote: "The best investment I've made for my health. Highly recommend!",
  },
]

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold text-green-800">Trimmex</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              <li>
                <a href="#benefits" className="text-sm font-medium hover:text-green-600">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm font-medium hover:text-green-600">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-sm font-medium hover:text-green-600">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm font-medium hover:text-green-600">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <a
            href="#pricing"
            className="rounded-full bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
          >
            Order Now
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-green-50 to-green-100 py-16 md:py-24">
          <div className="absolute inset-0 z-0 opacity-10">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c09a2e2c-0635-4150-914f-0b79c1251ee9.jpg-67yIQxD334ImyQzna80w5TaNPi4Tio.jpeg"
              alt="Coffee Beans Background"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-16">
              <div className="max-w-xl">
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-green-900 md:text-5xl lg:text-6xl">
                  Lose Weight in Two Weeks with Trimmex Green Coffee!
                </h1>
                <p className="mb-8 text-lg text-gray-700 md:text-xl">
                  Experience the Power of Natural Weight Loss – Rich in Antioxidants and Proven Benefits.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#pricing"
                    className="flex items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-3 text-base font-medium text-white shadow-lg transition hover:bg-green-700"
                  >
                    Order Now – Free Delivery! <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#pricing"
                    className="flex items-center justify-center gap-2 rounded-full border border-green-600 bg-white px-6 py-3 text-base font-medium text-green-600 transition hover:bg-green-50"
                  >
                    Pay on Delivery Available
                  </a>
                </div>
              </div>
              <div className="relative mx-auto max-w-md">
                <div className="relative z-10 rounded-lg bg-white p-4 shadow-xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prod-cpNTvJlinY4aT5XTe2YOyN7lvTvH6N.jpeg"
                    alt="Trimmex Green Coffee Product"
                    width={400}
                    height={500}
                    className="mx-auto h-auto w-full rounded-lg"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-lg bg-green-200"></div>
              </div>
              <div className="relative mx-auto max-w-md"></div>
            </div>
          </div>

          {/* Before/After Floating Images */}
          <div className="absolute -bottom-16 left-8 hidden w-48 rotate-6 rounded-lg bg-white p-2 shadow-lg md:block">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/testi_six-Y0ifBP8S6tNxdH9auF4YMFI3WutVBS.jpeg"
              alt="Before and After Results"
              width={200}
              height={200}
              className="rounded"
            />
          </div>
          <div className="absolute -top-8 right-8 hidden w-48 -rotate-6 rounded-lg bg-white p-2 shadow-lg md:block">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/testi_five-ta5ny08JFTGB0AK3w1f7u8GES7uHCy.jpeg"
              alt="Before and After Results"
              width={200}
              height={200}
              className="rounded"
            />
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="relative py-16 md:py-24">
          <div className="absolute inset-0 z-0 opacity-5">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c09a2e2c-0635-4150-914f-0b79c1251ee9.jpg-67yIQxD334ImyQzna80w5TaNPi4Tio.jpeg"
              alt="Coffee Beans Background"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Why Choose Trimmex Green Coffee?</h2>
              <p className="mx-auto max-w-2xl text-gray-600">
                Our premium green coffee is packed with natural benefits to help you achieve your weight loss goals and
                improve your overall health.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                    {benefit.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transformation Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Real Transformations</h2>
              <p className="mx-auto max-w-2xl text-gray-600">
                See the amazing results our customers have achieved with Trimmex Green Coffee
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="overflow-hidden rounded-lg bg-white shadow-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/testi_six-Y0ifBP8S6tNxdH9auF4YMFI3WutVBS.jpeg"
                  alt="Before and After Transformation"
                  width={400}
                  height={500}
                  className="h-auto w-full object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-500">Lost 10kg in 4 weeks</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg bg-white shadow-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/testi_five-ta5ny08JFTGB0AK3w1f7u8GES7uHCy.jpeg"
                  alt="Before and After Transformation"
                  width={400}
                  height={500}
                  className="h-auto w-full object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-500">Lost 8kg in 3 weeks</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg bg-white shadow-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/testi_one-Dq2me5z0GXWvROXgqHcQ6MMdylBeW5.jpeg"
                  alt="Before and After Transformation"
                  width={400}
                  height={500}
                  className="h-auto w-full object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-500">Lost 12kg in 6 weeks</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Affordable Packages for Your Weight Loss Journey
              </h2>
              <p className="mx-auto max-w-2xl text-gray-600">
                Choose the package that suits your needs and start your transformation today
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Package 1 */}
              <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md">
                <div className="mb-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prod-cpNTvJlinY4aT5XTe2YOyN7lvTvH6N.jpeg"
                    alt="Trimmex Green Coffee Product"
                    width={200}
                    height={200}
                    className="mx-auto h-auto w-full rounded-lg"
                  />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-gray-900">1 Pack</h3>
                <div className="mb-4 text-3xl font-bold text-green-600">₦15,000</div>
                <p className="mb-6 text-gray-600">Lose Weight Naturally</p>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">1 Month Supply</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">Free Delivery</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">Pay on Delivery</span>
                  </li>
                </ul>
                <a
                  href="#contact"
                  className="block w-full rounded-full bg-green-600 py-3 text-center font-medium text-white transition hover:bg-green-700"
                >
                  Order Now
                </a>
              </div>

              {/* Package 2 - Featured */}
              <div className="relative rounded-lg border-2 border-green-600 bg-white p-8 shadow-md">
                <div className="mb-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prod-cpNTvJlinY4aT5XTe2YOyN7lvTvH6N.jpeg"
                    alt="Trimmex Green Coffee Product"
                    width={200}
                    height={200}
                    className="mx-auto h-auto w-full rounded-lg"
                  />
                </div>
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-green-600 px-4 py-1 text-sm font-medium text-white">
                  Most Popular
                </div>
                <h3 className="mb-2 text-2xl font-bold text-gray-900">Buy 2 Get 1 Free</h3>
                <div className="mb-4 text-3xl font-bold text-green-600">₦20,000</div>
                <p className="mb-6 text-gray-600">Save ₦10,000!</p>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">3 Month Supply</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">Free Delivery</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">Pay on Delivery</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">Free Weight Loss Guide</span>
                  </li>
                </ul>
                <a
                  href="#contact"
                  className="block w-full rounded-full bg-green-600 py-3 text-center font-medium text-white transition hover:bg-green-700"
                >
                  Order Now
                </a>
              </div>

              {/* Package 3 */}
              <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md">
                <div className="mb-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prod-cpNTvJlinY4aT5XTe2YOyN7lvTvH6N.jpeg"
                    alt="Trimmex Green Coffee Product"
                    width={200}
                    height={200}
                    className="mx-auto h-auto w-full rounded-lg"
                  />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-gray-900">Buy 3 Get 1 Free</h3>
                <div className="mb-4 text-3xl font-bold text-green-600">₦25,000</div>
                <p className="mb-6 text-gray-600">Save ₦20,000!</p>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">4 Month Supply</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">Free Delivery</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">Pay on Delivery</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">Free Weight Loss Guide</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">Free Diet Plan</span>
                  </li>
                </ul>
                <a
                  href="#contact"
                  className="block w-full rounded-full bg-green-600 py-3 text-center font-medium text-white transition hover:bg-green-700"
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">What Our Customers Are Saying</h2>
              <p className="mx-auto max-w-2xl text-gray-600">
                Real results from real people who have transformed their lives with Trimmex Green Coffee
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="rounded-lg bg-white p-6 shadow-md">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-4 w-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-green-600 py-16 text-white md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Start Your Weight Loss Journey Today!</h2>
              <p className="mb-8 text-lg text-green-100">Order Now and Enjoy Free Delivery + Pay on Delivery!</p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="#pricing"
                  className="rounded-full bg-white px-8 py-3 text-base font-medium text-green-600 shadow-lg transition hover:bg-gray-100"
                >
                  Order Now – Free Delivery!
                </a>
                <a
                  href="#pricing"
                  className="rounded-full border border-white bg-transparent px-8 py-3 text-base font-medium text-white transition hover:bg-green-700"
                >
                  Pay on Delivery Available
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold text-gray-900">Contact Us</h2>
                <p className="mb-6 text-gray-600">
                  Have questions about Trimmex Green Coffee? We're here to help! Fill out the form or contact us
                  directly.
                </p>

                <div className="mb-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-medium text-gray-900">+234 123 456 789</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium text-gray-900">info@trimmexcoffee.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="font-medium text-gray-900">Lagos, Nigeria</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md">
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="first-name" className="mb-1 block text-sm font-medium text-gray-700">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="mb-1 block text-sm font-medium text-gray-700">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="last-name"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
                      placeholder="Your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
                      placeholder="Your message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-green-600 px-5 py-3 text-center font-medium text-white transition hover:bg-green-700"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl rounded-lg bg-green-600 p-8 text-center text-white shadow-lg">
              <h3 className="mb-2 text-2xl font-bold">Subscribe for Exclusive Offers</h3>
              <p className="mb-6">
                Get the latest updates, health tips, and special discounts delivered to your inbox.
              </p>
              <form className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 rounded-lg border-0 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-300"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-green-800 px-6 py-3 font-medium text-white transition hover:bg-green-900"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-gray-400">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Leaf className="h-6 w-6 text-green-500" />
                <span className="text-xl font-bold text-white">Trimmex</span>
              </div>
              <p className="mb-4">Experience the power of natural weight loss with Trimmex Green Coffee.</p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 transition hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 transition hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.38 5.43 4.109 4.109 0 01-1.852-.518 4.103 4.103 0 003.419 2.896 8.221 8.221 0 01-5.32 1.824 11.646 11.646 0 01-2.124-.062 4.105 4.105 0 003.831 2.834A8.23 8.23 0 011.001 18.495a11.643 11.643 0 006.29 1.756z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 transition hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12c0 3.55 2.299 6.547 5.47 7.59V16.5c0-.384.281-.692.64-.692h.719c.359 0 .64.308.64.692v3.09c0 .384-.281.692-.64.692h-.719A9.926 9.926 0 002 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm3.707 8.293a1 1 0 00-1.414-1.414L11 12.586l-1.293-1.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="transition hover:text-green-500">
                    Benefits
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-green-500">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-green-500">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-green-500">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Customer Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="transition hover:text-green-500">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-green-500">
                    Shipping & Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-green-500">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-green-500">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Contact Us</h3>
              <p className="mb-2">Phone: +234 123 456 789</p>
              <p className="mb-2">Email: info@trimmexcoffee.com</p>
              <p>Address: Lagos, Nigeria</p>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center">
            <p>&copy; 2024 Trimmex. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

