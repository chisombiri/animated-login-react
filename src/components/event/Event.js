import React from 'react'

const Event = () => {
    const benedict = () => {
        alert('Click bait');
    }

  return (
    <div>
        <h1>Handling Event</h1>
        <button className='btn' onClick={benedict}>Click bait</button>
    </div>
  )
}

export default Event