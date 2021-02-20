import { postRequest } from "../../core/default.service"

type RecordItem = {userId: number, title: string}

export const createRecord = ( {userId, title }: RecordItem) => {
    const body: any = {
        query: `
            mutation {
                    createRecord(userId: ${userId}, title: "${title}"){
                        id,
                        title,
                        createdAt
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

export const getRecords = ( userId : number) => {
    const body: any = {
        query: `
             {
                    getRecords(id: ${userId}){
                        id,
                        fullname,
                        records {
                            id,
                            title,
                            createdAt
                        }
                }
            }
        `
    }
    return new Promise((resolve, reject) => {
        postRequest(process.env.REACT_APP_API_URL, body)
        .then(res => res.json())
        .then(response => {
            if (!response.errors){
                resolve({status: 'success', data: response.data.getRecords})
            } else {
                const errorMsg = response.errors[0].message
                reject({status: 'error', message: errorMsg})
            }
        }, (e) => reject(e))
    })
}

export const editRecord = ( recordId: any, title: string) => {
    const body: any = {
        query: `
            mutation {
                    editRecord(recordId: ${recordId}, title: "${title}"){
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

export const deleteRecord = ( recordId: any ) => {
    const body: any = {
        query: `
            mutation {
                    deleteRecord(recordId: ${+recordId}){
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