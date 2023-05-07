export class nameRegex {
    private name_regex: RegExp = /^[a-zA-Z\s]{3,20}$/;
    public validate(regex: string): boolean {
        return this.name_regex.test(regex);
    }
}