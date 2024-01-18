import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RiGitRepositoryLine } from "react-icons/ri";
import { Layout } from "../../components/common";
function Projeler() {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/MiqeWazowhiskey/repos")
      .then((response) => response.json())
      .then((response) => setRepos(response))
      .catch((Error) => console.log(Error));
  }, []);
  return (
    <>

      <div className="flex flex-col gap-x-20 gap-y-10 items-start ml-10 mb-10">
          <p className="text-4xl font-mono font-bold w-full">Projects</p>
        {repos.map((repo) => {
          return (
            <motion.a
              key={repo.id}
              href={repo.clone_url}
              whileHover={{ scale: 1.1 }}
            >
              <div className="flex flex-col px-3 rounded-lg lg:w-96 md:w-96 w-48 border border-amber-200">
                <div>
                  <div className="flex flex-row text-gray-500 items-center justify-start">
                    <RiGitRepositoryLine />
                    <div className="text-blue-500 ml-2">{repo.name}</div>
                  </div>
                  <div className="flex flex-col justify-start text-gray-400">
                    <p>
                      {repo.description}⭐{repo.stargazers_count}
                    </p>
                  </div>
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>
    </>
  );
}

export default Projeler;
