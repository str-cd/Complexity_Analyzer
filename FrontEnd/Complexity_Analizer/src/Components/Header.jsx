import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <>
      <div className="h-[5rem] w-full bg-gray-900 border-b border-gray-700 border-2 ">
        
        <div className="text-white h-full w-full flex justify-center items-center sm:justify-between sm:px-20">
          
          <div className=" left  flex flex-row  justify-between items-center  gap-2 ">
            <img src="src/assets/code-solid.svg" alt="" className=" h-5 sm:h-8" />
            <div className="">
               <p className=" sm:text-xl">Complexity Analyzer</p>
               <p className="font-extralight hidden sm:block">Optimize your code performance</p>
            </div>
           
          </div>

          <div className="right hidden sm:flex gap-6 ">
               <a href="https://github.com/"><FontAwesomeIcon icon={faGithub} size="2xl"  className="text-gray-400  hover:text-white transition-colors duration-200 hover:cursor-pointer  " /></a>  
               <a href="https://x.com/home"><FontAwesomeIcon icon={faTwitter} size="2xl" className="text-gray-400 hover:text-white transition-colors duration-200 hover:cursor-pointer "/></a>
          </div>
        
        </div>

      </div>
    </>
  );
};

export default Header;
