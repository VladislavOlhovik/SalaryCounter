import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { FilterType, StateType } from '@store'
import { RootStateType } from '@store'
import { setFilterTypeAC } from '@store'
import { useTheme } from '@theme'

import './style.scss'

interface FilterButtonsInfo {
  filterValue: FilterType
  titleKey: string
}

const filterButtonsInfo: Array<FilterButtonsInfo> = [
  { filterValue: 'DEFAULT', titleKey: 'defaultTitle' },
  { filterValue: 'PER_SHIFT', titleKey: 'perShiftTitle' },
  { filterValue: 'PER_WEEK', titleKey: 'perWeekTitle' },
  { filterValue: 'PER_MONTH', titleKey: 'perMonthTitle' },
  { filterValue: 'PER_YEAR', titleKey: 'perYearTitle' },
]

export const FilterButtons = () => {
  const { t } = useTranslation('home')
  const { theme } = useTheme()
  const { filterType } = useSelector<RootStateType, StateType>(
    (state) => state.app,
  )
  const dispatch = useDispatch()

  const setFilter = (filterValue: FilterType) => {
    dispatch(setFilterTypeAC(filterValue))
  }

  return (
    <div className="filterButtonsWrapper">
      {filterButtonsInfo.map(({ filterValue, titleKey }) => {
        return (
          <div
            key={filterValue}
            className={`${filterType === filterValue && 'active'} ${theme}`}
            onClick={() => setFilter(filterValue)}
          >
            {t(`filterButtons.${titleKey}`)}
          </div>
        )
      })}
    </div>
  )
}
