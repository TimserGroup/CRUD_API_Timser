import { useEffect } from "react";
import { useTests } from "../context/testContext";
import { TestCard } from "../components/tasks/TestCard";
import { ImFileEmpty } from "react-icons/im";

export function TestPage() {
  const { tests, getTests } = useTests();

  useEffect(() => {
    getTests();
  }, []);

  return (
    <>
      {tests.length === 0 && (
        <div className="flex justify-center items-center p-10">
          <div>
            <ImFileEmpty className="text-6xl text-gray-400 m-auto my-2" />
            <h1 className="font-bold text-xl">
              No tests yet, please add a new test
            </h1>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {tests.map((test) => (
          <TestCard test={test} key={test._id} />
        ))}
      </div>
    </>
  );
}
