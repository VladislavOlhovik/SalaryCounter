import { FormEvent, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';

import { StyledPad, Button } from "@components";
import { changeIsActiveInfoWindowAC, saveShiftInfoAC, 
    RootStateType, StateType } from "@store";
import { sanitizeNumericInput } from "@helpers";

import './style.scss';


export const InfoWindow = () => {

    const { t } = useTranslation('infoWindow');

    const { shiftInfo } = useSelector<RootStateType, StateType>((state) => state.app)
    const [perWeekValue, setPerWeekValue] = useState(shiftInfo.PER_WEEK);
    const [perMonthValue, setPerMonthValue] = useState(shiftInfo.PER_MONTH);
    const [perYearValue, setPerYearValue] = useState(shiftInfo.PER_YEAR);
    const dispatch = useDispatch()

    const onChangeIsActiveInfoWindow = () => {
        dispatch(changeIsActiveInfoWindowAC(false))
    }

    const saveShiftsInfo = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(saveShiftInfoAC({ 'PER_WEEK': perWeekValue, 'PER_MONTH': perMonthValue, 'PER_YEAR': perYearValue }))
        onChangeIsActiveInfoWindow()
    }

    return (
        <StyledPad styleProp="infoWindowWrapper">
            <form onSubmit={saveShiftsInfo}>
                <h1 className="closeButton"
                    onClick={onChangeIsActiveInfoWindow}>
                    x
                </h1>
                <p>{t('title')}</p>
                <p>{t('description')}</p>
                <input required type="text" pattern="^(?:[1-7](?:\.\d)?|0?\.[1-7])$"
                    value={perWeekValue}
                    onChange={(e) => setPerWeekValue(sanitizeNumericInput(e))} />
                <p>{t('perWeek')}</p>
                <input required type="text" pattern="^(?:[1-9]|1\d|2\d|30|31)$"
                    value={perMonthValue}
                    onChange={(e) => setPerMonthValue(sanitizeNumericInput(e))} />
                <p>{t('perMonth')}</p>
                <input required type="text" pattern="^(?:[1-9]|[1-9]\d|1\d{2}|2[0-9]{2}|3[0-5]\d|36[0-5])$"
                    value={perYearValue}
                    onChange={(e) => setPerYearValue(sanitizeNumericInput(e))} />
                <p>{t('perYear')}</p>
                <p>{t('placeholder')}</p>
                <Button type="submit"
                    title={t('saveButton')} />
            </form>
        </StyledPad>
    )
}