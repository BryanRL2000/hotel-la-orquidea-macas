import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export function TopContactBar() {
  return (
    <div className="bg-amazonGreen-900 text-amazonGreen-50 py-2 text-sm">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-4 gap-y-1">
          <div className="flex items-center gap-1">
            <Phone className="h-4 w-4" />
            <span>099 497 9605</span>
          </div>
          <div className="flex items-center gap-1">
            <Mail className="h-4 w-4" />
            <span>info@hotelllaorquidea.com</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>MACAS - MORONA SANTIAGO - AMAZONÍA - ECUADOR</span>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-2 md:mt-0">
          <Link href="#" className="hover:text-amazonGreen-200 transition-colors" prefetch={false}>
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" className="hover:text-amazonGreen-200 transition-colors" prefetch={false}>
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="hover:text-amazonGreen-200 transition-colors" prefetch={false}>
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
