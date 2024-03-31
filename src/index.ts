// import { cast } from './api'
import { cast } from './api'
import { preparePrizes, prepareTickets, results } from './loto'

async function raffle() {
  // tickets from wallets and capacity
  const tickets = prepareTickets()
  // prizes from names and capacity
  const prizes = preparePrizes()
  const winners = results(prizes, tickets)

  // print the winners in the stdout so we can see them in the job
  console.log({ winners })
  
  for (const { prize, winner } of winners) {
    await cast(`Wallet ${winner} won "${prize}"! 🎉🎉🎉`)
    // let's give a small delay so we don't spam the network
    await new Promise(resolve => setTimeout(resolve, 1_000))
  }
}

raffle()
