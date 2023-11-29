import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Button, Header, StyledPad } from '@components'
import { GetStartedIcon } from '@icons'
import { useTheme } from '@theme'

import './style.scss'

export const About = () => {
  const { t, i18n } = useTranslation('about')
  const { theme, toggleTheme } = useTheme()

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'rus' : 'en')
  }

  return (
    <div className="aboutWrapper">
      <Header disabledSettings={false} />
      <StyledPad>
        <section>
          <h1>{t('welcome')}</h1>
          <h2>{t('empowering')}</h2>
          <img
            src={'counter-screenshot.webp'}
            alt="App Screenshot"
            className="counterScreenImg"
          />
        </section>
        <section>
          <h2>{t('mission')}</h2>
          <p>{t('missionText')}</p>
        </section>
        <footer>
          <Button
            title={theme === 'light' ? 'dark' : 'light'}
            onClick={toggleTheme}
          />
          <Link to="/home">
            <Button title={t('getStarted')}>
              <GetStartedIcon className="getStartedIcon" />
            </Button>
          </Link>
          <Button
            title={i18n.language === 'en' ? 'rus' : 'en'}
            onClick={changeLanguage}
          />
          <p>&copy; 2023</p>
        </footer>
      </StyledPad>
    </div>
  )
}
