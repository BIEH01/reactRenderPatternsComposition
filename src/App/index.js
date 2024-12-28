import React from "react";
import { useTodos } from "./useTodos";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoForm } from "../TodoForm";
import { Modal } from "../Modal";
import { TodoHeader } from "../TodoHeader";
import { ChangeAlert } from "../ChangeAlert";

function App() {
	const {
		loading,
		error,
		searchedTodos,
		completeTodo,
		deleteTodo,
		openModal,
		setOpenModal,
		completedTodos,
		totalTodos,
		searchValue,
		setSearchValue,
		addTodo,
		synchronizeTodos,
	} = useTodos();

	return (
		<>
			<TodoHeader loading={loading}>
				<TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
				<TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
			</TodoHeader>

			<TodoList
				error={error}
				loading={loading}
				searchedTodos={searchedTodos}
				totalTodos={totalTodos}
				searchText={searchValue}
				onError={() => <TodosError />}
				onLoading={() => <TodosLoading />}
				onEmptyTodos={() => <EmptyTodos />}
				onEmptyTodosSearchResult={(searchText) => (
					<p>No hay resultados para la búsqueda de {searchText}</p>
				)}
				render={(todo) => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => completeTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
				)} //> This is a render prop
			>
				{/* {(todo) => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => completeTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
				)} > This is a render function */}
			</TodoList>

			{/* <TodoList>
				{loading && (
					<>
						<TodosLoading />
						<TodosLoading />
						<TodosLoading />
					</>
				)}
				{error && <TodosError />}
				{!loading && searchedTodos.length === 0 && <EmptyTodos />}

				{searchedTodos.map((todo) => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => completeTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
				))}
			</TodoList> */}

			<CreateTodoButton setOpenModal={setOpenModal} />
			<ChangeAlert synchronize={synchronizeTodos} />

			{openModal && (
				<Modal>
					<TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
				</Modal>
			)}
		</>
	);
}

export default App;
