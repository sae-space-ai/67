import { useState } from 'react';

// Types
interface Member {
  id: string;
  name: string;
  role: 'leader' | 'member' | 'subcontractor';
  type: 'company' | 'natural_person' | 'university';
  status: 'complete' | 'warning' | 'error' | 'pending';
  documents: Document[];
  pic?: string;
  country?: string;
}

interface Document {
  id: string;
  name: string;
  status: 'uploaded' | 'missing' | 'pending' | 'review';
  dueDate?: string;
}

interface Issue {
  id: string;
  severity: 'critical' | 'warning' | 'info';
  title: string;
  description: string;
  affected: string[];
}

interface Deadline {
  id: string;
  title: string;
  date: string;
  status: 'overdue' | 'urgent' | 'upcoming' | 'completed';
  category: string;
}

// Data
const initialMembers: Member[] = [
  {
    id: '1',
    name: 'EU Inc. 001',
    role: 'leader',
    type: 'company',
    status: 'complete',
    pic: '999123456',
    country: 'Spain',
    documents: [
      { id: 'd1', name: 'Declaration on honour', status: 'uploaded' },
      { id: 'd2', name: 'Legal and regulatory capacity', status: 'uploaded' },
      { id: 'd3', name: 'Technical and professional capacity', status: 'uploaded' },
      { id: 'd4', name: 'Economic and financial capacity', status: 'uploaded' },
      { id: 'd5', name: 'Exclusion criteria', status: 'uploaded' },
      { id: 'd6', name: 'Other documents', status: 'uploaded' },
    ],
  },
  {
    id: '2',
    name: 'Manuel Gago Fernandez',
    role: 'member',
    type: 'natural_person',
    status: 'complete',
    country: 'Spain',
    documents: [
      { id: 'd7', name: 'Declaration on honour', status: 'uploaded' },
      { id: 'd8', name: 'Legal and regulatory capacity', status: 'uploaded' },
      { id: 'd9', name: 'Technical and professional capacity', status: 'uploaded' },
      { id: 'd10', name: 'Economic and financial capacity', status: 'uploaded' },
      { id: 'd11', name: 'Exclusion criteria', status: 'uploaded' },
      { id: 'd12', name: 'Other documents', status: 'uploaded' },
    ],
  },
  {
    id: '3',
    name: 'Universidad de Extremadura',
    role: 'subcontractor',
    type: 'university',
    status: 'warning',
    pic: '999858832',
    country: 'Spain',
    documents: [
      { id: 'd13', name: 'Declaration on honour', status: 'pending' },
      { id: 'd14', name: 'Legal and regulatory capacity', status: 'missing' },
      { id: 'd15', name: 'Technical and professional capacity', status: 'missing' },
      { id: 'd16', name: 'Economic and financial capacity', status: 'pending' },
      { id: 'd17', name: 'Exclusion criteria', status: 'missing' },
      { id: 'd18', name: 'Other documents', status: 'missing' },
    ],
  },
];

