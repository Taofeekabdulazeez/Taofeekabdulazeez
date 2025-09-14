import { socials } from "@/data";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="h-screen grid grid-cols-2">
      <div></div>
      <div>
        <h1>Taofeek Abdulazeez</h1>
        <p>
          Software Engineer | BS in Computer Science | Open Source Contributor
        </p>
        <div className="flex items-center gap-3">
          {socials.map(({ name, Icon, href }) => (
            <Link key={name} href={href} className="p-3 rounded-full">
              <Icon size={20} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
