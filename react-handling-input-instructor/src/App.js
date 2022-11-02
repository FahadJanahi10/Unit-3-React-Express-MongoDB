import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {

  const [state, setState] = useState({
    skills: [
      {skill: "JavaScript", level: 4}
    ],
    skill: '',
    level: 3,
  })

  const addSkill = () => {
    alert('ADD SKILL CLICKED!')
  }

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })

    console.log(e.target.value)
    console.log('handleChange ran!')
  }

  return (
    <section>
      <h2>Dev Skills</h2>
      <hr />
      {state.skills.map(s => (
        <article key={s.skill}>
          <div>{s.skill}</div>
          <div>{s.level}</div>
        </article>
      ))}
    <hr />
    
    <form>
        <label>
          <span>SKILL</span>
          <input value={state.skill} name='skill' onChange={handleChange} />
        </label>
        <label>
          <span>LEVEL</span>
          <select value={state.level} onChange={handleChange} name='level'>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
        </label>

        <button onClick={addSkill}>
          ADD SKILL
        </button>
    </form>
    </section>
  );
}

export default App;