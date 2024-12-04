import { Router } from 'express';
import { addSchoolController, getListController } from '../controllers/schoolControllers.js';

const router = Router();

router.post('/addSchool', addSchoolController );
router.get('/getSchoolLists', getListController);

export default router;


