import type { Section } from '@/lib/blog';

export function sectionId(heading: string) {
  return heading
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function SectionBlock({ section, index }: { section: Section; index: number }) {
  return (
    <section id={sectionId(section.heading)} className="reveal scroll-mt-28">
      <div className="mb-5 flex items-baseline gap-4">
        <span aria-hidden="true" className="font-serif text-4xl italic leading-none text-gold-500 sm:text-5xl">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h2 className="h3-fluid font-serif font-semibold text-ink-900 text-balance">{section.heading}</h2>
      </div>

      {section.body?.map((paragraph, i) => (
        <p
          key={paragraph.slice(0, 40)}
          className={`mb-5 text-[1.0625rem] leading-[1.85] text-ink-700 text-pretty sm:text-lg ${
            index === 0 && i === 0
              ? 'first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-serif first-letter:text-6xl first-letter:italic first-letter:leading-[0.8] first-letter:text-gold-600'
              : ''
          }`}
        >
          {paragraph}
        </p>
      ))}

      {section.list && (
        <ul className="my-6 space-y-1 rounded-2xl border hairline bg-white p-3 sm:p-4">
          {section.list.map((item) => (
            <li key={item.slice(0, 40)} className="flex gap-3 rounded-lg px-2 py-2.5 text-ink-700 leading-relaxed">
              <span aria-hidden="true" className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-400/25 text-[11px] font-bold text-gold-700">
                ✓
              </span>
              <span className="text-pretty">{item}</span>
            </li>
          ))}
        </ul>
      )}

      {section.table && (
        <div className="my-6 overflow-hidden rounded-2xl border hairline bg-white">
          <table className="block w-full text-left text-sm sm:table">
            <thead className="hidden bg-marble-100 sm:table-header-group">
              <tr>
                <th scope="col" className="w-1/3 px-5 py-3 font-semibold text-ink-900">{section.table.head[0]}</th>
                <th scope="col" className="px-5 py-3 font-semibold text-ink-900">{section.table.head[1]}</th>
              </tr>
            </thead>
            <tbody className="block sm:table-row-group">
              {section.table.rows.map(([left, right]) => (
                <tr key={left} className="block border-t hairline first:border-t-0 sm:table-row sm:first:border-t">
                  <td className="block px-5 pb-1 pt-4 font-semibold text-ink-900 sm:table-cell sm:py-4 sm:align-top">{left}</td>
                  <td className="block px-5 pb-4 text-ink-700 sm:table-cell sm:py-4 sm:align-top">{right}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

