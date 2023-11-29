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
  const totalAmount = useSelector<RootStateType, number>(
    (state) => state.app.totalAmount,
  )

  const onChangeTotalAmount = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeTotalAmountAC(sanitizeNumericInput(e), t('pressCalc')))
  }

  return (
    <StyledPad classNameProps="totalAmountInputWrapper">
      <div>{t('totalSalary')}</div>
      <input
        type="number"
        placeholder={t('amountPh')}
        min="0.1"
        step="0.1"
        onChange={onChangeTotalAmount}
        value={totalAmount == 0 ? '' : totalAmount}
      />
    </StyledPad>
  )
}
