import { postRequest } from "../../../core/default.service"

type PasswordReset  = {email: string, password: string}

export const resetPassword = ( {email, password }: PasswordReset) => {
    const body: any = {
        query: `
            mutation {
                    resetPassword(email: "${email}", password: "${password}"){
                        id,
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