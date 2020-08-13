import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Grid, Skeleton } from '../components';

function Board({ data }) {
    const { cases, todayDeaths, recovered, deaths, todayCases } = data;

    const getValue = (value) = value ? value : <Skeleton variant="text" width={182} height={60} />

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
                <Card value={getByDisplayValue(cases)} label="Total de casos" color="#5d78ff" />
            </Grid>
        </Grid> 
    )
}
