import { Photo } from "./photo";

export class City {
    Id!: number;
    Name!: string;
    Description!: string;
    userId!: number;
    photos!: Photo[];
}
