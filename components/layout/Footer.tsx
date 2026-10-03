import Link from "next/link";
import { site } from "@/content/site";
import Logo from "@/components/ui/Logo";


export default function Footer() {
  const { blurb, navigate, team, contact, legal } = site.footer;

  return (
    <footer id="contact">
      <div className="px-6 py-8 md:p-[60px]">
        <div className="grid gap-12 lg:grid-cols-[42fr_17.5fr_22fr_18.5fr] lg:gap-0">

          <div>
            <Logo width={320}/>
            <p className="mt-4 max-w-[23rem] lg:pl-5">{blurb}</p>
          </div>


          <nav aria-label="Footer" className="lg:pt-1">
            <span className="font-sans font-[400]">Navigate</span>
            <ul className="mt-2 text-caption leading-6">
              {navigate.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-accent transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>


          <div className="order-last lg:order-none lg:pt-1">
            <span className="font-sans font-[400]">Our Team</span>
            <ul className="mt-2 text-caption leading-6">
              {team.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>


          <div className="lg:pt-1">
            <span className="font-sans font-[400]">Contact</span>
            <address className="mt-2 text-caption">
              {contact.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p>
                <a href={`mailto:${contact.email}`} className="break-all hover:text-accent transition-colors">
                  {contact.email}
                </a>
              </p>
              <p>
                <a href={`tel:${contact.phone.replace(/\D/g, "")}`} className="hover:text-accent transition-colors">
                  {contact.phone}
                </a>
              </p>
            </address>
            <p className="mt-5 text-caption">{contact.serviceArea}</p>
          </div>
        </div>
      </div>

      <div className="bg-accent px-6 py-2.5 text-label lg:px-[6.8vw]">
        {legal.map((item, i) => (
          <span key={item.label}>
            {i > 0 && <span aria-hidden="true"> | </span>}
            <Link href={item.href} className="hover:underline">
              {item.label}
            </Link>
          </span>
        ))}
      </div>
    </footer>
  );
}