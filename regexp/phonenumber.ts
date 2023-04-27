

export class phoneRegex {
    private  phone_regex = /^(0|\+84)(3[2-9]|5[2689]|7[06-9]|8[1-689]|9[0-46-9])[0-9]{7}$/;

    public validate(regex: string): boolean {
        return this.phone_regex.test(regex);
    }
}

