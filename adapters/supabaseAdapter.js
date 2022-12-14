import * as dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: 'variables.env' });

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

/**
 * Function to get the data from one card
 * 
 * @param {*} id the id of a card
 * @returns card data
 */
export async function getCardData(id) {
  console.log('Look for id:', id);
  const { data, error } = await supabase.from('cards').select('*').eq('id', id);
  if (error) console.log('query error', error);
  else return data;
}

/**
 * function to read all the cards
 * @returns an array of cards
 */
 export async function getCardsData() {
    const { data, error } = await supabase.from('cards').select('*');
    if (error) console.log('query error', error);
    else return data;
}

/**
 * Function to get the data of one deck
 * 
 * @param {*} id the id of a deck
 * @returns deck data
 */
 export async function getDeckData(id) {
  console.log('Look for id:', id);
  const { data, error } = await supabase.from('decks').select('*').eq('id', id);
  if (error) console.log('query error', error);
  else return data;
}

/**
 * function to read all the decks
 * @returns an array of decks
 */
 export async function getDecksData() {
    const { data, error } = await supabase.from('decks').select('*');
    if (error) console.log('query error', error);
    else return data;
}