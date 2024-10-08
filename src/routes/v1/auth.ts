import { Router } from 'express';

import { login } from 'controllers/auth/login';
import { register } from 'controllers/auth/register';
import { checkJwt } from 'middleware/checkJwt';
import { validatorLogin, validatorRegister, validatorChangePassword } from 'middleware/validation/auth';

import { changePassword } from '../../controllers/auth/changePassword';

const router = Router();

router.post('/login', [validatorLogin], login);
router.post('/register', [validatorRegister], register);
router.post('/change-password', [checkJwt, validatorChangePassword], changePassword);

export default router;
