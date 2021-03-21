import { useState } from 'react'
import * as styles from '../styles/jobs-list.module.css'
import FiltersPanel from './FiltersPanel'
import JobsGrid from './JobsGrid'

export default function JobsList(props) {
  const [isDateFilterActive, setIsDateFilterActive] = useState(false)
  const [nameFilterValue, setNameFilterValue] = useState('')

  // Setting 7 days ago date to date variable
  const date = new Date()
  date.setDate(date.getDate() - 7)

  // If date filter is active, perform filtering by date, otherwise copy props.jobs
  let jobsArray = isDateFilterActive
    ? props.jobs.filter(job => new Date(job.OBJpostingDate) > date)
    : [...props.jobs]

  // If there is a name inputed, perform filtering by name also
  if (nameFilterValue) {
    jobsArray = jobsArray.filter(job =>
      job.companyName.toLowerCase().includes(nameFilterValue.toLowerCase())
    )
  }

  // if filtered array greater then 10 elements, limit array length to 10
  jobsArray.length > 10 && (jobsArray.length = 10)

  return (
    <div className={styles.container}>
      <FiltersPanel
        isDateFilterActive={isDateFilterActive}
        nameFilterValue={nameFilterValue}
        setDateFilter={() => setIsDateFilterActive(prevState => !prevState)}
        setNameFilter={e => setNameFilterValue(e.target.value)}
        clearNameFilter={() => setNameFilterValue('')}
      />

      <JobsGrid jobs={jobsArray} />
    </div>
  )
}
