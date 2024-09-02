export interface QuoteTypes {
  _id: number;
  quote: string;
  anime: string;
  author: string;
}

export interface QuoteZen {
  q: string; // The quote text
  a: string; // The author of the quote
  h: string; // The HTML formatted version of the quote
}

export type QuotesZenType = QuoteZen[]; // An array of quotes
