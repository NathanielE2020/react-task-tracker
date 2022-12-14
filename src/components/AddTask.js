import {useState} from 'react'


const AddTask = (onAdd) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState('false')

  const onSubmit = (e) => {
      e.preventdefault()

      if(!text){
          alert('Please add a task')
          return
      }

      onAdd({text, day, reminder})

      setText('')
      setDay('')
      setReminder(false)
  }
    return (
        <form className='add-form'>
          <div className='form-control'>
         <label>Task</label>
         <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)} />
        </div> 

        <div className='form-control' onSubmit={onSubmit}>
         <label>Day & Time</label>
         <input type='text' placeholder='Add day & Time'  value={day} onChange={(e) => setDay(e.target.value)}/>
        </div>

        <div className='form-control form-control-check'>
         <label>set reminder</label>
         <input 
         type='checkbox'
         checked={reminder}
         value={reminder} 
         onChange={(e) => setReminder(e.currentTarget.checked)} />
        </div> 

        <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
    )
}

export default AddTask
