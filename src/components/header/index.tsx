import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { changeIsActiveInfoWindowAC } from '@store'
import { AboutIcon, SettingIcon } from '@icons'
import { useTheme } from '@theme'

import './style.scss'

interface HeaderProps {
  disabledSettings?: boolean
}

export const Header = ({ disabledSettings = true }: HeaderProps) => {
  const dispatch = useDispatch()
  const { theme } = useTheme()

  const onChangeIsActiveInfoWindow = () => {
    disabledSettings && dispatch(changeIsActiveInfoWindowAC(true))
  }

  return (
    <header className="headerWrapper">
      <div>
        <Link to="/">
          <AboutIcon className={`aboutIcon ${theme}`} />
        </Link>
      </div>
      <h1>Salary Counter</h1>
      <div onClick={onChangeIsActiveInfoWindow}>
        <SettingIcon className={`settingIcon ${theme}`} />
      </div>
    </header>
  )
}
