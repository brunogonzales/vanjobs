import Candidate from "components/Candidate"
import Dropdown from "components/Dropdown"
import {
  INTERVIEW_STATUS,
  WAITING_CONFIRMATION_DROPDOWN_OPTIONS,
  SCHEDULED_DROPDOWN_OPTIONS,
} from "lib/constants"
import { format, parseISO } from "date-fns"

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
    },
    { waiting: [], scheduled: [], done: [] }
  )

  return (
    <div className="flex flex-col space-y-6">
      <Waiting interviews={waiting} />
      <Scheduled interviews={scheduled} />
      <Done interviews={done} />
    </div>
  )
}

function Waiting({ interviews }) {
  if (!interviews.length) return null
  return (
    <div className="flex flex-col space-y-7 pl-11">
      <h3>Waiting confirmation</h3>
      {interviews.map((interview) => (
        <div className="grid grid-cols-5" key={interview.id}>
          <Candidate
            name={interview.name}
            title={interview.title}
            image={interview.image}
          />
          <div className="col-start-4 w-max">
            <p className="border border-gray-200 text-yellow-400 rounded-full px-3 py-1">
              Waiting confirmation
            </p>
          </div>
          <div className="pr-10">
            <Dropdown options={WAITING_CONFIRMATION_DROPDOWN_OPTIONS} />
          </div>
        </div>
      ))}
    </div>
  )
}

function Scheduled({ interviews }) {
  if (!interviews.length) return null
  return (
    <div className="flex flex-col">
      <h3 className="mb-1 pl-11">Upcoming</h3>
      {interviews.map((interview) => (
        <div
          className="bg-blue-light grid grid-cols-5 py-4 pl-11 relative"
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
            onClick="fetchInterviewLink"
            className="border rounded text-blue-dark h-7 px-4 flex items-center border-blue-dark w-max text-sm cursor-pointer"
          >
            Get interview link
          </div>
          <div className=" absolute right-10 bottom-10">
            <Dropdown options={SCHEDULED_DROPDOWN_OPTIONS} />
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
      <h3 className="mb-1 pl-11">Done</h3>
      {interviews.map((interview) => (
        <div
          className="grid grid-cols-5 py-4 pl-11 relative"
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
          <div className="flex items-center space-x-2">
            <div
              onClick="fetchInterviewLink"
              className="border rounded h-7 text-blue-dark px-4 flex items-center border-blue-dark w-max text-sm cursor-pointer"
            >
              Move to the next step
            </div>
            <p className="h-max text-sm flex items-center">Reject</p>
          </div>
          <div className=" absolute right-10 bottom-8">
            <Dropdown options={SCHEDULED_DROPDOWN_OPTIONS} />
          </div>
        </div>
      ))}
    </div>
  )
}
