import React, { useState } from 'react'
import Layout from '../../Layout'
import ContentItem from '../../content/data.json'
import TodoItem from '../../components/TodoItem'
import CreateTodoField from '../../components/CreateTodoField'

const Home = props => {
  const [todos, setTodos] = useState(ContentItem.items)

  const changeTodo = id => {
    const copy = [...todos]
    console.log(copy)
    const current = copy.find(todo => todo.id === id)
    console.log(current)
    current.isCompleted = !current.isCompleted
    setTodos(copy)
  }

  const removeTodo = id => {
    setTodos([...todos].filter(todo => todo.id !== id))
  }

  return (
    <>
      <Layout className='text-white w-4/5 mx-auto'>
        <h1 className='text-2xl font-bold text-center mb-4'>Todo</h1>
        {todos.map(todo => (
          <TodoItem
            changeTodo={changeTodo}
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
          />
        ))}
        <CreateTodoField setTodos={setTodos} />
      </Layout>
    </>
  )
}

export default Home
