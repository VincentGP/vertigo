export class Movie {
    public _id: string;
    private customerId: string;
    public director: string;
    public cast: string[];
    public releaseYear: Date;
    public ratings: number[];

    constructor(public title: string, public runtime: number) {
        this.customerId = '24';
    }
}