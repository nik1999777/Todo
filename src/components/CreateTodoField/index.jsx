import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const CreateTodoField = ({ setTodos }) => {
	const [title, setTitle] = useState('')

	const addTodo = title => {
		setTodos(prev => [
			{
				id: uuidv4(),
				title,
				isCompleted: false,
			},
			...prev,
		])
		setTitle('')
	}

	// asdasd
	//

	return (
		<>
			<input
				className='flex items-center justify-between mb-4 rounded-2xl border-gray-800 border-2 px-5 py-3 w-full mt-20'
				type='text'
				onChange={e => setTitle(e.target.value)}
				value={title}
				onKeyPress={e => e.key === 'Enter' && addTodo(title)}
				placeholder='Add a task'
			/>

			<button
				onChange={e => setTitle(e.target.value)}
				onClick={() => addTodo(title)}
				className='bg-gray-800 w-52 h-12 rounded-full  my-0 mx-auto block text-zinc-50'
			>
				Add
			</button>
		</>
	)
}

export default CreateTodoField
