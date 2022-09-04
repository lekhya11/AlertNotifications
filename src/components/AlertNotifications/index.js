import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning} from 'react-icons/md'
import {MdInfo} from 'react-icons/md'
import {GrFormClose} from 'react-icons/gr'
import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => (
  <div className="container">
    <h1 className="main-heading">Alert Notifications</h1>
    <Notification>
      <h1 className="success">
        <AiFillCheckCircle />
        Success
      </h1>
      <div className="cont">
        <p>You can access all the files in the folder"</p>
        <GrFormClose />
      </div>
    </Notification>
    <Notification>
      <h1 className="error">
        <RiErrorWarningFill />
        Error
      </h1>
      <div className="cont">
        <p>Sorry, you are not authorized to have access to delete the file</p>
        <GrFormClose />
      </div>
    </Notification>
    <Notification>
      <h1 className="warning">
        <MdWarning />
        Warning
      </h1>
      <div className="cont">
        <p>Viewers of this file can see comments and suggestions</p>
        <GrFormClose />
      </div>
    </Notification>
    <Notification>
      <h1 className="info">
        <MdInfo />
        Info
      </h1>
      <div className="cont">
        <p>Anyone on the internet can view these files</p>
        <GrFormClose className="close" />
      </div>
    </Notification>
  </div>
)

export default AlertNotifications
