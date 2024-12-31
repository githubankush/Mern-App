const adminMiddleware = async (req, res, next) => {

    try{
        const adminRole = req.user.isAdmin;
        if (!adminRole) {
    return  res.status(403).json({ message: "Access Denied! You are not authorized to access this route" });
        }

        next();

    }catch(err){
        next(err);
        }
  
  
}
module.exports = adminMiddleware;