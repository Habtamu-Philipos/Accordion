import { useState } from 'react'
import data from './data'
import SingleQuestion from './SingleQuestion'
const App = () => {
  const [questions, setQuestions] = useState(data)
  const [activeId, setActiveId] = useState(null)

  function toggleQuestion(id) {
    const newActiveId = id === activeId ? null : id
    setActiveId(newActiveId)
  }
  return (
    <main>
      <section className="container">
        <h1>Questions</h1>
        {questions.map((question) => (
          <SingleQuestion
            key={question.id}
            {...question}
            toggleQuestion={toggleQuestion}
            activeId={activeId}
          />
        ))}
      </section>
    </main>
  )
}
export default App
