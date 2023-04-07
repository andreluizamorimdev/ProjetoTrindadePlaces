//exercicio 4 da semana 10 middleware jwt
const jwt = require("jsonwebtoken");

function validateAuthToken(request, response, next) {
    const token = request.headers.authorization;

    if (!token || token === 'Bearer') {
        return response.status(403).json({ message: 'Token não encontrado' })
    }

    const tokenJwt = token.slice(7)

    jwt.verify(tokenJwt, process.env.TOKEN_KEY, (err, decoded) => {
        if (err) {
            if (err.name === 'TokenExpiredError') {
                return response.status(401).json({ err: 'Token expirado' });
            } else if (err.name === 'JsonWebTokenError') { 
                return response.status(401).json({ err: 'Token inválido' });
            } else {
                return response.status(500).json({ error: 'Erro interno do servidor' });
            }
        } else {
            request.body.userId = decoded.id;
            return next();
        }
    });

} 

module.exports = validateAuthToken;