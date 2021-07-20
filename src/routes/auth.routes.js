import { Router } from 'express'
const router = Router();
import * as authCtrl from '../controllers/auth.controller'
const { checkToken } = require('../auth/token_validation');
router.post('/', authCtrl.login);
router.post('/signin/', authCtrl.signIn)

export default router;