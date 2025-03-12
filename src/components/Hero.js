import { ArrowRight } from "lucide-react";
import productImage from "../assets/trimmex-product.jpeg";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 to-green-100 py-16 md:py-24">
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c09a2e2c-0635-4150-914f-0b79c1251ee9.jpg-HznwcFzJdmSvcQNRt5mHFIyHfXGQNe.jpeg"
          alt="Coffee Beans Background"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-green-900 md:text-5xl lg:text-6xl">
              Lose Weight in Two Weeks with Trimmex Green Coffee!
            </h1>
            <p className="mb-8 text-lg text-gray-700 md:text-xl">
              Experience the Power of Natural Weight Loss – Rich in Antioxidants
              and Proven Benefits.
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
            <img
              src={productImage || "/placeholder.svg"}
              alt="Trimmex Green Coffee Product"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