const removedMembers: Member[] = [
  {
    id: '4',
    name: 'INDRA SISTEMAS, S.A.',
    role: 'subcontractor',
    type: 'company',
    status: 'error',
    country: 'Spain',
    documents: [
      { id: 'd19', name: 'Declaration on honour', status: 'missing' },
      { id: 'd20', name: 'Legal and regulatory capacity', status: 'missing' },
      { id: 'd21', name: 'Technical and professional capacity', status: 'missing' },
      { id: 'd22', name: 'Economic and financial capacity', status: 'missing' },
      { id: 'd23', name: 'Exclusion criteria', status: 'missing' },
      { id: 'd24', name: 'Other documents', status: 'missing' },
    ],
  },
  {
    id: '5',
    name: 'Cuatrecasas, Gonçalves Pereira, S.L.P.',
    role: 'subcontractor',
    type: 'company',
    status: 'error',
    country: 'Spain',
    documents: Array.from({ length: 6 }, (_, i) => ({
      id: `d${25 + i}`,
      name: ['Declaration on honour', 'Legal and regulatory capacity', 'Technical and professional capacity', 'Economic and financial capacity', 'Exclusion criteria', 'Other documents'][i],
      status: 'missing' as const,
    })),
  },
  {
    id: '6',
    name: 'ACS, Actividades de Construcción y Servicios, S.A.',
    role: 'subcontractor',
    type: 'company',
    status: 'error',
    country: 'Spain',
    documents: Array.from({ length: 6 }, (_, i) => ({
      id: `d${31 + i}`,
      name: ['Declaration on honour', 'Legal and regulatory capacity', 'Technical and professional capacity', 'Economic and financial capacity', 'Exclusion criteria', 'Other documents'][i],
      status: 'missing' as const,
    })),
  },
  {
    id: '7',
    name: 'TELEFONICA INNOVACION DIGITAL, S.L.',
    role: 'subcontractor',
    type: 'company',
    status: 'error',
    country: 'Spain',
    documents: Array.from({ length: 6 }, (_, i) => ({
      id: `d${37 + i}`,
      name: ['Declaration on honour', 'Legal and regulatory capacity', 'Technical and professional capacity', 'Economic and financial capacity', 'Exclusion criteria', 'Other documents'][i],
      status: 'missing' as const,
    })),
  },
  {
    id: '8',
    name: 'BANCO SANTANDER, S.A.',
    role: 'subcontractor',
    type: 'company',
    status: 'error',
    country: 'Spain',
    documents: Array.from({ length: 6 }, (_, i) => ({
      id: `d${43 + i}`,
      name: ['Declaration on honour', 'Legal and regulatory capacity', 'Technical and professional capacity', 'Economic and financial capacity', 'Exclusion criteria', 'Other documents'][i],
      status: 'missing' as const,
    })),
  },
];

const issues: Issue[] = [
  {
    id: 'i1',
    severity: 'critical',
    title: 'Roles Were Inverted (FIXED)',
    description: 'EU Inc. 001 was marked as "Natural Person" and Manuel Gago Fernandez as "Private Company". These roles have been corrected.',
    affected: ['EU Inc. 001', 'Manuel Gago Fernandez'],
  },
  {
    id: 'i2',
    severity: 'critical',
    title: '6 Subcontractors Removed',
    description: 'INDRA, Cuatrecasas, ACS, Telefónica, and Santander were removed due to inability to obtain required documentation before deadline.',
    affected: ['INDRA SISTEMAS', 'Cuatrecasas', 'ACS', 'TELEFONICA', 'BANCO SANTANDER'],
  },
  {
    id: 'i3',
    severity: 'warning',
    title: 'UEx Documents Pending',
    description: 'Universidad de Extremadura requires 4 documents still missing. These can be obtained from public university sources.',
    affected: ['Universidad de Extremadura'],
  },
  {
    id: 'i4',
    severity: 'info',
    title: 'Consortium Simplified to 3 Entities',
    description: 'Following recommended Option A: minimal viable consortium with leader, member, and one university subcontractor.',
    affected: [],
  },
];

const deadlines: Deadline[] = [
  { id: 'dl1', title: 'Consortium Registration', date: '2024-11-08', status: 'completed', category: 'Administrative' },
  { id: 'dl2', title: 'Role Corrections', date: '2024-11-09', status: 'completed', category: 'Administrative' },
  { id: 'dl3', title: 'Remove Invalid Subcontractors', date: '2024-11-09', status: 'completed', category: 'Administrative' },
  { id: 'dl4', title: 'Upload UEx Documents', date: '2024-11-11', status: 'urgent', category: 'Documentation' },
  { id: 'dl5', title: 'Technical Proposal Draft', date: '2024-11-11', status: 'upcoming', category: 'Technical' },
  { id: 'dl6', title: 'Final Submission Deadline', date: '2024-11-12', status: 'upcoming', category: 'Submission' },
];

const recommendations = [
  {
    id: 'r1',
    title: 'Generate UEx Documents',
    description: 'Create the 6 required PDF documents for Universidad de Extremadura using publicly available templates.',
    priority: 'high',
    status: 'pending',
  },
  {
    id: 'r2',
    title: 'Technical Justification',
    description: 'Prepare a justification document explaining why the 3-entity consortium meets all requirements.',
    priority: 'high',
    status: 'pending',
  },
  {
    id: 'r3',
    title: 'Verify PIC Numbers',
    description: 'Confirm that all PIC numbers are valid in the Participant Identification Code database.',
    priority: 'medium',
    status: 'in_progress',
  },
  {
    id: 'r4',
    title: 'Budget Alignment',
    description: 'Ensure budget allocation across consortium members meets the minimum thresholds.',
    priority: 'medium',
    status: 'pending',
  },
];

