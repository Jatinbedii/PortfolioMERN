import express from 'express';
import ContactSubmit from '../Controller/ContactSubmit.mjs';
const router = express.Router()

router.post('/',ContactSubmit)

export default router;