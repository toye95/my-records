import { postRequest } from "../../../core/default.service"

type Login = {email: string, password: string}

export const userLogin = ( {email, password }: Login) => {
    const body: any = {
        query: `
            mutation {
                    loginUser(email: "${email}", password: "${password}"){
                        id,
                        fullname,
                        email,
                        token
                }
            }
        `
    }
    return new Promise((resolve, reject) => {
        postRequest(process.env.REACT_APP_API_URL, body)
        .then(res => res.json())
        .then(response => {
            if (!response.errors){
                console.log('resp', response)
                const  { id, fullname, email, token } = response.data.loginUser
                sessionStorage.setItem('token', token)
                sessionStorage.setItem('id', id)
                resolve({status: 'success', id, fullname, email})
            } else {
                const errorMsg = response.errors[0].message
                reject({status: 'error', message: errorMsg})
            }
        }, (e) => reject(e))
    })
}