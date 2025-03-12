
export default function Transformations() {
  return (
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
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/testi_six-Y0ifBP8S6tNxdH9auF4YMFI3WutVBS.jpeg"
              alt="Before and After Transformation"
              width={400}
              height={500}
              className="h-auto w-full object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500">Lost 10kg in 4 weeks after using Trimmex Green Coffee</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg bg-white shadow-md">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/testi_five-ta5ny08JFTGB0AK3w1f7u8GES7uHCy.jpeg"
              alt="Before and After Transformation"
              width={400}
              height={500}
              className="h-auto w-full object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500">Lost 8kg in 3 weeks after using Trimmex Green Coffee</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg bg-white shadow-md">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/testi_one-Dq2me5z0GXWvROXgqHcQ6MMdylBeW5.jpeg"
              alt="Before and After Transformation"
              width={400}
              height={500}
              className="h-auto w-full object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500">Lost 12kg in 6 weeks after using Trimmex Green Coffee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

