import express from 'express';
import UserController from '../controller/usercontroller';

const router = express.Router();
const routerContact = new UserController();

router.get('/home', routerContact.get);
router.post('/home/users', routerContact.post);
router.put('/home/users/:id', routerContact.put);
router.delete('/home/users/:id', routerContact.delete);

export default router;