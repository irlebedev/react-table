import React from 'react'

export default props => {
    
    const smallUrl = `https://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`

    const bigUrl = `https://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`

    return (
        <div style={{display: 'flex', justifyContent: 'center', padding: '50px'}}>
            <button onClick={() => props.onSelect(smallUrl)} className="btn btn-success">32 users</button>
            <button onClick={() => props.onSelect(bigUrl)} className="btn btn-danger">1000 users</button>
        </div>
    )
}

