import express from 'express';
import ContactController from '../controller/user_controller';

const router = express.Router();
const routerContact = new ContactController();

router.get('/home', routerContact.get);
router.post('/home/users', routerContact.post);
router.put('/home/users/:id', routerContact.put);
router.delete('/home/users/:id', routerContact.delete);

export default router;