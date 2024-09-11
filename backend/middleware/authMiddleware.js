import jwt from "jsonwebtoken"

// JWT authentication middleware
const authenticate = (req, res, next) => {
    const token = req.headers.authorization;
    // console.log(req.headers)
    if (!token) {
        return res.status(401).json({success:false, message: 'Access token required' });
    }

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = decoded; // Attach user information to the request object
        next();
    } catch (err) {
        return res.status(403).json({success:false, message: 'Invalid token' });
    }
};

export default authenticate;