import Candidate from "components/Candidate"
import Dropdown from "components/Dropdown"
import { INTERVIEW_STATUS, INTERVIEW_LIST_HEADERS } from "lib/constants"
import { WAITING_DROPDOWN_OPTIONS, SCHEDULED_DROPDOWN_OPTIONS } from "lib/util"
import { format, parseISO } from "date-fns"
import { fetcher } from "lib/fetcher"

export default function InterviewList({ interviews }) {
  const { waiting, scheduled, done } = interviews.reduce(
    (acc, interview) => {
      if (interview.status === INTERVIEW_STATUS.WAITING_CONFIRMATION) {
        return { ...acc, waiting: [...acc["waiting"], interview] }
      }
      if (interview.status === INTERVIEW_STATUS.SCHEDULED) {
        return { ...acc, scheduled: [...acc["scheduled"], interview] }
      }
      if (interview.status === INTERVIEW_STATUS.DONE) {
        return { ...acc, done: [...acc["done"], interview] }
      }
      return acc
    },
    { waiting: [], scheduled: [], done: [] }
  )

  return (
    <div className="pt-11 bg-gray-light pb-11">
      <div className="grid grid-cols-5 pl-11  align-center justify-center ">
        {INTERVIEW_LIST_HEADERS.map((header) => (
          <p className="text-gray-dark">{header}</p>
        ))}
      </div>
      <div className="pt-9">
        <div className="flex flex-col space-y-6">
          <Waiting interviews={waiting} />
          <Scheduled interviews={scheduled} />
          <Done interviews={done} />
        </div>
      </div>
    </div>
  )
}

function ListHeading({ children }) {
  return <h3 className="font-bold pl-11 pb-4">{children}</h3>
}

function Waiting({ interviews }) {
  if (!interviews.length) return null
  return (
    <div className="flex flex-col space-y-7">
      <ListHeading>Waiting Confirmation</ListHeading>
      {interviews.map((interview) => (
        <div className="grid grid-cols-5 items-center pl-11" key={interview.id}>
          <Candidate
            name={interview.name}
            title={interview.title}
            image={interview.image}
          />
          <div className="col-start-3 w-max">
            <p className="border border-gray-300 text-yellow rounded-full px-3 py-1">
              Waiting confirmation
            </p>
          </div>
          <div className="col-start-5 pr-10">
            <Dropdown options={WAITING_DROPDOWN_OPTIONS({ interview })} />
          </div>
        </div>
      ))}
    </div>
  )
}

function Scheduled({ interviews }) {
  if (!interviews.length) return null

  return (
    <div className="flex flex-col ">
      <ListHeading>Upcoming</ListHeading>
      {interviews.map((interview) => (
        <div
          className="bg-blue-light grid grid-cols-5 py-4 pl-11 relative items-center"
          key={interview.id}
        >
          <Candidate
            name={interview.name}
            title={interview.title}
            image={interview.image}
          />
          <p>{interview.interviewStep}</p>
          <p>
            {format(
              parseISO(interview.scheduledTime),
              "eee LLL Mo ' ⋅ 'h':'mmaaaa"
            )}
          </p>
          <div
            onClick={async () =>
              alert(await fetcher(`/Calendar/interviewlink/${interview.id}`))
            }
            className="border rounded text-blue-dark h-7 px-4 flex items-center 
            border-blue-dark 
            w-max text-sm 
            cursor-pointer"
          >
            Get interview link
          </div>
          <div className=" absolute right-10 bottom-10">
            <Dropdown options={SCHEDULED_DROPDOWN_OPTIONS({ interview })} />
          </div>
        </div>
      ))}
    </div>
  )
}

function Done({ interviews }) {
  if (!interviews.length) return null
  return (
    <div className="flex flex-col">
      <ListHeading>Done</ListHeading>
      {interviews.map((interview) => (
        <div
          className="grid grid-cols-5 py-4 pl-11 relative items-center"
          key={interview.id}
        >
          <Candidate
            name={interview.name}
            title={interview.title}
            image={interview.image}
          />
          <p>{interview.interviewStep}</p>
          <p>
            {format(
              parseISO(interview.scheduledTime),
              "eee LLL Mo ' ⋅ 'h':'mmaaaa"
            )}
          </p>
          <div className="flex items-center space-x-7">
            <div
              onClick={async () =>
                alert(
                  await fetcher(`/Calendar/movenextstep/${interview.id}`, {
                    method: "POST",
                  })
                )
              }
              className="border rounded text-blue-dark px-4 flex items-center border-blue-dark w-max text-sm cursor-pointer"
            >
              Move to the next step
            </div>
            <p
              onClick={async () =>
                alert(
                  await fetcher(`/Calendar/reject/${interview.id}`, {
                    method: "POST",
                  })
                )
              }
              className="h-max text-sm flex items-center cursor-pointer hover:text-red-400"
            >
              Reject
            </p>
          </div>
          <div className=" absolute right-10 bottom-8">
            <Dropdown options={SCHEDULED_DROPDOWN_OPTIONS({ interview })} />
          </div>
        </div>
      ))}
    </div>
  )
}
