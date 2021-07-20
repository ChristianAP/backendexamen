import { Router } from 'express'

const router = Router();

import * as correoCtr from '../controllers/correo.controller'
const { checkToken } = require('../auth/token_validation');

router.get('/:id',checkToken, correoCtr.readAllCorreo);
router.get('/:id',checkToken,  correoCtr.readCorreoID);
router.post('/email',checkToken,  correoCtr.enviarCorreo);

export default router;