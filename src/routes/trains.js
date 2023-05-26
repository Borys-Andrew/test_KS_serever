import express from 'express';
import * as trainController from '../controllers/trains.js';

export const router = express.Router();

router.get('/', trainController.getAll);
router.get('/:trainId', trainController.getOne);
router.post('/', trainController.add);
router.delete('/:trainId', trainController.remove);
router.put('/:trainId', trainController.update);
