import React from 'react'
import { Link } from 'react-router-dom'
import AddContact from '../component/AddContact'

function createContact() {
  return (
    <div>
        <Link to='/'><button className='btn btn-primary'>back</button></Link>
        <div className="text-right my-3">
			<AddContact />
		</div>
    </div>
  )
}

export default createContact