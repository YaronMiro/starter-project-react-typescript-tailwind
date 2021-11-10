class User {
    id: string

    constructor(public fullName: string, public age: string) {
        this.id = '_' + Math.random().toString(36).substring(2, 9)
    }
}

export default User
