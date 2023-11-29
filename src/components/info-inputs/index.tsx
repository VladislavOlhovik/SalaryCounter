import { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { addWorkerAC } from '@store'
import { sanitizeNumericInput } from '@helpers'
import { Button, StyledPad } from '@components'

import './style.scss'

export const InfoInputs = () => {
  const { t } = useTranslation('home')
  const dispatch = useDispatch()
  const [workerName, setWorkerName] = useState('')
  const [shifts, setShifts] = useState(0)

  const onChangeWorkerName = (e: ChangeEvent<HTMLInputElement>) => {
    setWorkerName(e.currentTarget.value)
  }
  const onChangeShifts = (e: ChangeEvent<HTMLInputElement>) => {
    setShifts(sanitizeNumericInput(e))
  }

  const addWorkerInfo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(addWorkerAC(workerName, shifts, t('pressCalc')))
    setShifts(0)
    setWorkerName('')
  }
  return (
    <StyledPad classNameProps="infoInputsWrapper">
      <form onSubmit={addWorkerInfo}>
        <div>{t('workerInfo')}</div>
        <div className="inputBlock">
          <input
            type="text"
            placeholder={t('namePh')}
            value={workerName}
            onChange={onChangeWorkerName}
          />
          <input
            type="number"
            min="0.1"
            step="0.1"
            placeholder={t('shiftPh')}
            value={shifts === 0 ? '' : shifts}
            onChange={onChangeShifts}
          />
        </div>
        <div>
          <Button
            type="submit"
            disabled={!shifts && !workerName}
            title={t('addBtn')}
          />
        </div>
      </form>
    </StyledPad>
  )
}
