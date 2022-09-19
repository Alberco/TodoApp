import { TodoList } from "./components/TodoList"

export const App = () => {
    return (
        <>
        <div className="container mt-5">
            <h1 className="text-center text-primary ">Todo React </h1>
            <TodoList/>
        </div>
        </>
    )
}
