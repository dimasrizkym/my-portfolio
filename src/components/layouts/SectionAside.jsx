import Button from '../elements/Button';
import me from './../../assets/me.png'
import { MdMail } from "react-icons/md";
import { AiFillInstagram, AiFillLinkedin, AiFillDribbbleCircle, AiFillGithub} from "react-icons/ai";
import { Link } from 'react-router-dom';


const SectionAside = (props) => {
    const handleEmailClick = () => {
      const emailAddress = 'dimasrizkym3@gmail.com';
      const subject = 'Subject';
      const body = 'Write your message here.';
  
      const mailtoLink = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  
      window.location.href = mailtoLink;
    };

  return (
    <div className={props.className}>
      <img src={me} alt="me" className='mb-6'/>
      <div className='border border-gray-300 rounded-xl p-6 mb-6'>
        <MdMail  className='mb-3' size="30px" color="#6D7280" />
        <h4 className='mb-1'>Say hi👋</h4>
        <p className='mb-6'>Let's collaborate together!</p>
        <Button onClick={handleEmailClick}>Email me</Button>
      </div>
      <div className='flex justify-center items-center md:justify-start gap-6'>
        <Link to="https://github.com/dimasrizkym" target='_blank'>
          <AiFillGithub className='cursor-pointer' size="31px" color="#6D7280" title='Github'/>
        </Link>
        <Link to="https://www.linkedin.com/in/dimasrizky/" target='_blank'>
          <AiFillLinkedin className='cursor-pointer' size="31px" color="#6D7280" title='LinkedIn'/>
        </Link>
        <Link to="https://www.instagram.com/themas_rizky/" target='_blank'>
          <AiFillInstagram className='cursor-pointer' size="32px" color="#6D7280" title='Instagram'/>
        </Link>
        <Link to="https://dribbble.com/dimasrizkym" target='_blank'>
          <AiFillDribbbleCircle className='cursor-pointer' size="32px" color="#6D7280" title='Dribble'/>
        </Link>
      </div>
    </div>
  )
}

export default SectionAside