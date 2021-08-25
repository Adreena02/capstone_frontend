import HeaderLink from './HeaderLink'
function Header() {
    return(
      <div className='header'>
          <HeaderLink page='profile' />
          <HeaderLink page='/home' />
          <HeaderLink page='/add-new-villager' />
          
      </div>  
    )
}

export default Header