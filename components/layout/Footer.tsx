import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { getSiteMetadata } from '../../data/site'
import Link from 'next/link'

export default function Footer() {
  const site = getSiteMetadata()
  
  return (
    <footer className="bg-charcoal border-t border-slate">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Contact */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">{site.name}</h3>
            <p className="text-gray mb-4">{site.title}</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray">
                <Mail className="w-4 h-4 text-skyBlue" />
                <a href={`mailto:${site.email}`} className="hover:text-skyBlue transition-colors">
                  {site.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray">
                <Phone className="w-4 h-4 text-skyBlue" />
                <span>{site.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-gray">
                <MapPin className="w-4 h-4 text-skyBlue" />
                <span>{site.location}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray">
              <li><Link href="/#about" className="hover:text-skyBlue transition-colors">About</Link></li>
              <li><Link href="/#projects" className="hover:text-skyBlue transition-colors">Projects</Link></li>
              <li><Link href="/blog" className="hover:text-skyBlue transition-colors">Blog</Link></li>
              <li><Link href="/resume" className="hover:text-skyBlue transition-colors">Resume</Link></li>
              <li><Link href="/contact" className="hover:text-skyBlue transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <div className="flex items-center gap-4">
              <a
                href={site.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 bg-navy hover:bg-skyBlue/10 border border-slate hover:border-skyBlue rounded-lg text-gray hover:text-skyBlue transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 bg-navy hover:bg-skyBlue/10 border border-slate hover:border-skyBlue rounded-lg text-gray hover:text-skyBlue transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate mt-8 pt-8 text-center text-gray text-sm">
          <p>© {new Date().getFullYear()} {site.name}. Built with Next.js, TypeScript, Tailwind CSS & Three.js.</p>
        </div>
      </div>
    </footer>
  )
}
