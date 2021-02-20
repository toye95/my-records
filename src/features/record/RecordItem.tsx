import React from 'react';
import styles from './RecordItem.module.css'

type RecordType = {
    id?: string,
    title: string,
    createdAt: string,
    handleEdit: any,
    handleDelete: any
}

function RecordItem({id, title, createdAt, handleEdit, handleDelete}: RecordType) {

  return (
      <div className={styles.container}>
          <div className={styles.grid}>
            <div>
                <div>
                    <div className={styles.title}>{title}</div>
                </div>
                <div>
                    <div className={styles.info}>Created by 
                    <span className={styles.bold}> Adetoyese Kola-Balogun </span> 
                     at <span className={styles.bold}>{createdAt}</span></div>
                </div>
            </div>
            <div>
                <button className={styles.button + ' ' + styles.edit} onClick={() => handleEdit(id, title)}>Edit</button>
                <button className={styles.button + ' ' + styles.delete} onClick={() => handleDelete(id)}>Delete</button>
            </div>
          </div>
      </div>
  );
}

export default RecordItem;