// Tab type
type Tab = 'dashboard' | 'members' | 'documents' | 'issues' | 'timeline' | 'recommendations';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');
  const [members] = useState<Member[]>(initialMembers);
  const [expandedMember, setExpandedMember] = useState<string | null>(null);

  const totalDocs = members.reduce((acc, m) => acc + m.documents.length, 0);
  const uploadedDocs = members.reduce((acc, m) => acc + m.documents.filter(d => d.status === 'uploaded').length, 0);
  const missingDocs = members.reduce((acc, m) => acc + m.documents.filter(d => d.status === 'missing').length, 0);
  const pendingDocs = members.reduce((acc, m) => acc + m.documents.filter(d => d.status === 'pending').length, 0);

  const progressPercent = Math.round((uploadedDocs / totalDocs) * 100);

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'members', label: 'Consortium', icon: '👥' },
    { id: 'documents', label: 'Documents', icon: '📄' },
    { id: 'issues', label: 'Issues', icon: '⚠️' },
    { id: 'timeline', label: 'Timeline', icon: '📅' },
    { id: 'recommendations', label: 'Actions', icon: '✅' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-sm font-bold">
                CB
              </div>
              <div>
                <h1 className="text-lg font-bold text-white">Consortium Bid Manager</h1>
                <p className="text-xs text-gray-400">EU Public Tender Dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-3 py-1">
                <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                <span className="text-xs text-yellow-300 font-medium">Deadline: Nov 12</span>
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-sm">
                👤
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-800/50 border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-2">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === 'dashboard' && (
          <DashboardView
            members={members}
            totalDocs={totalDocs}
            uploadedDocs={uploadedDocs}
            missingDocs={missingDocs}
            pendingDocs={pendingDocs}
            progressPercent={progressPercent}
          />
        )}
        {activeTab === 'members' && (
          <MembersView
            members={members}
            removedMembers={removedMembers}
            expandedMember={expandedMember}
            setExpandedMember={setExpandedMember}
          />
        )}
        {activeTab === 'documents' && <DocumentsView members={members} />}
        {activeTab === 'issues' && <IssuesView />}
        {activeTab === 'timeline' && <TimelineView />}
        {activeTab === 'recommendations' && <RecommendationsView />}
      </main>
    </div>
  );
}

