import { Link } from "react-router-dom";
import Instagram from "../../assets/svgs/Instagram";
import Linkedin from "../../assets/svgs/Linkedin";
import Youtube from "../../assets/svgs/Youtube";
import '../../App.css'

const Footer = () => {

  const icons = [
    {
      svg: <Instagram/>,
      link: "https://www.instagram.com/voyenbici_argentina/"
    } ,
    {
      svg: <Youtube/>,
      link: "https://www.youtube.com/@voyenbici"
    }, 
    {
      svg: <Linkedin/>,
      link: "https://www.linkedin.com/in/voy-en-bici-banco-mundial-de-bicicletas-a02789171/"
    } ,
  ];

  return (
    <footer className="bg-[#0E2547] flex justify-center items-center">
      <div className="w-full h-[200px] flex flex-col justify-center items-center">
        <div
          className="text-[#fff] leading-[37px] flex flex-col w-full justify-center items-center lg:flex-row lg:mr-[50px] gap-4 mb-8"
          style={{ padding: 0 }}
        >
          <div className="footer-data lg:pr-4 max-h-[20px] flex items-center lg:border-2 lg:border-white lg:border-solid"
          
          >
            <p>argentina@voyenbici.org</p>
          </div>
          <div className="footer-data lg:pr-4 max-h-[20px] flex items-center lg:border-2 lg:border-white lg:border-solid"
          
          >
            <p>www.voyenbici.org</p>
          </div>
          <div className="max-h-[20px] flex items-center">
            <p>+549 1157532148</p>
          </div>
        </div>
        <div className="flex  gap-4">
          {icons.map((icon, index) => (
            <Link key={index} to={icon.link} target="_blank" className="">
              <div className=" text-[#0E2547] bg-white w-[40px] h-[40px] flex items-center justify-center" 
              style={{borderRadius: '50%'}}>
                  {icon.svg} 
              </div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
