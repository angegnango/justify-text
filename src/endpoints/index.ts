import {Router} from 'express';
import authenticate from '../middlewares/auth';
import controller from '../controllers/apiController';


const router = Router();

router.post('/api/token', controller.token);
router.post('/api/justify', authenticate, controller.justify);


export default router;