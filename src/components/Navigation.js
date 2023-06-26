import { FaGear } from 'react-icons/fa6';
import { PiMicrophoneFill } from 'react-icons/pi';
import { IoChevronBack } from 'react-icons/io5';

const Navigation = () => (
  <div className="navbar">
    <IoChevronBack size={35} className="back-arrow" />
    <h1>Countries Stats App</h1>
    <div>
      <PiMicrophoneFill size={30} />
      <FaGear size={30} />
    </div>
  </div>
);

export default Navigation;
