import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export function TopContactBar() {
  return (
    <div className="bg-amazonGreen-900 text-amazonGreen-50 py-2 text-xs sm:text-sm">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
        {/* Información de contacto */}
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-4 gap-y-1.5">
          <div className="flex items-center gap-1.5 flex-wrap">
            <Phone className="h-4 w-4 flex-shrink-0" />
            <span className="whitespace-nowrap">098 351 7007</span>
          </div>
          <div className="flex items-center gap-1.5 flex-wrap">
            <Mail className="h-4 w-4 flex-shrink-0" />
            <span className="break-all sm:break-normal">info@hotelaorquidea.com</span>
          </div>
          <div className="flex items-center gap-1.5 flex-wrap">
            <MapPin className="h-4 w-4 flex-shrink-0" />
            <span className="text-center md:text-left">MACAS - MORONA SANTIAGO - ECUADOR</span>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="flex items-center justify-center md:justify-start gap-3 mt-1 md:mt-0">
          <Link href="#" className="hover:text-amazonGreen-200 transition-colors" prefetch={false} aria-label="Facebook">
            <Facebook className="h-5 w-5" />
          </Link>
          <Link href="#" className="hover:text-amazonGreen-200 transition-colors" prefetch={false} aria-label="Instagram">
            <Instagram className="h-5 w-5" />
          </Link>
          <Link href="#" className="hover:text-amazonGreen-200 transition-colors" prefetch={false} aria-label="Twitter">
            <Twitter className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}