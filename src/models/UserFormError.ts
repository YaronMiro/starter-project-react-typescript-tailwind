class UserFormError {
    id: string

    constructor(public title: string = '', public description: string = '') {
        this.id = '_' + Math.random().toString(36).substr(2, 9)
    }
}

export default UserFormError
