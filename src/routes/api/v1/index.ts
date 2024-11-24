import { Router, Request, Response, RequestHandler } from 'express';
import axios from 'axios';
import { Validator } from 'jsonschema';
import { logger } from '../../../logger';

const router = Router();
const validator = new Validator();

const phoneNumberSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      id: { type: 'number' },
      number: { type: 'string' },
      status: { type: 'string' },
      messages: { type: 'number' },
    },
  },
  required: ['id', 'number', 'status', 'messages'],
};

/**
 * @swagger
 * /phone-info:
 *   get:
 *     summary: Get phone number information
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A JSON array of objects containing phone number information
 *       500:
 *         description: Error fetching data from API
 */
router.get('/phone-info', (async (req: Request, res: Response) => {
  try {
    const response = await axios.get('https://mocki.io/v1/635ce436-44ea-4137-b1dc-188e782cce2a'); // TODO to own file, database or config
    const validationResult = validator.validate(response.data, phoneNumberSchema);

    if (validationResult.errors.length > 0) {
      logger.error('Validation errors:', validationResult.errors);
      return res.status(500).json({ error: 'Invalid data from API' });
    }

    res.json(response.data);
  } catch (error) {
    logger.error('Error fetching data from API', error);
    res.status(500).json({ error: 'Error fetching data from API' });
  }
}) as RequestHandler);

export default router;
