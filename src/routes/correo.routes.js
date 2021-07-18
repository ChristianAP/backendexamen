import { Router } from 'express'

const router = Router();

import * as correoCtr from '../controllers/correo.controller'

router.get('/:id', correoCtr.readAllCorreo);
router.get('/:id',  correoCtr.readCorreoID);
router.post('/email',  correoCtr.enviarCorreo);

export default router;