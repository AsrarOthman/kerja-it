import { useParams } from "react-router-dom";
import JobData from "../assets/job-directory-data.json";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";

function Job() {
  const param = useParams();

  // create a function to filter element in JobData which id === param.id,
  const filteredArray = JobData.filter((item) => String(item.id) === param.id);
  const [filteredJob] = filteredArray;

  console.log(filteredJob);
  console.log(filteredArray);

  const date = new Date(filteredJob.post_date);
  const isNew = date.getFullYear() === 2023;

  return (
    <div className=" bg-slate-100">
      <div className=" bg-white">
        <Header />
      </div>
      <SubHeader />

      <div className="flex justify-center items-center mt-8">
        <h4 className="text-start w-[660px] mb-4 text-xl">
          Jobs /{" "}
          <span>
            {filteredJob.job} - {filteredJob.company}
          </span>
        </h4>
      </div>

      {/* Job Container */}
      <div className="flex items-center justify-center   h-auto ">
        {/* info container */}
        <div className=" w-[700px] space-y-4  p-8 rounded-2xl border bg-white">
          <div className=" space-x-1">
            <p className=" bg-gray-200  py-1 px-2 rounded inline-block">
              {filteredJob.company_state}
            </p>

            {filteredJob.stacks.map((stacks: string, index: number) => {
              return (
                <p
                  key={index}
                  className=" bg-gray-200 p-1 rounded inline-block"
                >
                  {stacks}
                </p>
              );
            })}
          </div>

          <div>
            <h1 className=" font-bold text-3xl">{filteredJob.job}</h1>
            <h4>{filteredJob.company}</h4>
          </div>

          <div className=" capitalize">
            <p>
              📅 Posted on {filteredJob.post_date}{" "}
              {/* if isNew === true */}
         
              {isNew ? (
                <span className=" bg-green-300 inline-block text-gray-800 p-1 ml-2">
                  New
                </span>
              ) : null}
            </p>
            <p>
              📍 &nbsp; {filteredJob.district}, {filteredJob.company_state}
            </p>
            <p>💼 {filteredJob.work_type}</p>
            <p>🕒 Unspecified</p>
          </div>

          <div className=" flex">
            <a
              href={filteredJob.link}
              target="_blank"
              className=" my-7 bg-blue-600 text-white hover:bg-blue-800 px-10 py-2.5 rounded-md"
            >
              Apply Now 🚀
            </a>
          </div>


          <div className="space-y-4">
            <h1 className=" text-xl font-semibold">✍️ Job Description</h1>

            <div className=" p-5 space-y-6">
              <div>
                <h1 className="font-bold ">What you will be doing:</h1>
                <ul className="list-disc">
                  {filteredJob.details.job_description.map(
                    (job_description: string, index: number) => {
                      return (
                        <li key={index} className=" p-1 rounded ">
                          {job_description}
                        </li>
                      );
                    }
                  )}
                </ul>
              </div>

              <div>
                <h1 className="font-bold">Qualification:</h1>
                <ul className="list-disc">
                  {filteredJob.details.qualification.map(
                    (qualification: string, index: number) => {
                      return (
                        <li key={index} className=" p-1 rounded ">
                          {qualification}
                        </li>
                      );
                    }
                  )}
                </ul>
              </div>
            </div>

            <div className=" flex">
              <a
                href={filteredJob.link}
                className=" my-7 bg-blue-600 text-white hover:bg-blue-800 px-10 py-2.5 rounded-md"
              >
                Apply Now 🚀
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Job;
