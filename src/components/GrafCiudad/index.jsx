import React from 'react'
import Chart from 'react-apexcharts'
import './index.css'
const Index = () => {
    const options = {
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
    }

    const series = [
        {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
    ]

    return (
        <div className="grafico-ciudad">
            <h1>Ciudades</h1>
            <Chart
                type="bar"
                width="600"
                series={series}
                options={options}
            />
        </div>
    )
}

export default Index
