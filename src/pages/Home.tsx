import JobCard from "../components/JobCard";
import MyButton from "../components/MyButton";
import MyBlackButton from "../components/MyBlackButton";
import JobData from "../assets/job-directory-data.json";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";

function Home() {
  // import job json data
  // using the data to replicate job card
  // console.log(JobData);

  // every react function must return a TSX
  return (
    <div>
      {/* header */}
      <Header />

      {/* subheader */}
      <SubHeader />

      {/* hero */}
      <div className="h-auto py-10 flex justify-center items-center flex-col space-y-4">
        <h1 className="text-3xl font-bold">Find Tech Jobs In Malaysia 🇲🇾</h1>
        <p>Let employers find you. Or apply to companies directly.</p>
        <div>
          <MyBlackButton text="🎯 I want companies to find me" />
          <MyButton text="🔍 Search Jobs" />
        </div>
      </div>

      {/* Cards container */}
      <div className="flex justify-center items-center flex-wrap gap-4">
        {/* Job cards */}
        {JobData.map((job, index) => {
          // return the job with index no.
          return <JobCard job={job} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Home;
