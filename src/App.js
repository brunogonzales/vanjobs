import { useState } from "react"
import useSWR from "swr"
import cn from "classnames"
import { fetcher } from "lib/fetcher"
import {
  MAX_USER_IMAGES,
  TAB_LABELS,
  MOCK_DONE_INTERVIEWS,
  MOCK_JOB,
} from "lib/constants"
import InterviewList from "components/InterviewList"
import JobDetails from "components/JobDetails"

function App() {
  const { data, error } = useSWR("/Calendar", fetcher)
  const [activeTab, setActiveTab] = useState(TAB_LABELS[0])

  if (error) return <div>failed to load</div>
  if (!data) return <div>LOADING...</div>

  const interviewsArray =
    activeTab === "Next Interviews"
      ? data.filter((interview) => interview.status === "Scheduled")
      : [...data, ...MOCK_DONE_INTERVIEWS]

  return (
    <div className="divide-y divide-primary">
      <div className="flex items-center">
        <div className="flex space-x-3 items-center">
          <h4 className="text-2xl pl-11 py-6 text-ink-light font-bold">
            Principal Product Manager @Driftwood sidecorp
          </h4>
          <JobDetails job={MOCK_JOB} />
        </div>
        <div className="ml-auto flex">
          <div className="flex items-center">
            <button
              onClick={async () =>
                alert(
                  await fetcher("/Calendar/movenextstep/1", { method: "POST" })
                )
              }
              className="px-7 py-3 border border-blue-400 rounded text-blue-dark hover:bg-blue-dark hover:text-white"
            >
              Edit job
            </button>
          </div>
          <div className="flex pr-10 pl-6 items-center">
            {data.slice(0, 3).map((candidate) => {
              return (
                <div
                  className="w-8 h-8 rounded-full border-white border-2 -ml-2"
                  key={candidate.id}
                >
                  <img src={candidate.image}></img>
                </div>
              )
            })}
            {data.length > MAX_USER_IMAGES ? (
              <div className="w-8 h-8 border font-bold border-white rounded-full -ml-2 bg-gray-300 flex items-center justify-center">
                +{data.length + 1 - MAX_USER_IMAGES}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="flex pt-3 pl-11 space-x-8 shadow-lg">
        {TAB_LABELS.map((tabLabel) => (
          <p
            key={tabLabel}
            className={cn("pb-3 cursor-pointer", {
              "border-b-2 border-blue-400 text-blue-400":
                tabLabel === activeTab,
            })}
            onClick={() => setActiveTab(tabLabel)}
          >
            {tabLabel}
          </p>
        ))}
      </div>
      <InterviewList interviews={interviewsArray} />
    </div>
  )
}

export default App
