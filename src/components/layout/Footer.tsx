export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white px-6 py-8 text-center md:px-12">
      <p className="font-mono text-xs uppercase tracking-widest text-gray-500">
        &copy; {new Date().getFullYear()} Hanine Mezghiche. All rights reserved.
      </p>
    </footer>
  )
}
