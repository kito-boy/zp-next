import * as styles from '../styles/jobs-grid.module.css'

export default function JobsGrid(props) {
  return (
    <>
      {props.jobs.length > 0 ? (
        <div className={styles.grid}>
          {props.jobs.map(job => (
            <div className={styles.card} key={job.jobId}>
              <div className={styles['card__company-name']}>
                {job.companyName}
              </div>
              <h3 className={styles['card__job-title']}>{job.jobTitle}</h3>
              <p className={styles['card__description']}>
                {job.shortDesc}...
              </p>
            </div>
          ))}
        </div>
      ) : (
        <h2>No jobs with given parameters</h2>
      )}
    </>
  )
}
