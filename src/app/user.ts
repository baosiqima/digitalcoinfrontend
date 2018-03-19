export class User {
    constructor(
        public email: string,
        public username: string,
        public password: string,
        public confirmPassword: string,
        public country: string,
        public phone: string
    ){

    }
}
