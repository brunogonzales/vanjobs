import useSWR from "swr"

function App() {
  const { data, loading, error } = useSWR(
    "https://api-test.vanhack.dev/Calendar"
  )
  return (
    <div class="flex align-center">
      <h4 className="text-2xl px-11 py-6">
        Principal Product Manager @Driftwood sidecorp
      </h4>
      <div className="ml-auto flex align-center">
        <div>
          <button className="px-7 py-3 border border-indigo-600 rounded text-indigo-600">
            Edit job
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
