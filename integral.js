
const calcula = (nums) => {
  if(nums.length === 1) return [parseInt(nums[0]), 1]
  return [parseInt(nums[0]), parseInt(nums[1])+1]
}

const extraiNumeros = (equacao) => {
  let calc = []
  equacao.forEach((num,i) => calc.push(num.split('x')))
  console.log('extraido: ', calc)
  return calc 
}

const transformeX = (nums) => nums[0]/nums[1] 
const multiplicaPorFracao = (nums) => nums[0]*(1/nums[1])


const reduzirIntegral = (equacao) => {
  let calc = []
  equacao.forEach((num,i) => calc.push(calcula(num)))
  return calc
}

const calculeIntegral = (equacao) => {

  let xs = []
  let formula = ''
  let multiplicacao = []
  equacao.forEach((num, i) => {
    xs.push(transformeX(num))
    multiplicacao.push(multiplicaPorFracao(num))
    formula = multiplicacao[i] + ' * ' + 'S x^' +equacao[i][1] + '/' + equacao[i][1]
  })

  return (x, expoente, i) => {
    let resultado = 0
    expoente.forEach((el, index) => {
      resultado += xs[index] * Math.pow(x, el[1])
    })
    return resultado 
  }
}
const integralDefinida = (equacao, lim) => {
  let primeiraEtapa = reduzirIntegral(extraiNumeros(equacao))
  let resolveX = calculeIntegral(primeiraEtapa)
  let calculos = []
  lim.forEach((limite, i) => calculos.push(resolveX(limite, primeiraEtapa, i)))
  return calculos.reduce((antes, atual) => antes + atual)
}

const equacao = ['1x2', '+2x1', '+4']
console.log(integralDefinida(equacao, [3, 0]))

