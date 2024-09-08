import jwt from "jsonwebtoken"

// JWT authentication middleware
const authenticate = (req, res, next) => {
    const token = req.headers.authorization;
    // console.log(req.headers)
    if (!token) {
        return res.status(401).json({ message: 'Access token required' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach user information to the request object
        next();
    } catch (err) {
        return res.status(403).json({ message: 'Invalid token' });
    }
};

export default authenticate;