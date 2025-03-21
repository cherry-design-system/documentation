"use client";
import { DocSearch } from "@docsearch/react";
import "@docsearch/css";

function Search() {
  return (
    <DocSearch
      appId="KETBUPPLSS"
      indexName="cherry_al_pages"
      apiKey="5a2ae8ea958d467590ee7ff7d736ab18"
    />
  );
}

export { Search };
