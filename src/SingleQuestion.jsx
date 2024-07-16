import { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
function SingleQuestion({ id, title, info, toggleQuestion, activeId }) {
  const isActiveId = id === activeId

  return (
    <article className="question">
      <header>
        <h3>{title}</h3>
        <button className="question-btn" onClick={() => toggleQuestion(id)}>
          {isActiveId ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActiveId && <p>{info}</p>}
    </article>
  )
}

export default SingleQuestion
