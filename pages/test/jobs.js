import Head from 'next/head'
import JobsList from '../../components/JobsList'

const postBody = {
  companySkills: true,
  dismissedListingHashes: [],
  fetchJobDesc: true,
  jobTitle: 'Business Analyst',
  locations: [],
  numJobs: 20,
  previousListingHashes: []
}

export default function Jobs(props) {
  return (
    <>
      <Head>
        <title>Jobs List</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <JobsList jobs={props.jobs} />
    </>
  )
}

//Fetching data on server and passing response as props to Jobs component

export async function getServerSideProps() {
  const res = await fetch('https://www.zippia.com/api/jobs/', {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postBody)
  })

  const data = await res.json()

  if (!data) return { notFound: true }

  return {
    props: { jobs: data.jobs }
  }
}
