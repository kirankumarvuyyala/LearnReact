import React from 'react'
import MyModel from './MyModel'
import Welcome from './Welcome'

export default function Edit() {
  return (
   <>
     <Welcome>
        <div>This is div-1 From Parent</div>
        <div>This is div-2 From Parent</div>
      </Welcome>
   <MyModel heading="Registration Form">
        <form id="modalBody">
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input type="password" className="form-control" id="pwd" />
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" /> Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-default">
            Submit
          </button>
        </form>
      </MyModel>
   </>
  )
}
