import path from 'path';
import { Router } from 'express';

const router = Router();

//note sends to html
router.get('/notes', (_req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});
//home
router.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
}); 

export default router;
