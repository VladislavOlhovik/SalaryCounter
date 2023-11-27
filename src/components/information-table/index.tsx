import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import {
  FilterType,
  ShiftInfoType,
  StateType,
  WorkersType,
  RootStateType,
  deleteWorkerAC,
} from '@store'
import { StyledPad, Button } from '@components'

import './style.scss'

const getInfo = (
  worker: WorkersType,
  filterType: FilterType,
  shiftInfo: ShiftInfoType,
) => {
  switch (filterType) {
    case 'DEFAULT':
      return { salary: worker.salaryDefault, shifts: worker.shifts }
    case 'PER_SHIFT':
      return { salary: worker.salaryPerShift, shifts: shiftInfo.PER_SHIFT }
    case 'PER_WEEK':
      return { salary: worker.salaryPerWeek, shifts: shiftInfo.PER_WEEK }
    case 'PER_MONTH':
      return { salary: worker.salaryPerMonth, shifts: shiftInfo.PER_MONTH }
    case 'PER_YEAR':
      return { salary: worker.salaryPerYear, shifts: shiftInfo.PER_YEAR }
  }
}

export const InformationTable = () => {
  const { t } = useTranslation('home')
  const { workers, filterType, shiftInfo } = useSelector<
    RootStateType,
    StateType
  >((state) => state.app)
  const [expand, setExpand] = useState(false)
  const dispatch = useDispatch()

  const deleteWorker = (id: string) => {
    dispatch(deleteWorkerAC(id))
  }

  return (
    <StyledPad
      onDoubleClick={() => setExpand(!expand)}
      classNameProps={`informationTableWrapper ${
        expand ? 'expandInformationTable' : ''
      }`}
    >
      <table className="table">
        <thead>
          <tr>
            <th>{t('name')}</th>
            <th>{t('shift')}</th>
            <th>{t('salary')}</th>
          </tr>
        </thead>
        <tbody>
          {workers.map((e) => {
            return (
              <tr key={e.id}>
                <th>{e.workerName}</th>
                <th>{getInfo(e, filterType, shiftInfo).shifts}</th>
                <th>{getInfo(e, filterType, shiftInfo).salary}</th>
                <th>
                  <Button
                    title="X"
                    onClick={() => {
                      deleteWorker(e.id)
                    }}
                  />
                </th>
              </tr>
            )
          })}
        </tbody>
      </table>
    </StyledPad>
  )
}
