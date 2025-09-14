import { about } from "@/data";
import Link from "next/link";

export default function AboutSection() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <h2>Professional Summary</h2>
        <p>{about.professionalSummary}</p>
        <button>Download a Print version of My Resume (PDF)</button>
        <Link href="/cerficiations">Browse all my Certifications</Link>
      </div>
      <div>
        <h2>Overview</h2>
        <div>
          <span>Residence</span>
          <p>{about.residence}</p>
        </div>
        <div>
          <span>Email</span>
          <p>{about.email}</p>
        </div>
        <div>
          <span>Memberships</span>
          {about.memberships.map((membership) => (
            <p key={membership}>{membership}</p>
          ))}
        </div>
        <div>
          <span>Status</span>
          <p>{about.status}</p>
        </div>
      </div>
    </div>
  );
}
