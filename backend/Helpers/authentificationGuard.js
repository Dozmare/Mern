import moment from 'moment';
import jwt from 'jwt-simple';
import Person from '../Models/personModel';

export const ensureIsAuthenticated = (req, res, next) => {

    if(!req.headers.authorization){
        return res.status(401).send('Token is missing');
    }

    const token = req.headers.authorization.split(' ')[1];

    var payload = null;
    try {
        payload = jwt.decode(token, process.env.TOKEN_SECRET)
    } catch (error) {
        return res.status(401).send('invalid token');
    }

    if(payload.exp <= moment().unix()){
        return res.status(401).send('Token expiré');
    }

    const personId = payload.iss;
    Person.findById(personId, (err, person) => {
        if(err){
            return res.status(401).send('Person not found');
        }

        req.userId = payload.iss;
        next();
    })

}