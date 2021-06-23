import React, { useState } from 'react'

export const  SearchBar = (props) => {
  const [term, setTerm] = useState('')
  const [searchItem, setSearchItem] = useState('')
    
  const onChangeInput = (e) => {
      setTerm(e.target.value)
    }
  const onsubmitInput =(e) =>{
     e.preventDefault();
     setSearchItem(term)
     setTerm('')

     props.onSubmit(term)
   }
        return (
            <div className="ui segment">
              <form onSubmit={onsubmitInput} className='ui form'>
               <div className="field">
                <label > Video Search</label>
               <input type='text' value={term} onChange={onChangeInput}/>
               </div>
              </form>
              <h1>{searchItem}</h1>
            </div>
        )

}