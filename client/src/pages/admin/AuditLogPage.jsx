import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useAuditLogs } from '../../hooks/useAuditLogs'

const MODULES = [
  'projects',
  'services',
  'process steps',
  'why-us reasons',
  'testimonials',
  'faqs',
  'nav links',
  'brands',
  'hero',
  'founder',
  'site settings',
  'admins',
  'auth',
]

const ACTIONS = ['create', 'update', 'delete', 'toggle', 'reorder', 'login']

const ACTION_COLORS = {
  create: 'text-primary bg-primary/10',
  update: 'text-amber-400 bg-amber-400/10',
  delete: 'text-red-400 bg-red-400/10',
  toggle: 'text-sky-400 bg-sky-400/10',
  reorder: 'text-muted-foreground bg-border/40',
  login: 'text-emerald-400 bg-emerald-400/10',
}

export default function AuditLogPage() {
  const [moduleFilter, setModuleFilter] = useState('')
  const [actionFilter, setActionFilter] = useState('')
  const [page, setPage] = useState(1)

  const { data, isLoading, isError } = useAuditLogs({
    module: moduleFilter || undefined,
    action: actionFilter || undefined,
    page,
    limit: 20,
  })

  const items = data?.items ?? []

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-3xl font-black tracking-tight">Audit Log</h1>
        <p className="mt-1 text-sm text-muted-foreground">Every content and account change, who made it, and when.</p>
      </div>

      <div className="flex flex-wrap items-center gap-3 mb-6">
        <select
          value={moduleFilter}
          onChange={(e) => {
            setModuleFilter(e.target.value)
            setPage(1)
          }}
          className="bg-surface border border-border rounded-full py-2 px-4 text-sm focus:outline-none focus:border-primary"
        >
          <option value="">All modules</option>
          {MODULES.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>

        <select
          value={actionFilter}
          onChange={(e) => {
            setActionFilter(e.target.value)
            setPage(1)
          }}
          className="bg-surface border border-border rounded-full py-2 px-4 text-sm focus:outline-none focus:border-primary"
        >
          <option value="">All actions</option>
          {ACTIONS.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </div>

      <div className="border border-border rounded-[24px] overflow-hidden bg-surface">
        {isLoading ? (
          <div className="p-10 text-center text-sm text-muted-foreground">Loading…</div>
        ) : isError ? (
          <div className="p-10 text-center text-sm text-red-400">Couldn't load the audit log.</div>
        ) : items.length === 0 ? (
          <div className="p-10 text-center text-sm text-muted-foreground">No matching entries.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[720px]">
              <thead>
                <tr className="border-b border-border text-left text-xs uppercase tracking-wide text-muted-foreground">
                  <th className="px-5 py-3 font-semibold">Time</th>
                  <th className="px-5 py-3 font-semibold">Admin</th>
                  <th className="px-5 py-3 font-semibold">Action</th>
                  <th className="px-5 py-3 font-semibold">Module</th>
                  <th className="px-5 py-3 font-semibold">Details</th>
                </tr>
              </thead>
              <tbody>
                {items.map((entry) => (
                  <tr key={entry._id} className="border-b border-border last:border-b-0">
                    <td className="px-5 py-4 text-muted-foreground whitespace-nowrap">
                      {new Date(entry.createdAt).toLocaleString()}
                    </td>
                    <td className="px-5 py-4 font-medium whitespace-nowrap">{entry.adminName}</td>
                    <td className="px-5 py-4">
                      <span
                        className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold capitalize ${ACTION_COLORS[entry.action] || ''}`}
                      >
                        {entry.action}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-muted-foreground whitespace-nowrap">{entry.module}</td>
                    <td className="px-5 py-4 text-muted-foreground">{entry.summary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {data && data.pages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            disabled={page <= 1}
            onClick={() => setPage((p) => p - 1)}
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center disabled:opacity-30 hover:border-foreground transition-colors"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-sm text-muted-foreground">
            Page {data.page} of {data.pages}
          </span>
          <button
            disabled={page >= data.pages}
            onClick={() => setPage((p) => p + 1)}
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center disabled:opacity-30 hover:border-foreground transition-colors"
            aria-label="Next page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  )
}
