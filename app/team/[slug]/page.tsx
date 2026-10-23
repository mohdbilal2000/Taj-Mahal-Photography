import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import MobileActionBar from '@/components/MobileActionBar';
import QuickBook from '@/components/QuickBook';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { TEAM, memberBySlug, personNode } from '@/lib/team';
import {
  SITE,
  jsonLd,
  graphSchema,
  breadcrumbSchema,
  speakableSpec,
} from '@/lib/seo';

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return TEAM.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const member = memberBySlug(slug);
  if (!member) return {};

  const url = `${SITE.url}/team/${member.slug}`;

  return {
    title: { absolute: `${member.name} — ${member.role}` },
    description: member.summary,
    alternates: { canonical: url },
    openGraph: {
      type: 'profile',
      title: `${member.name} — ${member.role}, Taj Mahal Photography`,
      description: member.summary,
      url,
      images: [{ url: `${SITE.url}${member.image}`, alt: member.imageAlt }],
    },
  };
}

export default async function TeamMemberPage({ params }: Params) {
  const { slug } = await params;
  const member = memberBySlug(slug);
  if (!member) notFound();

  const url = `${SITE.url}/team/${member.slug}`;
  const others = TEAM.filter((m) => m.slug !== member.slug);

  return (
    <div className="flex min-h-screen flex-col pt-20">
      <Header />

      <main className="flex-grow bg-white">
        <header className="bg-ink-900 text-white">
          <div className="shell-narrow max-w-4xl py-14 md:py-20">
            <nav aria-label="Breadcrumb" className="mb-6 text-xs tracking-wide text-marble-300">
              <Link href="/about" className="inline-block py-1 hover:text-gold-400">
                About
              </Link>
            </nav>
            <span className="eyebrow text-gold-400">{member.role}</span>
            <h1 className="h1-fluid font-serif font-semibold mt-3 text-balance">{member.name}</h1>
          </div>
        </header>

        <section className="section">
          <div className="shell-narrow max-w-4xl">
            <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-start">
              <div className="collage-card" style={{ ['--tilt' as string]: '-1.6deg' }}>
                <div className="collage-media relative aspect-[4/5]">
                  <Image
                    src={member.image}
                    alt={member.imageAlt}
                    fill
                    priority
                    sizes="(min-width: 768px) 32vw, 100vw"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="collage-caption px-1 py-3 text-xl">{member.name.split(' ')[0]}</p>
              </div>

              <div>
                <p id="answer" className="lead border-l-2 border-gold-500 pl-5 text-ink-900 text-pretty">
                  {member.answer}
                </p>

                {member.bio.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="mt-5 leading-relaxed text-ink-700 text-pretty">
                    {paragraph}
                  </p>
                ))}

                <dl className="mt-8 grid gap-4 sm:grid-cols-2">
                  {member.credential && (
                    <div className="rounded-sm border hairline bg-marble-50 p-4 sm:col-span-2">
                      <dt className="eyebrow text-gold-700">Licence</dt>
                      <dd className="mt-1 text-sm text-ink-900">{member.credential.name}</dd>
                      <dd className="mt-1 text-xs text-ink-500">
                        Issued by{' '}
                        <a
                          href={member.credential.issuerUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-sweep inline-block min-h-[28px] py-1 font-semibold text-gold-700"
                        >
                          {member.credential.issuer}
                        </a>
                        . The licence number is shown at the gate on request.
                      </dd>
                    </div>
                  )}

                  <div className="rounded-sm border hairline p-4">
                    <dt className="eyebrow text-ink-400">Languages</dt>
                    <dd className="mt-1 text-sm text-ink-900">
                      {member.languages.map((l) => l.label).join(' · ')}
                    </dd>
                  </div>

                  <div className="rounded-sm border hairline p-4">
                    <dt className="eyebrow text-ink-400">Based in</dt>
                    <dd className="mt-1 text-sm text-ink-900">
                      {SITE.address.city}, {SITE.address.state}
                    </dd>
                  </div>
                </dl>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {member.knowsAbout.map((topic) => (
                    <li
                      key={topic}
                      className="rounded-full border hairline px-3 py-1 text-xs text-ink-700"
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section border-t hairline bg-marble-50">
          <div className="shell-narrow max-w-4xl">
            <QuickBook />
          </div>
        </section>

        {others.length > 0 && (
          <section className="section">
            <div className="shell-narrow max-w-4xl">
              <h2 className="h3-fluid font-serif font-semibold text-ink-900 mb-6">
                The rest of the team
              </h2>
              <div className="collage-grid grid gap-6 sm:grid-cols-2">
                {others.map((other) => (
                  <Link key={other.slug} href={`/team/${other.slug}`} className="collage-card group">
                    <div className="collage-media img-zoom relative aspect-[16/10]">
                      <Image
                        src={other.image}
                        alt={other.imageAlt}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="collage-body">
                      <p className="eyebrow text-gold-700">{other.role}</p>
                      <h3 className="mt-1 font-serif text-lg font-semibold text-ink-900 transition-colors group-hover:text-gold-600">
                        {other.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-700">{other.summary}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
      <StickyWhatsApp />
      <MobileActionBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            graphSchema([
              breadcrumbSchema([
                { name: 'Home', url: SITE.url },
                { name: 'About', url: `${SITE.url}/about` },
                { name: member.name, url },
              ]),
              personNode(member),
              {
                '@type': 'ProfilePage',
                '@id': `${url}#webpage`,
                url,
                name: `${member.name} — ${member.role}`,
                description: member.summary,
                isPartOf: { '@id': `${SITE.url}/#website` },
                mainEntity: { '@id': personNode(member)['@id'] },
                speakable: speakableSpec(['#answer', 'h1']),
              },
            ]),
          ),
        }}
      />
    </div>
  );
}
