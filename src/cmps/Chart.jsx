import React from 'react'
import { Sparklines, SparklinesBars } from 'react-sparklines';

export function Chart(props) {
    const { name, description, values } = props.data
    if (!values) return <div>Loading...</div>
    return (
        <article className="chart-preview text-center">
            <h2 className='mt-4'>{name}</h2>
            <Sparklines data={values} width={100} height={50} margin={5}>
                <SparklinesBars barWidth={1} />
            </Sparklines>
            <p>{description}</p>
        </article>
    )
}
