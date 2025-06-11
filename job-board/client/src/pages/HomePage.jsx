import JobList from '../components/JobList.jsx';
import {useJobs} from "../lib/hooks.js";

function HomePage() {
    const {jobs, loading, error} = useJobs();

    return (
    <div>
      <h1 className="title">
        Job Board
      </h1>
      <JobList jobs={jobs} />
    </div>
  );
}

export default HomePage;
