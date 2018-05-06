// @flow
export type state = {
  message: string,
  bool: boolean
}

export function results (title: string, ...statements: Array<state>) {
  console.log(title.toUpperCase())
  const titleLength: number = title.length
  let div: string = ''
  for (let i = 0; i <= titleLength; i++) {
    div += '='
  }
  console.log(div)
  statements.forEach((statement: state) => {
    let message: string = statement.message
    let bool: boolean = statement.bool

    let outMsg = message + ': ' + bool.toString()
    console.log(outMsg)
  })
  console.log('\n')
}
