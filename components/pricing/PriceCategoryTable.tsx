import type { LegacyPriceSection } from "./priceData";

export function PriceCategoryTable({
  section,
}: {
  section: LegacyPriceSection;
}) {
  return (
    <section id={section.slug} className="space-y-4">
      {section.blocks.map((block, index) => {
        if (block.type === "info") {
          return (
            <div
              key={`${section.slug}-info-${index}`}
              className={`rounded-[24px] border px-5 py-4 text-[1.05rem] leading-7 backdrop-blur-sm sm:px-6 ${
                block.variant === "secondary"
                  ? "border-[#d7c7a0]/18 bg-[#d7c7a0]/10 text-[#efe1bc]"
                  : "border-white/10 bg-white/[0.03] text-white/74"
              }`}
            >
              {block.text}
            </div>
          );
        }

        const { table } = block;

        return (
          <div
            key={`${section.slug}-table-${index}`}
            className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/20 backdrop-blur-sm"
          >
            {table.caption && (
              <div className="border-b border-white/10 px-5 py-5 sm:px-6">
                <p className="text-sm uppercase tracking-[0.35em] text-[#d7c7a0]">
                  {table.caption}
                </p>
              </div>
            )}

            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-left text-[1.05rem]">
                <thead className="bg-black/28 text-white">
                  <tr className="border-b border-white/10">
                    {table.headers.map((header) => (
                      <th
                        key={header}
                        className="px-4 py-4 text-[0.95rem] font-semibold leading-6 sm:px-6 sm:text-[1.05rem]"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {table.rows.map((row, rowIndex) => (
                    <tr
                      key={`${row.label}-${rowIndex}`}
                      className={`border-b border-white/8 align-top ${
                        rowIndex % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"
                      }`}
                    >
                      <th
                        scope="row"
                        className="px-4 py-4 text-[0.98rem] font-semibold leading-7 text-white sm:px-6 sm:text-[1.08rem]"
                      >
                        {row.label}
                      </th>
                      {row.values.map((value, valueIndex) => (
                        <td
                          key={`${row.label}-${valueIndex}`}
                          className={`px-4 py-4 text-[0.98rem] leading-7 sm:px-6 sm:text-[1.08rem] ${
                            valueIndex === 0
                              ? "font-medium text-[#efe1bc]"
                              : "text-white/82"
                          }`}
                        >
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
    </section>
  );
}
