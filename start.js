import express, { application } from 'express';
import indexRouter from './routes/index.js'
import cardsRouter from './routes/cards.js'
import decksRouter from './routes/decks.js'

console.log('testmsg', process.env.SUPABASE_URL)

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: ture}));

app.use('/', indexRouter);
app.use('/cards', cardsRouter);
app.use('/decks', decksRouter);


app.listen(3010, () => {
    console.log('Simple service started on port 3010');
  });