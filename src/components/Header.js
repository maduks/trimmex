import { Leaf } from "lucide-react"

function Header() {
  return (
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
  )
}

export default Header

