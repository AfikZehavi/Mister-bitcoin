import { Component } from 'react'
import { Chart } from '../cmps/Chart'
import { BitcoinService } from '../services/BitcoinService'

export class Statistics extends Component {
    state = {
        marketPrice: null,
        confirmedTransactions: null,
        isLoading: true
    }

    async componentDidMount() {
        const marketPrice = await BitcoinService.getMarketPrice()
        console.log(marketPrice);
        const confirmedTransactions = await BitcoinService.getConfirmedTransactions()
        this.setState({ marketPrice, confirmedTransactions, isLoading: false })
    }

    render() {
        const { marketPrice, confirmedTransactions, isLoading } = this.state
        if (isLoading) return <div>Loading...</div>
        return (
            <section className='charts-page p-3'>
                <Chart data={marketPrice} />
                <Chart data={confirmedTransactions} />
            </section>
        )
    }
}
