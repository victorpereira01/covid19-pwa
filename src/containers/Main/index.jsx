import React, { memo, useState, useEffect, useCallback, useEffect } from 'react';
import Api from '../../api';
import { ContainerStyled } from './style'

function Main() {

    const [data, setData] = useState({});
    const [country, setCountry] = useState('brazil');

    const getCovidData = useCallback((country) => {
        Api.getCountry(country)
            .then(data => setData(data));
    }, [])

    useEffect(() => {
        getCovidData(country)
    }, [getCovidData], country);

    return (
        <ContainerStyle>
            <div className="mb-2">

            </div>
        </ContainerStyle>
    )
}

export default memo(Main);