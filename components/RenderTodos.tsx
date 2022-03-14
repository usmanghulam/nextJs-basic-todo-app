const RenderTodos = ({ todos }: any) => {
    return todos.length ? (<ul>
        {todos.map((todo: any, i: number) => <li key={i}>{todo}</li>)}
    </ul>) : <p>no todos</p>;
}
export default RenderTodos;