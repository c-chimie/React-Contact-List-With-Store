import React from 'react'
import { Link } from 'react-router-dom'
import AddContact from '../component/AddContact'

function createContact() {
  return (
    <div>
        <Link to='/'><button className='btn btn-primary'>back</button></Link>
        <p className="text-right my-3">
			<AddContact />
		</p>
    </div>
  )
}

export default createContact