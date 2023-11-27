import { useSelector } from 'react-redux'

import {
  ButtonsBlock,
  FilterButtons,
  Header,
  InfoInputs,
  InfoWindow,
  InformationTable,
  TotalAmountInput,
} from '@components'
import { RootStateType, StateType } from '@store'

import './style.scss'

export const Home = () => {
  const { isActiveInfoWindow } = useSelector<RootStateType, StateType>(
    (state) => state.app,
  )

  return (
    <div className="homeWrapper">
      <Header />
      {isActiveInfoWindow && <InfoWindow />}
      <TotalAmountInput />
      <InfoInputs />
      <FilterButtons />
      <InformationTable />
      <ButtonsBlock />
    </div>
  )
}
