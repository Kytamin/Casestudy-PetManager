export class idRegex {
    private  id_regex = /^[1-9]\d*$/;
    public validate(regex: string): boolean {
        return this.id_regex.test(regex);
    }
}