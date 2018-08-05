// import {PostApiController} from '../controllers';
import Response from '../helpers/Response';
import Express from 'express';

const router = Express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
    res.send('OK')
);

router.get('/', (req, res) => res.json(Response.returnSuccess('Welcome to the Base App')));

export default router;