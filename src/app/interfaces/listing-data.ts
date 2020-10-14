import { PostData } from './post-data';

export interface ListingData {
    after: string;
    before: string;
    dist: number;
    children: PostData[];
}
