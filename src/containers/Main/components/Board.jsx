import React, { memo } from 'react';
import { Grid, Skeleton } from '../../../components';
import Card from './Card';

function Board({ data }) {
    const { cases, active, casesPerOneMillion, critical, recovered, deaths, testsPerOneMillion } = data

    const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
                <Card value={getValue(cases)} label="Total de casos"/>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(deaths)} label="Total de mortos"/>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(active)} label="Ativos"/>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(critical)} label="Casos críticos"/>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(casesPerOneMillion)} label="Casos por milhão"/>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(active)} label="Mortes por milhão"/>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(testsPerOneMillion)} label="Testes por milhão"/>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(recovered)} label="Total de recuperados"/>
            </Grid>
        </Grid>
    )
}

export default memo(Board)