// Dashboard View
function DashboardView({
  members,
  totalDocs,
  uploadedDocs,
  missingDocs,
  pendingDocs,
  progressPercent,
}: {
  members: Member[];
  totalDocs: number;
  uploadedDocs: number;
  missingDocs: number;
  pendingDocs: number;
  progressPercent: number;
}) {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Active Members"
          value={members.length.toString()}
          subtitle="of 3 required minimum"
          icon="👥"
          color="blue"
        />
        <StatCard
          title="Documents Uploaded"
          value={`${uploadedDocs}/${totalDocs}`}
          subtitle={`${progressPercent}% complete`}
          icon="📄"
          color="green"
        />
        <StatCard
          title="Missing Documents"
          value={missingDocs.toString()}
          subtitle={`${pendingDocs} pending review`}
          icon="⚠️"
          color="yellow"
        />
        <StatCard
          title="Days Remaining"
          value="3"
          subtitle="Until Nov 12 deadline"
          icon="⏰"
          color="red"
        />
      </div>

      {/* Progress Bar */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-white">Overall Readiness</h3>
          <span className="text-2xl font-bold text-blue-400">{progressPercent}%</span>
        </div>
        <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-2 text-xs text-gray-400">
          <span>0%</span>
          <span>Target: 100% by Nov 12</span>
          <span>100%</span>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Issues */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span>🚨</span> Critical Issues
          </h3>
          <div className="space-y-3">
            {issues.filter(i => i.severity === 'critical').map(issue => (
              <div key={issue.id} className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                <div className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">●</span>
                  <div>
                    <p className="text-sm font-medium text-red-200">{issue.title}</p>
                    <p className="text-xs text-gray-400 mt-1">{issue.description}</p>
                  </div>
                </div>
              </div>
            ))}
            {issues.filter(i => i.severity === 'warning').map(issue => (
              <div key={issue.id} className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
                <div className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-0.5">●</span>
                  <div>
                    <p className="text-sm font-medium text-yellow-200">{issue.title}</p>
                    <p className="text-xs text-gray-400 mt-1">{issue.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Deadlines */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span>📅</span> Upcoming Deadlines
          </h3>
          <div className="space-y-3">
            {deadlines.filter(d => d.status !== 'completed').map(deadline => (
              <div key={deadline.id} className="flex items-center gap-3 bg-gray-700/50 rounded-lg p-3">
                <div className={`w-2 h-2 rounded-full ${
                  deadline.status === 'overdue' ? 'bg-red-500' :
                  deadline.status === 'urgent' ? 'bg-yellow-500 animate-pulse' :
                  'bg-blue-500'
                }`}></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-white">{deadline.title}</p>
                  <p className="text-xs text-gray-400">{deadline.category}</p>
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded ${
                  deadline.status === 'urgent' ? 'bg-yellow-500/20 text-yellow-300' :
                  'bg-blue-500/20 text-blue-300'
                }`}>
                  {deadline.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Strategy Card */}
      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-xl p-6 border border-blue-700/50">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-2xl">
            🎯
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Current Strategy: Option A — Minimal Viable Consortium</h3>
            <p className="text-sm text-gray-300 mb-3">
              Simplified from 8 entities to 3: Group Leader (EU Inc. 001), Group Member (Manuel Gago Fernandez), 
              and Subcontractor (Universidad de Extremadura). This reduces documentation burden from 48 to 18 documents.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">✓ Roles Corrected</span>
              <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">✓ Subcontractors Reduced</span>
              <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded">⏳ UEx Docs Pending</span>
              <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">📋 Technical Proposal Needed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Stat Card Component
function StatCard({ title, value, subtitle, icon, color }: {
  title: string;
  value: string;
  subtitle: string;
  icon: string;
  color: 'blue' | 'green' | 'yellow' | 'red';
}) {
  const colorClasses = {
    blue: 'from-blue-500/20 to-blue-600/10 border-blue-500/30',
    green: 'from-green-500/20 to-green-600/10 border-green-500/30',
    yellow: 'from-yellow-500/20 to-yellow-600/10 border-yellow-500/30',
    red: 'from-red-500/20 to-red-600/10 border-red-500/30',
  };

  return (
    <div className={`bg-gradient-to-br ${colorClasses[color]} border rounded-xl p-5`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-2xl">{icon}</span>
      </div>
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="text-sm text-gray-400 mt-1">{title}</p>
      <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>
    </div>
  );
}

// Members View
function MembersView({
  members,
  removedMembers,
  expandedMember,
  setExpandedMember,
}: {
  members: Member[];
  removedMembers: Member[];
  expandedMember: string | null;
  setExpandedMember: (id: string | null) => void;
}) {
  const [showRemoved, setShowRemoved] = useState(false);

  const roleLabels = {
    leader: 'Group Leader',
    member: 'Group Member',
    subcontractor: 'Subcontractor',
  };

  const typeLabels = {
    company: 'Private Company',
    natural_person: 'Natural Person',
    university: 'Higher Education Institution',
  };

  const statusColors = {
    complete: 'bg-green-500',
    warning: 'bg-yellow-500',
    error: 'bg-red-500',
    pending: 'bg-gray-500',
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Consortium Members</h2>
          <p className="text-sm text-gray-400 mt-1">Active consortium configuration — 3 entities</p>
        </div>
        <button
          onClick={() => setShowRemoved(!showRemoved)}
          className="text-sm bg-gray-700 hover:bg-gray-600 text-gray-300 px-4 py-2 rounded-lg transition-colors"
        >
          {showRemoved ? 'Hide' : 'Show'} Removed ({removedMembers.length})
        </button>
      </div>

      {/* Active Members */}
      <div className="space-y-4">
        {members.map(member => (
          <div key={member.id} className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
            <div
              className="p-5 cursor-pointer hover:bg-gray-750 transition-colors"
              onClick={() => setExpandedMember(expandedMember === member.id ? null : member.id)}
            >
              <div className="flex items-center gap-4">
                <div className={`w-3 h-3 rounded-full ${statusColors[member.status]}`}></div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">
                      {roleLabels[member.role]}
                    </span>
                    <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded">
                      {typeLabels[member.type]}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mt-1 text-xs text-gray-400">
                    {member.pic && <span>PIC: {member.pic}</span>}
                    {member.country && <span>🌍 {member.country}</span>}
                    <span>📄 {member.documents.filter(d => d.status === 'uploaded').length}/{member.documents.length} docs</span>
                  </div>
                </div>
                <div className="text-gray-400">
                  {expandedMember === member.id ? '▲' : '▼'}
                </div>
              </div>
            </div>
            {expandedMember === member.id && (
              <div className="border-t border-gray-700 p-5 bg-gray-800/50">
                <h4 className="text-sm font-medium text-gray-300 mb-3">Required Documents</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {member.documents.map(doc => (
                    <div key={doc.id} className="flex items-center gap-2 bg-gray-700/50 rounded-lg px-3 py-2">
                      <span className={`w-2 h-2 rounded-full ${
                        doc.status === 'uploaded' ? 'bg-green-500' :
                        doc.status === 'missing' ? 'bg-red-500' :
                        doc.status === 'pending' ? 'bg-yellow-500' :
                        'bg-blue-500'
                      }`}></span>
                      <span className="text-sm text-gray-300 flex-1">{doc.name}</span>
                      <span className={`text-xs px-2 py-0.5 rounded ${
                        doc.status === 'uploaded' ? 'bg-green-500/20 text-green-300' :
                        doc.status === 'missing' ? 'bg-red-500/20 text-red-300' :
                        doc.status === 'pending' ? 'bg-yellow-500/20 text-yellow-300' :
                        'bg-blue-500/20 text-blue-300'
                      }`}>
                        {doc.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Removed Members */}
      {showRemoved && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-400 flex items-center gap-2">
            <span>🗑️</span> Removed Members (6)
          </h3>
          {removedMembers.map(member => (
            <div key={member.id} className="bg-gray-800/50 rounded-xl border border-gray-700/50 p-4 opacity-60">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="flex-1">
                  <h3 className="text-base font-medium text-gray-400 line-through">{member.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Removed: Unable to obtain required documentation before deadline
                  </p>
                </div>
                <span className="text-xs bg-red-500/20 text-red-300 px-2 py-0.5 rounded">
                  0/6 docs
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Documents View
function DocumentsView({ members }: { members: Member[] }) {
  const allDocs = members.flatMap(m =>
    m.documents.map(d => ({ ...d, memberName: m.name, memberStatus: m.status }))
  );

  const docTypes = [
    'Declaration on honour',
    'Legal and regulatory capacity',
    'Technical and professional capacity',
    'Economic and financial capacity',
    'Exclusion criteria',
    'Other documents',
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white">Document Tracker</h2>
        <p className="text-sm text-gray-400 mt-1">Track all required documents across consortium members</p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-green-400">{allDocs.filter(d => d.status === 'uploaded').length}</p>
          <p className="text-xs text-gray-400">Uploaded</p>
        </div>
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-yellow-400">{allDocs.filter(d => d.status === 'pending').length}</p>
          <p className="text-xs text-gray-400">Pending</p>
        </div>
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-red-400">{allDocs.filter(d => d.status === 'missing').length}</p>
          <p className="text-xs text-gray-400">Missing</p>
        </div>
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-blue-400">{allDocs.filter(d => d.status === 'review').length}</p>
          <p className="text-xs text-gray-400">In Review</p>
        </div>
      </div>

      {/* Document Matrix */}
      <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-700/50">
                <th className="text-left text-xs font-medium text-gray-400 px-4 py-3">Document Type</th>
                {members.map(m => (
                  <th key={m.id} className="text-center text-xs font-medium text-gray-400 px-4 py-3">
                    <div className="truncate max-w-[120px]">{m.name}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {docTypes.map((type, idx) => (
                <tr key={type} className={idx % 2 === 0 ? 'bg-gray-800' : 'bg-gray-800/50'}>
                  <td className="text-sm text-gray-300 px-4 py-3">{type}</td>
                  {members.map(m => {
                    const doc = m.documents.find(d => d.name === type);
                    return (
                      <td key={m.id} className="text-center px-4 py-3">
                        {doc && (
                          <span className={`inline-block w-6 h-6 rounded-full ${
                            doc.status === 'uploaded' ? 'bg-green-500' :
                            doc.status === 'missing' ? 'bg-red-500' :
                            doc.status === 'pending' ? 'bg-yellow-500' :
                            'bg-blue-500'
                          } flex items-center justify-center text-xs`}>
                            {doc.status === 'uploaded' ? '✓' : doc.status === 'missing' ? '✗' : '…'}
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Document List by Member */}
      <div className="space-y-4">
        {members.map(member => (
          <div key={member.id} className="bg-gray-800 rounded-xl border border-gray-700 p-5">
            <h3 className="text-base font-semibold text-white mb-3">{member.name}</h3>
            <div className="space-y-2">
              {member.documents.map(doc => (
                <div key={doc.id} className="flex items-center justify-between bg-gray-700/30 rounded-lg px-4 py-2">
                  <span className="text-sm text-gray-300">{doc.name}</span>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs px-2 py-1 rounded font-medium ${
                      doc.status === 'uploaded' ? 'bg-green-500/20 text-green-300' :
                      doc.status === 'missing' ? 'bg-red-500/20 text-red-300' :
                      doc.status === 'pending' ? 'bg-yellow-500/20 text-yellow-300' :
                      'bg-blue-500/20 text-blue-300'
                    }`}>
                      {doc.status}
                    </span>
                    {doc.status !== 'uploaded' && (
                      <button className="text-xs bg-blue-600 hover:bg-blue-500 text-white px-2 py-1 rounded transition-colors">
                        Upload
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Issues View
function IssuesView() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white">Issues & Alerts</h2>
        <p className="text-sm text-gray-400 mt-1">Track problems and their resolution status</p>
      </div>

      {/* Issue Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-red-400">{issues.filter(i => i.severity === 'critical').length}</p>
          <p className="text-xs text-gray-400">Critical</p>
        </div>
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-yellow-400">{issues.filter(i => i.severity === 'warning').length}</p>
          <p className="text-xs text-gray-400">Warnings</p>
        </div>
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-blue-400">{issues.filter(i => i.severity === 'info').length}</p>
          <p className="text-xs text-gray-400">Info</p>
        </div>
      </div>

      {/* Issue List */}
      <div className="space-y-4">
        {issues.map(issue => (
          <div key={issue.id} className={`rounded-xl border p-5 ${
            issue.severity === 'critical' ? 'bg-red-500/5 border-red-500/30' :
            issue.severity === 'warning' ? 'bg-yellow-500/5 border-yellow-500/30' :
            'bg-blue-500/5 border-blue-500/30'
          }`}>
            <div className="flex items-start gap-3">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${
                issue.severity === 'critical' ? 'bg-red-500/20' :
                issue.severity === 'warning' ? 'bg-yellow-500/20' :
                'bg-blue-500/20'
              }`}>
                {issue.severity === 'critical' ? '🚨' : issue.severity === 'warning' ? '⚠️' : 'ℹ️'}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-base font-semibold text-white">{issue.title}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded font-medium ${
                    issue.severity === 'critical' ? 'bg-red-500/20 text-red-300' :
                    issue.severity === 'warning' ? 'bg-yellow-500/20 text-yellow-300' :
                    'bg-blue-500/20 text-blue-300'
                  }`}>
                    {issue.severity}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mt-2">{issue.description}</p>
                {issue.affected.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {issue.affected.map(a => (
                      <span key={a} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                        {a}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Timeline View
function TimelineView() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white">Timeline & Deadlines</h2>
        <p className="text-sm text-gray-400 mt-1">Track milestones and submission deadlines</p>
      </div>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-700"></div>
        <div className="space-y-6">
          {deadlines.map((deadline, idx) => (
            <div key={deadline.id} className="relative flex items-start gap-4 pl-12">
              <div className={`absolute left-4 w-5 h-5 rounded-full border-2 ${
                deadline.status === 'completed' ? 'bg-green-500 border-green-400' :
                deadline.status === 'overdue' ? 'bg-red-500 border-red-400' :
                deadline.status === 'urgent' ? 'bg-yellow-500 border-yellow-400 animate-pulse' :
                'bg-gray-600 border-gray-500'
              }`}>
                {deadline.status === 'completed' && (
                  <span className="absolute inset-0 flex items-center justify-center text-[10px] text-white">✓</span>
                )}
              </div>
              <div className={`flex-1 rounded-xl border p-4 ${
                deadline.status === 'completed' ? 'bg-green-500/5 border-green-500/20' :
                deadline.status === 'urgent' ? 'bg-yellow-500/5 border-yellow-500/30' :
                'bg-gray-800 border-gray-700'
              }`}>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className={`text-sm font-semibold ${
                    deadline.status === 'completed' ? 'text-green-300' :
                    deadline.status === 'urgent' ? 'text-yellow-200' :
                    'text-white'
                  }`}>
                    {deadline.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded">
                      {deadline.category}
                    </span>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                      deadline.status === 'completed' ? 'bg-green-500/20 text-green-300' :
                      deadline.status === 'urgent' ? 'bg-yellow-500/20 text-yellow-300' :
                      'bg-blue-500/20 text-blue-300'
                    }`}>
                      {deadline.date}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {deadline.status === 'completed' ? 'Completed ✓' :
                   deadline.status === 'urgent' ? 'Due soon — action required' :
                   'Upcoming'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Calendar Summary */}
      <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">📆 Key Dates Summary</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-gray-700/50 rounded-lg p-4">
            <p className="text-xs text-gray-400">Submission Deadline</p>
            <p className="text-xl font-bold text-red-400 mt-1">Nov 12, 2024</p>
            <p className="text-xs text-gray-500 mt-1">3 days remaining</p>
          </div>
          <div className="bg-gray-700/50 rounded-lg p-4">
            <p className="text-xs text-gray-400">Documents Due</p>
            <p className="text-xl font-bold text-yellow-400 mt-1">Nov 11, 2024</p>
            <p className="text-xs text-gray-500 mt-1">4 docs remaining</p>
          </div>
          <div className="bg-gray-700/50 rounded-lg p-4">
            <p className="text-xs text-gray-400">Evaluation Period</p>
            <p className="text-xl font-bold text-blue-400 mt-1">Nov 13 - Dec 15</p>
            <p className="text-xs text-gray-500 mt-1">~30 days</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Recommendations View
function RecommendationsView() {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setCheckedItems(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white">Action Items</h2>
        <p className="text-sm text-gray-400 mt-1">Recommended actions to complete before deadline</p>
      </div>

      {/* Progress */}
      <div className="bg-gray-800 rounded-xl border border-gray-700 p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-300">Actions Completed</span>
          <span className="text-sm font-bold text-blue-400">{checkedItems.length}/{recommendations.length}</span>
        </div>
        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full transition-all"
            style={{ width: `${(checkedItems.length / recommendations.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Action Cards */}
      <div className="space-y-4">
        {recommendations.map(rec => (
          <div
            key={rec.id}
            className={`bg-gray-800 rounded-xl border p-5 transition-all ${
              checkedItems.includes(rec.id)
                ? 'border-green-500/30 bg-green-500/5'
                : 'border-gray-700 hover:border-gray-600'
            }`}
          >
            <div className="flex items-start gap-4">
              <button
                onClick={() => toggleItem(rec.id)}
                className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors mt-0.5 ${
                  checkedItems.includes(rec.id)
                    ? 'bg-green-500 border-green-400'
                    : 'border-gray-500 hover:border-gray-400'
                }`}
              >
                {checkedItems.includes(rec.id) && (
                  <span className="text-white text-xs">✓</span>
                )}
              </button>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className={`text-base font-semibold ${
                    checkedItems.includes(rec.id) ? 'text-green-300 line-through' : 'text-white'
                  }`}>
                    {rec.title}
                  </h3>
                  <span className={`text-xs px-2 py-0.5 rounded font-medium ${
                    rec.priority === 'high' ? 'bg-red-500/20 text-red-300' :
                    'bg-yellow-500/20 text-yellow-300'
                  }`}>
                    {rec.priority} priority
                  </span>
                </div>
                <p className="text-sm text-gray-400 mt-2">{rec.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl border border-blue-700/30 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">⚡ Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-3 rounded-lg text-sm font-medium transition-colors text-left">
            📄 Generate UEx Document Templates
          </button>
          <button className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-3 rounded-lg text-sm font-medium transition-colors text-left">
            📝 Draft Technical Justification
          </button>
          <button className="bg-green-600 hover:bg-green-500 text-white px-4 py-3 rounded-lg text-sm font-medium transition-colors text-left">
            🔍 Verify PIC Numbers
          </button>
          <button className="bg-orange-600 hover:bg-orange-500 text-white px-4 py-3 rounded-lg text-sm font-medium transition-colors text-left">
            💰 Review Budget Allocation
          </button>
        </div>
      </div>
    </div>
  );
}
