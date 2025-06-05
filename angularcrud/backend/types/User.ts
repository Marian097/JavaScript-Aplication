export interface BasicUser {
    id: number,
}
export interface User extends BasicUser {
    nume: string,
    prenume: string,
    datanastere:Date, //string
    email:string,
    adresa?: string,
    cnp?: string,
    poza?:string,
    telefon: string,
    dataadaugare?:Date,
    actiune?:string,
    
}
export interface UserWithDetails extends BasicUser, User{
    userId: number,
    user: User,

}