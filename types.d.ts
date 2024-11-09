import '@nuxtjs/algolia'

declare module '@nuxtjs/algolia' {
    interface AlgoliaIndices {
        pagesContent: {
            title: string;
            content: string;
            path: string;
            site: string;
            type: string;
        }
    }
}
