import mongoose from 'mongoose';
import playerSchema from '../Models/playerModel';
const Player = mongoose.model('Player', playerSchema);

export const addPlayer = (req, res) => {
  console.log(req.body);
  Player(req.body).save((err, createdPlayer) => {
    if(err){
      res.send('Error player');
    }
    res.json(createdPlayer);
  })
};

export const getAll = (req, res) => {
  Player.find({}, (err, players) => {
    if (err) {
      res.send('an error occured while trying to get players');
    }
    res.send(players);
  });
};

/*export const getbyId = (req, res) => {
  var player = await Player.findById(req.params.id).lean();
  res.json(player);
}*/