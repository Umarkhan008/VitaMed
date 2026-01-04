// Admin authentication utilities
import CryptoJS from 'crypto-js'

// Configuration
const CONFIG = {
    MAX_LOGIN_ATTEMPTS: 5,
    LOCKOUT_DURATION: 15 * 60 * 1000, // 15 minutes
    SESSION_DURATION: 2 * 60 * 60 * 1000, // 2 hours
    SECRET_KEY: 'VitaMed_Admin_2024_Secret_Key',
    ADMIN_CREDENTIALS: {
        username: 'admin',
        // In production, this should be hashed and stored securely
        passwordHash: CryptoJS.SHA256('VitaMed@2024!').toString()
    }
}

// Get login attempts data
const getLoginAttempts = () => {
    const data = localStorage.getItem('adminLoginAttempts')
    if (!data) return { count: 0, lastAttempt: null, lockedUntil: null }
    return JSON.parse(data)
}

// Save login attempts data
const saveLoginAttempts = (data) => {
    localStorage.setItem('adminLoginAttempts', JSON.stringify(data))
}

// Check if account is locked
export const isAccountLocked = () => {
    const attempts = getLoginAttempts()
    if (!attempts.lockedUntil) return false
    
    const now = Date.now()
    if (now > attempts.lockedUntil) {
        // Lock expired, reset attempts
        saveLoginAttempts({ count: 0, lastAttempt: null, lockedUntil: null })
        return false
    }
    
    return true
}

// Get remaining lockout time in minutes
export const getRemainingLockoutTime = () => {
    const attempts = getLoginAttempts()
    if (!attempts.lockedUntil) return 0
    
    const remaining = attempts.lockedUntil - Date.now()
    return Math.ceil(remaining / (60 * 1000)) // Convert to minutes
}

// Record failed login attempt
const recordFailedAttempt = () => { 
    const attempts = getLoginAttempts()
    const now = Date.now()
    
    attempts.count += 1
    attempts.lastAttempt = now
    
    if (attempts.count >= CONFIG.MAX_LOGIN_ATTEMPTS) {
        attempts.lockedUntil = now + CONFIG.LOCKOUT_DURATION
    }
    
    saveLoginAttempts(attempts)
}

// Reset login attempts on successful login
const resetLoginAttempts = () => {
    localStorage.removeItem('adminLoginAttempts')
}

// Hash password
const hashPassword = (password) => {
    return CryptoJS.SHA256(password).toString()
}

// Validate credentials
export const validateCredentials = (username, password) => {
    if (!username || !password) {
        return { success: false, error: 'Username va parol kiritish majburiy' }
    }
    
    if (username.length < 3) {
        return { success: false, error: 'Username kamida 3 ta belgi bo\'lishi kerak' }
    }
    
    if (password.length < 8) {
        return { success: false, error: 'Parol kamida 8 ta belgi bo\'lishi kerak' }
    }
    
    return { success: true }
}

// Authenticate user
export const authenticateUser = async (username, password) => {
    // Check if account is locked
    if (isAccountLocked()) {
        const remainingTime = getRemainingLockoutTime()
        return { 
            success: false, 
            error: `Hisob ${remainingTime} daqiqa davomida bloklangan. Keyinroq urinib ko'ring.`,
            locked: true
        }
    }
    
    // Validate input
    const validation = validateCredentials(username, password)
    if (!validation.success) {
        return validation
    }
    
    // Simulate network delay for security
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Check credentials
    const passwordHash = hashPassword(password)
    const isValidUsername = username.toLowerCase() === CONFIG.ADMIN_CREDENTIALS.username
    const isValidPassword = passwordHash === CONFIG.ADMIN_CREDENTIALS.passwordHash
    
    if (isValidUsername && isValidPassword) {
        // Successful login
        resetLoginAttempts()
        
        // Create session token
        const sessionData = {
            username: username,
            loginTime: Date.now(),
            expiresAt: Date.now() + CONFIG.SESSION_DURATION
        }
        
        const token = CryptoJS.AES.encrypt(
            JSON.stringify(sessionData), 
            CONFIG.SECRET_KEY
        ).toString()
        
        localStorage.setItem('adminAuth', token)
        localStorage.setItem('adminSession', JSON.stringify({
            username: username,
            loginTime: sessionData.loginTime,
            expiresAt: sessionData.expiresAt
        }))
        
        return { success: true, user: { username } }
    } else {
        // Failed login
        recordFailedAttempt()
        const attempts = getLoginAttempts()
        const remainingAttempts = CONFIG.MAX_LOGIN_ATTEMPTS - attempts.count
        
        if (remainingAttempts > 0) {
            return { 
                success: false, 
                error: `Noto'g'ri username yoki parol. ${remainingAttempts} ta urinish qoldi.`
            }
        } else {
            return { 
                success: false, 
                error: `Hisob ${CONFIG.LOCKOUT_DURATION / (60 * 1000)} daqiqa davomida bloklandi.`,
                locked: true
            }
        }
    }
}

// Check if user is authenticated
export const isAuthenticated = () => {
    const token = localStorage.getItem('adminAuth')
    const session = localStorage.getItem('adminSession')
    
    if (!token || !session) return false
    
    try {
        const sessionData = JSON.parse(session)
        const now = Date.now()
        
        // Check if session expired
        if (now > sessionData.expiresAt) {
            logout()
            return false
        }
        
        // Verify token
        const decrypted = CryptoJS.AES.decrypt(token, CONFIG.SECRET_KEY)
        const tokenData = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8))
        
        return tokenData.username === sessionData.username
    } catch (error) {
        logout()
        return false
    }
}

// Get current user info
export const getCurrentUser = () => {
    const session = localStorage.getItem('adminSession')
    if (!session) return null
    
    try {
        return JSON.parse(session)
    } catch (error) {
        return null
    }
}

// Logout user
export const logout = () => {
    localStorage.removeItem('adminAuth')
    localStorage.removeItem('adminSession')
}

// Extend session
export const extendSession = () => {
    const session = getCurrentUser()
    if (!session) return false
    
    const newExpiresAt = Date.now() + CONFIG.SESSION_DURATION
    const updatedSession = {
        ...session,
        expiresAt: newExpiresAt
    }
    
    localStorage.setItem('adminSession', JSON.stringify(updatedSession))
    
    // Update token as well
    const sessionData = {
        username: session.username,
        loginTime: session.loginTime,
        expiresAt: newExpiresAt
    }
    
    const token = CryptoJS.AES.encrypt(
        JSON.stringify(sessionData), 
        CONFIG.SECRET_KEY
    ).toString()
    
    localStorage.setItem('adminAuth', token)
    return true
}

// Get session time remaining in minutes
export const getSessionTimeRemaining = () => {
    const session = getCurrentUser()
    if (!session) return 0
    
    const remaining = session.expiresAt - Date.now()
    return Math.max(0, Math.ceil(remaining / (60 * 1000)))
}
