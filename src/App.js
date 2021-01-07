import useSWR from "swr"
import { fetcher } from "lib/fetcher"
import { MAX_USER_IMAGES } from "lib/constants"

function App() {
  const { data, error } = useSWR("/Calendar", fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>LOADING...</div>

  return (
    <div className="flex items-center">
      <h4 className="text-2xl px-11 py-6">
        Principal Product Manager @Driftwood sidecorp
      </h4>
      <div className="ml-auto flex">
        <div className="flex items-center">
          <button className="px-7 py-3 border border-blue-600 rounded text-blue-600">
            Edit job
          </button>
        </div>
        <div className="flex pr-10 pl-6 flex items-center">
          {data.slice(0, 3).map((candidate) => {
            return (
              <div className="w-8 h-8 rounded-full -ml-2">
                <img src={candidate.image}></img>
              </div>
            )
          })}
          {data.length > MAX_USER_IMAGES ? (
            <div className="w-8 h-8 rounded-full -ml-2 bg-gray-300 flex items-center justify-center">
              +{data.length + 1 - MAX_USER_IMAGES}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default App
