import {
  Leaf,
  Heart,
  Coffee,
  Brain,
  Activity,
  Shield,
  Smile,
  Droplet,
  Sun,
} from "lucide-react";

// Define the benefits array
const benefits = [
  {
    icon: <Leaf className="h-6 w-6" />,
    title: "Antioxidant Properties",
    description:
      "Rich in chlorogenic acids to reduce oxidative stress and fight free radicals.",
  },
  {
    icon: <Activity className="h-6 w-6" />,
    title: "Weight Management",
    description:
      "Promotes fat burning and reduces body fat by boosting metabolism naturally.",
  },
  {
    icon: <Droplet className="h-6 w-6" />,
    title: "Blood Sugar Regulation",
    description:
      "Improves insulin sensitivity and lowers glucose absorption for better health.",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Heart Health",
    description:
      "Lowers blood pressure and improves cardiovascular health for a stronger heart.",
  },

  {
    icon: <Coffee className="h-6 w-6" />,
    title: "Digestive Health",
    description:
      "Promotes gut health and acts as a prebiotic for better digestion.",
  },

  {
    icon: <Shield className="h-6 w-6" />,
    title: "Anti-Inflammatory Effects",
    description:
      "Reduces chronic inflammation in the body for better overall health.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-16 md:py-24">
      <div className="absolute inset-0 z-0 opacity-5">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c09a2e2c-0635-4150-914f-0b79c1251ee9.jpg-67yIQxD334ImyQzna80w5TaNPi4Tio.jpeg"
          alt="Coffee Beans Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Why Choose Trimmex Green Coffee?
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Our premium green coffee is packed with natural benefits to help you
            achieve your weight loss goals and improve your overall health.
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
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
