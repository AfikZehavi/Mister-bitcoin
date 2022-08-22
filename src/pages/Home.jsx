import { Component } from "react";
import { BitcoinService } from "../services/BitcoinService";

export class Home extends Component {

    state ={
    BTC: null

    }

    componentDidMount(){
        this.loadBitcoinRate()
    }

    loadBitcoinRate = async ()=>{
            const BTC = await BitcoinService.getRate(this.props.user.coins)
            this.setState({ BTC })
    }

    render() {
        const { user } = this.props
        const {  BTC } = this.state

        if (!user) return <div>Loading...</div>
        return (
            <>
                <section className="home-container p-5 flex column">
                    <h1 className="mb-2"><strong>Hello {user.name}!</strong></h1>
                    <span><strong>Coins: {user.coins}</strong></span>
                   {BTC && <span className="pt-2"><strong>BTC: {BTC}</strong></span>}
                </section>
            </>
        )
    }
}