import Train from '../models/train.js';

export const getAll = async() => {
  try {
    const result = await Train.find();

    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const add = async(trainData) => {
  try {
    const result = await Train.create(trainData);

    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getById = async(trainId) => {
  try {
    const result = await Train.findById(trainId);

    return result;
  } catch (error) {
    throw new Error('Train not found');
  }
};

export const remove = async(trainId) => {
  try {
    await Train.findByIdAndRemove(trainId);
  } catch (error) {
    throw new Error('Train not found');
  }
};

export const update = async(trainId, trainData) => {
  try {
    const result = await Train.findOneAndUpdate({ _id: trainId }, trainData, {
      new: true,
    });

    return result;
  } catch (error) {
    throw new Error('Train not found');
  }
};
