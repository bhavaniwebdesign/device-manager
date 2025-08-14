import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import deviceRoutes from './routes/deviceRoutes';

const app = express();
const PORT = 3001;
app.use(cors());
app.use(bodyParser.json());
app.use('/api/devices', deviceRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
