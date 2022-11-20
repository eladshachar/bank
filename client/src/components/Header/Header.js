import Balance from './Balance/Balance';
import './Header.css'
import { Link } from 'react-router-dom'

function Header(props){

    return(
        <div id="header">
          <Link to='/' className='link'>Home </Link>
          <Link to='/operations' className='link'>Operations </Link>
          <Link to='/expenses' className='link'>Expenses </Link>
          <Balance balance={props.balance}/>
        </div>
    )
}

export default Header;