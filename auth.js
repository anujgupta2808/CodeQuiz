// Authentication Module
const Auth = {
    // Register new user
    register(name, email, password, confirmPassword) {
        if (!name || !email || !password) {
            return { success: false, message: 'All fields are required!' };
        }

        if (password !== confirmPassword) {
            return { success: false, message: 'Passwords do not match!' };
        }

        if (password.length < 6) {
            return { success: false, message: 'Password must be at least 6 characters!' };
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return { success: false, message: 'Invalid email format!' };
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        if (users.find(u => u.email === email)) {
            return { success: false, message: 'Email already registered!' };
        }

        const newUser = {
            id: Date.now(),
            name,
            email,
            password: btoa(password),
            createdAt: new Date().toISOString()
        };

        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        return { success: true, message: 'Registration successful!' };
    },

    // Login user
    login(email, password) {
        if (!email || !password) {
            return { success: false, message: 'Email and password are required!' };
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === email);

        if (!user) {
            return { success: false, message: 'User not found!' };
        }

        if (atob(user.password) !== password) {
            return { success: false, message: 'Incorrect password!' };
        }

        const userData = {
            id: user.id,
            name: user.name,
            email: user.email
        };

        localStorage.setItem('userData', JSON.stringify(userData));
        localStorage.setItem('isLoggedIn', 'true');

        return { success: true, message: 'Login successful!', user: userData };
    },

    // Logout user
    logout() {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userData');
        return { success: true, message: 'Logged out successfully!' };
    },

    // Check if user is logged in
    isAuthenticated() {
        return localStorage.getItem('isLoggedIn') === 'true';
    },

    // Get current user
    getCurrentUser() {
        if (!this.isAuthenticated()) {
            return null;
        }
        return JSON.parse(localStorage.getItem('userData'));
    },

    // Require authentication (redirect if not logged in)
    requireAuth(redirectUrl = 'login.html') {
        if (!this.isAuthenticated()) {
            window.location.href = redirectUrl;
            return false;
        }
        return true;
    }
};
