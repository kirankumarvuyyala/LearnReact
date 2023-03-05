import React from 'react'

function Loader() {
  return (
    <><button className="btn btn-primary" type="button" disabled>
			<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
			<span className="visually-hidden">Loading...</span>
		</button><button className="btn btn-primary" type="button" disabled>
				<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
				Loading...
			</button></>
  )
}

export default Loader