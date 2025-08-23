export function requireAuth(req, res, next) {
    const auth = req.session?.auth;
    if (!auth?.user) return res.status(401).json({ error: 'unauthenticated' });
    next();
  }; 