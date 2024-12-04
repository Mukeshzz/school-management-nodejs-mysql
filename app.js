import express from 'express'

const app = express();

app.use(express.json());

import schoolRoute from './routes/schoolRoutes.js' 

app.use("/api/v1", schoolRoute)


export { app }