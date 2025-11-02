import { getCollection, type CollectionEntry } from "astro:content";

/**
 * Obtiene todas las categorías únicas de los artículos.
 */
export async function getCategories(): Promise<string[]> {
    const allArticles = await getCollection("articles");

    const categories = [
    ...new Set(allArticles.map((article) => article.data.category)),
    ];

    return categories;
}

/**
 * Filtra los artículos según la categoría indicada.
 */
export async function filterByCategory(
    category: string
): Promise<CollectionEntry<"articles">[]> {
    const allArticles = await getCollection("articles");

    if (category === "all") {
    return allArticles;
    }

    const filteredArticles = allArticles.filter(
    (article) =>
        article.data.category.toLowerCase() === category.toLowerCase()
    );

    return filteredArticles;
}
