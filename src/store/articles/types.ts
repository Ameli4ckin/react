
export interface Article {
    id: string;
    title: string;
}

export interface ArticleState {
    articles: Article[];
    loading: boolean;
    error: string;
}