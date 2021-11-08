class User {
    id: string

    constructor(public fullName: string, public age: number) {
        this.id = '_' + Math.random().toString(36).substr(2, 9)
    }
}

export default User
