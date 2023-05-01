export class addressRegex {
    private address_regex: RegExp = /^[a-zA-Z0-9\s,'-]*$/;

    public validate(regex: string): boolean {
        return this.address_regex.test(regex);
    }
}