const players = {
  '0x2943E07Ca68FeBC79533d321F5D427136995ECB6': 1,
  '0x32B5dEf0e86F31B43FC41b3fDF88ebb8C4358B00': 1,
  '0xd00481Ee5Fb57348231eC22411E053b7c6B0eC4D': 1,
  '0xaA15F02DEDBAe26200D42f5BCF858c6599EeC7a9': 1,
  '0x6C1F839C9cBdCb93B8c5B98CaB23D089ecd83b7F': 1,
  '0x73A7437C5A2A32bB18C37899Bc5940032554FBDB': 1,
  '0xbeb40EAfD717Ae1c6Ac0414ba1631f46e2777795': 1,
  '0x3E731ECd8973b6b6c2Aa4d3FC102B03c8364E623': 1,
  '0xe876275e5e1A77e0DE4006e5d9B85B33621d1442': 1,
  '0x20d801Dbee0505F9a77CFF40f5fed6Ff0f0ee9D6': 1,
  '0x6d96EC1e8D1E2833c94286d9F02249da889B0E7C': 4,
  '0x56e0072B934ff08ed36CB42B8148905504EfB9FB': 4,
  '0x49b957E57742daF8585d7162a93b6d6890eEf02D': 5,
  '0xd9a3dad3Ae5Da65014fc5da82895E5bA7565E9e3': 5,
  '0xdd3b3A67C66A5276aaCC499ec2abD5241721e008': 5,
  '0xC482fcb81E0dB31753a2fe52507C7898fc0C3f93': 5,
  '0x6608D47CF69Ae3509C84d497EA60338E84009535': 6,
  '0xf7042f40B2fC6F3d876EA803b40C51FAbF925f60': 7,
  '0xB0CCf43adA6CBaA26dcf4907117b496d49f74242': 7,
  '0xe91CE9548017F1Ec84e4b9342f88817fD768E918': 7,
  '0xbf70e07186C442055218bF20c50522478235c4a0': 9,
  '0xCA35545A50f37618439651208784016684685C10': 10,
  '0x06a155C89561a57F12b34F0DcF0A9E4153c55C29': 10,
  '0x37F8514c4503AD66cAB4d469DE521DFE14f8D939': 10,
  '0x22188C6B04A695693b40d6e14E11Eec0E251f2eE': 10,
  '0x2EF975b67ce9dda4Da3B483CA1C97ff5c9E8800C': 11,
  '0xF216DC0588B26B074063F934587AfE876546C92B': 40,
  '0x9235E63508e8d27e0CC858D059c752f8De4733C2': 41
}

const prizes = { // natural names, prizes don't need anonimity :)
  '1000 degen': 6,
  '2000 degen': 1,
  'mutatio spore': 25,
  'Yonfrula groupie': 1,
  'Mutatio remix': 1,
  'Basepaint': 1,
  'We are so early frame': 1

}

export function prepareTickets() {
  /**
   * We convert the players value to a list of plain tickets.
   * Each account is repeated as many times as they tokens
   * they have as a value.
   */
  return Object.entries(players).reduce((acc, [account, tokens]) => (
    acc.concat(Array(tokens).fill(account))
  ), [] as string[])
}

export function preparePrizes() {
  /**
   * We group the prizes inside a plain list repating by its value
   * the number of times they are available.
   **/
  return Object.entries(prizes).reduce((acc, [prize, quantity]) => (
    acc.concat(Array(quantity).fill(prize))
  ), [] as string[])
}

export function drawWinner(bag: string[]) {
  // We operate by reference, (sorry functional colleagues),
  // so fairness to other players is guaranteed.
  const index = Math.floor(Math.random() * bag.length)
  return bag.splice(index, 1)[0]
}

export function results(prizes: string[], tickets: string[]) {
  return prizes.reduce(
    (acc, prize) => ([
      ...acc,
      {
        prize,
        winner: drawWinner(tickets)
      }
    ]),
    [] as { prize: string, winner: string }[]
  )
}
