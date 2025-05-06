import { csvParse } from "d3-dsv";
async function load({ fetch }) {
  const response = await fetch("/data/dataviz-projects.csv");
  if (!response.ok) {
    throw new Error("Failed to load CSV data");
  }
  const text = await response.text();
  const rawData = csvParse(text);
  const projects = rawData.map((d) => ({
    highlighted: d.highlighted,
    year: d.year,
    imageFolder: d.imageFolder,
    mainImageAlt: d.mainImageAlt,
    content: {
      title: d.content_title,
      description: d.content_description,
      tags: d.content_tags.split(";").map((tag) => tag.trim()),
      images: d.content_images.split(";").map((img) => img.trim()),
      image_alts: d.content_imagesAlts.split(";").map((img) => img.trim()),
      image_descriptions: d.content_imagesDescriptions.split(";").map((img) => img.trim()),
      honors: d.content_honors.split(";").map((img) => img.trim()),
      featured: d.content_featured.split(";").map((img) => img.trim())
    }
  }));
  return { projects };
}
export {
  load
};
