export default function DocHeader() {
  return (
    <div className="px-8 sm:px-12 md:px-16 pt-10 pb-6 border-b-[3px] border-[#003399]">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
        <div>
          <p className="text-sm font-bold text-[#003399] flex items-center gap-2">
            <span className="text-lg">🇪🇺</span> EUROPEAN COMMISSION
          </p>
          <p className="text-xs text-gray-600 mt-1">
            European High-Performance Computing Joint Undertaking (EuroHPC JU)
          </p>
        </div>
        <div className="text-right text-xs text-gray-700 leading-relaxed">
          <p><strong>Procedure Ref:</strong> EUROHPC/2026/OP/0008</p>
          <p><strong>Lot:</strong> 2 (Large-Scale AI Gigafactories)</p>
          <p><strong>Submission ID:</strong> 300177578</p>
          <p><strong>Date:</strong> 15 September 2026</p>
        </div>
      </div>
    </div>
  );
}
