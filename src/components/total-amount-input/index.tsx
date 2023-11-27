import { ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { RootStateType, changeTotalAmountAC } from '@store'
import { StyledPad } from '@components'
import { sanitizeNumericInput } from '@helpers'

import './style.scss'

export const TotalAmountInput = () => {
  const { t } = useTranslation('home')
  const dispatch = useDispatch()
  const totalAmount = useSelector<RootStateType, string>(
    (state) => state.app.totalAmount,
  )

  const onChangeTotalAmount = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeTotalAmountAC(sanitizeNumericInput(event)))
  }

  return (
    <StyledPad classNameProps="totalAmountInputWrapper">
      <div>{t('totalSalary')}</div>
      <input type="text" onChange={onChangeTotalAmount} value={totalAmount} />
    </StyledPad>
  )
}
