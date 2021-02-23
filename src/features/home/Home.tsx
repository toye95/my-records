import React, { useEffect } from 'react';
import Card from '../cards/Card';
import RecordItem from '../record/RecordItem';
import styles from './Home.module.css'
import { createRecord, getRecords, editRecord, deleteRecord } from './home.service';
import { useSelector, useDispatch } from 'react-redux';
import { setRecords, failure } from './homeSlice';
import Error from '../errors/Error';
import { sessionActive } from '../../core/session';
import { useHistory } from 'react-router-dom';


type Record = {id: string, title:string, createdAt: string}

function Home() {
const dispatch = useDispatch()
const history = useHistory()
const { isLoading, error, data } = useSelector(((state: any) => state.home))
const id: string | any = sessionStorage.getItem('id')
const [formData, setFormData] = React.useState({
    title: ''
})
const [isEdit, setEdit] = React.useState(false)
const [recordId, setRecordId] = React.useState(null)

const onChange = (e: any) => {
    setFormData({...formData, [e.target.name]: e.target.value})
}

const getAllRecords = async () => {
    const response: any = await getRecords(+id)
    if (response.status === "success"){
        dispatch(setRecords(response.data))
    } else {
        dispatch(failure(response.message))
    }
}

const onSubmit = async (e: any) => {
    e.preventDefault()
    const { title } = formData
    const userId = +id
    if (title){
        try {
            const response: any = isEdit ? 
                    await editRecord( recordId, formData.title) : 
                        await createRecord({userId, title})
            if (response.status === "success"){
                setEdit(false)
                setFormData({...formData, title: ''})
                getAllRecords()
            } 
        } catch (e) {
            dispatch(failure(e.message))
        }
    }
}

const editTitle = (id: any, title: string) => {
    setFormData({...formData, title})
    setEdit(true)
    setRecordId(id)
}

const logout = () => {
    sessionStorage.clear()
    history.push('/')
}

const deleteItem = async (id: string) => {
    try {
        const response: any = await deleteRecord(id)
        if (response.status === "success"){
            getAllRecords()
        }
    } catch (e) {
        dispatch(failure(e.message))
    }
}

useEffect(() => {
    if (!sessionActive()) history.push('/')
    getAllRecords()
}, [])

  return (
    <div className={styles.container}>
        <Card>
            <h2>My Records</h2><a onClick={logout} className={styles.link}>Logout</a>
            {error && <Error message={'Error: ' + error}/>}
            <form onSubmit={onSubmit}>
                <div className={styles.grid}>
                    <div>
                        <input 
                            autoFocus
                            type="text" 
                            name="title" 
                            className={styles.input}
                            value={formData.title} 
                            placeholder="Write something..." 
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className={styles.button}>
                            {!isLoading ? 'Save' : 'Saving...'}
                        </button>
                    </div>
                </div>
            </form>
            
            <div style={{marginTop: 20}}>
                {data && data?.records?.length ? data?.records.map((item: Record) => (
                    <RecordItem 
                        id={item.id}
                        title={item.title} 
                        createdAt={item.createdAt} 
                        createdBy={data.fullname}
                        handleEdit={editTitle}
                        handleDelete={deleteItem}
                        key={item.id.toString()}/>
                )): 
                <div className={styles.text}>
                    No records
                </div>
                }
            </div>
        </Card>
    </div>
  );
}

export default Home;
