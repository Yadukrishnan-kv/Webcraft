import axiosClient from './axiosClient'

export async function fetchDashboard() {
  const { data } = await axiosClient.get('/admin/dashboard')
  return data.data
}

export async function fetchAuditLogs(params = {}) {
  const { data } = await axiosClient.get('/admin/audit-logs', { params })
  return data.data
}
