import { Router } from 'express'
import { verifyToken, requireRole } from '../middleware/auth.middleware.js'
import { getDashboardStats, getAuditLogs } from '../controllers/admin.controller.js'

const router = Router()

router.get('/dashboard', verifyToken, getDashboardStats)
router.get('/audit-logs', verifyToken, requireRole('superadmin'), getAuditLogs)

export default router
