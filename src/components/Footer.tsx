import Link from 'next/link'

const footerLinks = {
  company: [
    { name: 'About', href: '/about' },
    { name: 'Technology', href: '/technology' },
    { name: 'Reports', href: '/reports' },
    { name: 'Pricing', href: '/pricing' },
  ],
  social: [
    { name: 'Twitter', href: 'https://x.com/search?q=larp&src=typed_query', icon: 'twitter' },
    { name: 'GitHub', href: 'https://github.com/joancose00/larp', icon: 'github' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/larpracing/about/', icon: 'linkedin' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              $LARP
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              Redefining On-Chain Intelligence for the Post-Truth Era
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-base text-gray-300 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Connect</h3>
            <ul className="mt-4 space-y-4">
              {footerLinks.social.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-base text-gray-300 hover:text-white transition-colors flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} LARP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 