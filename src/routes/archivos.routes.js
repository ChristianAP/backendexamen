import { Router } from 'express'

const router = Router();

import * as archivoCtr from '../controllers/archivos.controller'
const { checkToken } = require('../auth/token_validation');

router.post('/',checkToken, archivoCtr.createArchivo)
router.get('/:id' ,checkToken, archivoCtr.readAllArchivo);
router.get('/ar/:id' ,checkToken,  archivoCtr.readArchivo);
router.delete('/:id' ,checkToken,  archivoCtr.deleteArchivo);
router.put('/archivo',checkToken, archivoCtr.updateArchivo)

export default router;