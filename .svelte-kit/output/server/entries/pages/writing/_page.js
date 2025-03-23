import { csvParse } from "d3-dsv";
async function load({ fetch }) {
  const response = await fetch("/data/articles.csv");
  if (!response.ok) {
    throw new Error("Failed to load CSV data");
  }
  const text = await response.text();
  const articles = csvParse(text);
  return { articles };
}
export {
  load
};
