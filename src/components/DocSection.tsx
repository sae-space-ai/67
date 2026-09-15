import { Section, ContentBlock, TableData, BoxData, CardData } from '../types';

interface Props {
  section: Section;
}

export default function DocSection({ section }: Props) {
  return (
    <section data-section={section.id} className="scroll-mt-6">
      {/* Section Header */}
      <h2 className="text-xl sm:text-2xl font-bold text-[#003399] uppercase tracking-wide border-b-2 border-[#ffcc00] pb-2 mb-6">
        {section.number}. {section.title}
      </h2>

      {/* Content Blocks */}
      <div className="space-y-6">
        {section.content.map((block, idx) => (
          <ContentBlockRenderer key={idx} block={block} />
        ))}
      </div>
    </section>
  );
}

function ContentBlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p
          className="text-sm text-gray-800 leading-relaxed text-justify"
          dangerouslySetInnerHTML={{ __html: block.text }}
        />
      );
    case 'subsection':
      return (
        <div>
          <h3 className="text-base font-bold text-[#003399] mt-4 mb-3">{block.title}</h3>
          {block.text && (
            <p className="text-sm text-gray-800 leading-relaxed text-justify mb-3" dangerouslySetInnerHTML={{ __html: block.text }} />
          )}
          {block.table && <DocTable data={block.table} />}
          {block.list && (
            <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700 ml-2 my-3">
              {block.list.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          )}
          {block.orderedList && (
            <ol className="list-decimal list-inside space-y-1.5 text-sm text-gray-700 ml-2 my-3">
              {block.orderedList.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ol>
          )}
          {block.highlight && (
            <div className="bg-blue-50 border-l-4 border-[#003399] p-4 rounded-r-md my-4">
              <p className="text-sm text-gray-800" dangerouslySetInnerHTML={{ __html: `<strong>Conclusión:</strong> ${block.highlight}` }} />
            </div>
          )}
          {block.warning && (
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-md my-4">
              <p className="text-sm text-gray-800" dangerouslySetInnerHTML={{ __html: block.warning }} />
            </div>
          )}
          {block.box && <DocBox data={block.box} />}
          {block.card && <DocCard data={block.card} />}
          {block.closing && (
            <p className="text-sm text-gray-700 mt-3 italic" dangerouslySetInnerHTML={{ __html: block.closing }} />
          )}
        </div>
      );
    case 'highlight':
      return (
        <div className="bg-blue-50 border-l-4 border-[#003399] p-5 rounded-r-md my-4">
          <h4 className="text-sm font-bold text-[#003399] mb-2">{block.title}</h4>
          <p className="text-sm text-gray-800 mb-3" dangerouslySetInnerHTML={{ __html: block.text }} />
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
            {block.list.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        </div>
      );
    case 'box':
      return (
        <DocBox
          data={{
            variant: block.variant,
            title: block.title,
            text: block.text,
            list: block.orderedList,
            closing: block.closing,
          }}
        />
      );
    default:
      return null;
  }
}

function DocTable({ data }: { data: TableData }) {
  return (
    <div className="overflow-x-auto my-4 rounded-lg border border-gray-200">
      <table className="w-full text-xs sm:text-sm">
        <thead>
          <tr className="bg-gray-50">
            {data.headers.map((header, i) => (
              <th key={i} className="text-left p-3 font-semibold text-[#003399] border-b border-gray-200 whitespace-nowrap">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
              {row.map((cell, j) => (
                <td key={j} className="p-3 border-b border-gray-100 text-gray-700 whitespace-pre-line">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DocBox({ data }: { data: BoxData }) {
  const styles = {
    success: 'bg-green-50 border-l-4 border-green-700',
    warning: 'bg-yellow-50 border-l-4 border-yellow-500',
    critical: 'bg-red-50 border-l-4 border-red-600',
    highlight: 'bg-blue-50 border-l-4 border-[#003399]',
  };

  return (
    <div className={`${styles[data.variant]} p-5 rounded-r-md my-4`}>
      {data.title && (
        <h4 className="text-sm font-bold text-gray-900 mb-2">{data.title}</h4>
      )}
      <p className="text-sm text-gray-800" dangerouslySetInnerHTML={{ __html: data.text }} />
      {data.list && (
        <ol className="list-decimal list-inside space-y-1.5 text-sm text-gray-700 mt-3">
          {data.list.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ol>
      )}
      {data.closing && (
        <p className="text-sm text-gray-700 mt-3 font-medium" dangerouslySetInnerHTML={{ __html: data.closing }} />
      )}
    </div>
  );
}

function DocCard({ data }: { data: CardData }) {
  return (
    <div className="bg-gray-50 border-2 border-[#003399] rounded-lg p-5 my-4">
      <h4 className="text-sm font-bold text-[#003399] border-b-2 border-[#ffcc00] pb-2 mb-3">
        {data.title}
      </h4>
      <p className="text-sm text-gray-800 mb-3">{data.text}</p>
      <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700">
        {data.list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      {data.closing && (
        <p className="text-sm text-gray-700 mt-3 font-medium">{data.closing}</p>
      )}
    </div>
  );
}
