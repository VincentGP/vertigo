export class Movie {
    public _id: string;
    private customerId: string;
    public director: string;
    public cast: string[];
    public releaseYear: Date;
    public ratings: number[];
    public title: string;
    public runtime: number;
    constructor() {
        this.customerId = '24';
        this.ratings = [];
        this.cast = [];
    }
}