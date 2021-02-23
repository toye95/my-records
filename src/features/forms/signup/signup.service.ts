import { postRequest } from "../../../core/default.service"

type Signup = {fullname: string, email: string, password: string}

export const userSignup = ( {fullname, email, password }: Signup) => {
    const body: any = {
        query: `
            mutation {
                    createUser(fullname: "${fullname}", email: "${email}", password: "${password}"){
                        id,
                        fullname,
                        email
                }
            }
        `
    }
    return new Promise((resolve, reject) => {
        postRequest(process.env.REACT_APP_API_URL, body)
        .then(res => res.json())
        .then(response => {
            if (!response.errors){
                resolve({status: 'success'})
            } else {
                const errorMsg = response.errors[0].message
                reject({status: 'error', message: errorMsg})
            }
        }, (e) => reject(e))
    })
}