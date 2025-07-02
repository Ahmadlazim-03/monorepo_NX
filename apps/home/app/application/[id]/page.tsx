import { notFound } from "next/navigation"
import { getApplicationById } from "../../../lib/applications"
import ApplicationDetail from "./application-detail"

interface ApplicationPageProps {
  params: {
    id: string
  }
}

export default function ApplicationPage({ params }: ApplicationPageProps) {
  const id = Number.parseInt(params.id)
  const application = getApplicationById(id)

  if (!application) {
    notFound()
  }

  return <ApplicationDetail application={application} />
}

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }, { id: "6" }]
}
