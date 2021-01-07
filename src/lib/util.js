import { fetcher } from "lib/fetcher"

export const noop = () => {}

export const WAITING_DROPDOWN_OPTIONS = ({ interview }) => [
  {
    label: "Send the request again",
    onClick: noop,
  },
  {
    label: "Cancel request",
    onClick: noop,
  },
  {
    label: "Set as Interview done",
    onClick: noop,
  },
  {
    label: "View calendar",
    onClick: noop,
  },
  {
    label: "Report a problem",
    onClick: noop,
  },
]

export const SCHEDULED_DROPDOWN_OPTIONS = ({ interview }) => [
  {
    label: "Re-schedule",
    onClick: noop,
  },
  {
    label: "Cancel request",
    onClick: noop,
  },
  {
    label: "Set as interview done",
    onClick: async () =>
      alert(
        await fetcher(`/Calendar/movenextstep/${interview.id}`, {
          method: "POST",
        })
      ),
  },
  {
    label: "View calendar",
    onClick: noop,
  },
  {
    label: "Report a problem",
    onClick: noop,
  },
]
