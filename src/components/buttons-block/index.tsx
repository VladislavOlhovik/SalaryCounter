import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next';

import { RootStateType, WorkersType } from "@store";
import { calculateSalaryAC, resetAC } from "@store";
import { Button } from "@components";

import './style.scss'




export const ButtonsBlock = () => {

    const { t } = useTranslation('home');

    const dispatch = useDispatch()
    const workersList = useSelector<RootStateType, Array<WorkersType>>((state) => state.app.workers)

    const onCalculate = () => {
        dispatch(calculateSalaryAC())
    }
    const onReset = () => {
        dispatch(resetAC())
    }

    return (
        <div className="buttonsBlockWrapper">
            <Button title={t('calcBTN')}
                disabled={!workersList.length}
                onClick={onCalculate} />
            <Button title={t('resetBTN')}
                onClick={onReset} />
        </div>
    )
}