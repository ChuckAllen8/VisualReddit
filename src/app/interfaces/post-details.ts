export interface PostDetails {
    title: string;
    thumbnail: string;
    over_18: boolean;
    permalink: string;
    ups: number;
    author: string;
    url: string;
    is_video: boolean;
    post_hint?: string;
    media?: {
        oembed?: {
            thumbnail_url?: string;
        }
    };
}
