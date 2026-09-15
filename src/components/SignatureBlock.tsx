export default function SignatureBlock() {
  return (
    <div className="mt-16 pt-8 border-t border-gray-200">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
        {/* Signature 1 */}
        <div className="text-center">
          <p className="text-sm text-gray-700 mb-16">
            <strong>For EU Inc. 001 (Coordinator):</strong>
          </p>
          <div className="border-t border-gray-800 pt-3">
            <p className="text-sm font-bold text-gray-900">Prof. Manuel Gago Fernández</p>
            <p className="text-xs text-gray-600 mt-1">Legal Representative / Project Coordinator</p>
            <p className="text-xs text-gray-600">ORCID: 0000-0003-1080-2464</p>
            <p className="text-xs text-gray-600">Email: manuel.gago.eduextrem@gmail.com</p>
            <p className="text-xs text-gray-500 mt-2">Date: 15 September 2026</p>
          </div>
        </div>

        {/* Signature 2 */}
        <div className="text-center">
          <p className="text-sm text-gray-700 mb-16">
            <strong>For Universidad de Extremadura (Subcontractor):</strong>
          </p>
          <div className="border-t border-gray-800 pt-3">
            <p className="text-sm font-bold text-gray-900">[Rector de la Universidad de Extremadura]</p>
            <p className="text-xs text-gray-600 mt-1">Legal Representative</p>
            <p className="text-xs text-gray-600">PIC: 999858832</p>
            <p className="text-xs text-gray-500 mt-2">Date: [To be completed upon signature]</p>
          </div>
        </div>
      </div>
    </div>
  );
}
