import React from "react";
import { categories } from "@/constants";
import fetchNews from "@/lib/fetchNews";

async function Homepage() {
  //fetch news data
  const news: NewsResponse = await fetchNews(categories.join(","));
  return <div>Homepage</div>;
}

export default Homepage;
