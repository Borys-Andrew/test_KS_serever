import * as trainService from '../services/train.js';

export const getAll = async(_req, res) => {
  try {
    const result = await trainService.getAll();

    res.send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const add = async(req, res) => {
  const { number, from, to, days, departure, arrival } = req.body;
  const newTrain = {
    number,
    from,
    to,
    days,
    departure,
    arrival,
  };

  try {
    const result = await trainService.add(newTrain);

    res.status(201).send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOne = async(req, res) => {
  const { trainId } = req.params;

  try {
    const result = await trainService.getById(trainId);

    if (!result) {
      return res.sendStatus(404);
    }

    res.send(result);
  } catch (error) {
    res.sendStatus(404);
  }
};

export const remove = async(req, res) => {
  const { trainId } = req.params;

  try {
    const result = await trainService.getById(trainId);

    if (!result) {
      return res.sendStatus(404);
    }

    await trainService.remove(trainId);

    res.sendStatus(204);
  } catch (error) {
    res.sendStatus(400);
  }
};

export const update = async(req, res) => {
  const { trainId } = req.params;
  const { number, from, to, days, departure, arrival } = req.body;

  try {
    const result = await trainService.update(
      { _id: trainId },
      {
        number,
        from,
        to,
        days,
        departure,
        arrival,
      },
      { new: true },
    );

    if (!result) {
      res.sendStatus(404);
    }

    res.send(result);
  } catch (error) {
    res.sendStatus(404);
  }
};
