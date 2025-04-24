import { useFetch, useCounter } from "../hooks"
import { LoadingQuote, Quote } from "../03-examples/components";

export const Layout = () => {
  
  const { counter, increment } = useCounter(1);
  
  const { data, isLoading } = useFetch(`https://jsonplaceholder.typicode.com/todos/${ counter }`);
  
  const { title } = !!data && data;

  return (
    <>
        <h1>Placeholder API</h1>
        <hr />

        {
            isLoading ? (
                <LoadingQuote />
            ) : (
                <Quote title = { title } />
            )
        }

        <button 
            className="btn btn-primary"
            disabled= {isLoading}
            onClick={() => increment()}
        >
            Next quote
        </button>

    </>
  )
}
