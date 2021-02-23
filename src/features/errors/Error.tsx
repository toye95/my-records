import React from 'react';
function Error(props: any) {

  return (
    <div style={styles.error}>
        {props.message}
    </div>
  );
}

const styles = {
  error: {
    background: 'pink', 
    color: 'red', 
    borderRadius: 8, 
    width: '90%', 
    padding: 15, 
    fontSize: 14
  }
}

export default Error;
