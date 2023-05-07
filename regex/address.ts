export class addressRegex {
    private address_regex: RegExp = /^(?=.*[a-zA-Z])([a-zA-Z0-9\s\-]{3,})$/;

    public validate(regex: string): boolean {
        return this.address_regex.test(regex);
    }
}