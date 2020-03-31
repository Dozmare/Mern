import Person from '../Models/personModel';
import moment from 'moment';
import jwt from 'jwt-simple';

export const signUp = async (req, res) => {
    let person = new Person(req.body);
    var createdPerson = await person.save();

    res.json(createdPerson);
}

export const login = async (req, res) => {
    const person = await Person.findOne({email: req.body.email});

    if(!person){
        return res.send('this user does not exist');
    }

    const password = req.body.password;
    bcrypt.compare(password, person.password, function(error, success){
        if(success){
            const payload = {
                exp: moment().add(1, 'hour').unix(),
                iat: moment().unix(),
                iss: person.id
            }

            let token = jwt.encode(payload, process.env.TOKEN_SECRET);
            res.json({
                firstName: person.firstName,
                lastName: person.lastName,
                token: `Bearer ${token}`,
                expiration: moment().add(1, 'hour').format('YYYY-MM-DD HH:mm')
            })
        }

        res.send('email or password incorrect');
    });
}