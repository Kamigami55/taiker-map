import Navigation from '@/components/molecules/Navigation'

export default function Footer() {
  return (
    <header className="flex justify-between items-center py-3 px-10 w-full bg-white">
      <p className="text-lg font-bold text-172A50">
        Copyright © {new Date().getFullYear()} MIT All Right Reserved.
      </p>

      <Navigation />
    </header>
  )
}
