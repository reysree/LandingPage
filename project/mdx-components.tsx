import type { MDXComponents } from "mdx/types";
import { mdxComponents as customComponents } from "@/lib/content/mdx-components";

// This file is required to use @next/mdx in the `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    ...customComponents,
    ...components,
  };
}
