import { noop } from "lib/util"
import { fetcher } from "lib/fetcher"

export const MAX_USER_IMAGES = 3
export const TAB_LABELS = ["Calendar", "Next Interviews"]
export const INTERVIEW_STATUS = {
  WAITING_CONFIRMATION: "Waiting Confirmation",
  SCHEDULED: "Scheduled",
  DONE: "Done",
}

export const MOCK_DONE_INTERVIEWS = [
  {
    id: 2,
    name: "Brooklyn Simmons",
    title: "React Developer",
    interviewStep: "Technical Interview",
    scheduledTime: "2021-04-10T10:40:00",
    status: "Done",
    image:
      "https://vanhackblobstorageprod.blob.core.windows.net/publicfiles/profile2.png",
  },
  {
    id: 3,
    name: "Esther Howard",
    title: "React Developer",
    interviewStep: "Technical Interview",
    scheduledTime: "2021-03-10T10:40:00",
    status: "Done",
    image:
      "https://vanhackblobstorageprod.blob.core.windows.net/publicfiles/profile3.png",
  },
  {
    id: 4,
    name: "Emma Fox",
    title: "DevOps Enginner",
    interviewStep: "Technical Interview",
    scheduledTime: "2020-12-01T09:40:00",
    status: "Done",
    image:
      "https://vanhackblobstorageprod.blob.core.windows.net/publicfiles/profile4.png",
  },
]

export const MOCK_JOB = {
  company: "Driftwood decorp",
  positions: "1 Position",
  salary: "$CAD 100 - 140k",
  location: "Remote",
  skills: [
    "Machine Learning",
    "Signal R",
    "Dapper",
    "Tensorflow",
    "JavaScript",
  ],
}

export const INTERVIEW_LIST_HEADERS = [
  "Candidate",
  "Interview Step",
  "Scheduled Time",
]
