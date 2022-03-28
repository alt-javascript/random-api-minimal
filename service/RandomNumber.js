export default class RandomNumber {
    static qualifier = '@alt-javascript/random-api-minimal/RandomNumber';

    constructor(options) {
        this.logger = options?.logger || null;
        this.maximum = options?.maximum || options || '${random.number.maximum:1}';
    };

    get (){
        this.logger?.verbose(`Generating random number between 0 and ${this.maximum}`);
        let random = Math.floor(Math.random() * this.maximum);
        this.logger?.verbose(`Result is: ${random}`);
        return random;
    }
}