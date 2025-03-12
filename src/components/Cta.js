const Cta = () => {
  return (
    <section className="bg-green-600 py-16 text-white md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Start Your Weight Loss Journey Today!
          </h2>
          <p className="mb-8 text-lg text-green-100">
            Order Now and Enjoy Free Delivery + Pay on Delivery!
          </p>
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
  );
};

export default Cta;
