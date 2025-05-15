import { csvParse } from "d3-dsv";

export async function load({ fetch }) {
  const response = await fetch("/data/dataviz-projects.csv");
  if (!response.ok) {
    throw new Error("Failed to load CSV data");
  }
  const text = await response.text();
  const rawData = csvParse(text);

  const projects = rawData.map((d) => ({
    show: d.show,
    highlighted: d.highlighted,
    year: d.year,
    imageFolder: d.imageFolder,
    mainImageAlt: d.mainImageAlt,
    content: {
      title: d.content_title,
      year: d.year,
      description: d.content_description,
      tags: d.content_tags.split(";").map((tag) => tag.trim()),
      images: d.content_images.split(";").map((img) => img.trim()),
      image_alts: d.content_imagesAlts.split(";").map((img) => img.trim()),
      image_descriptions: d.content_imagesDescriptions
        .split(";")
        .map((img) => img.trim()),
      client: d.content_client, //.split(";").map((img) => img.trim()),
      honors: d.content_honors.split(";").map((img) => img.trim()),
      honors_links: d.content_honors_links.split(";").map((img) => img.trim()),
      featured: d.content_featured.split(";").map((img) => img.trim()),
      featured_links: d.content_featured_links
        .split(";")
        .map((img) => img.trim()),
      content_link: d.content_link,
    },
  }));

  return { projects };
}
