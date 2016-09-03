// PoC de Fórmula das Primitivas
// https://pt.wikipedia.org/wiki/Integral

const transformeX = (nums) => nums[0]/nums[1] 
const multiplicaPorFracao = (nums) => nums[0]*(1/nums[1])

const calcula = (nums) => {
  if(nums.length === 1) return [parseInt(nums[0]), 1]
  return [parseInt(nums[0]), parseInt(nums[1])+1]
}

const extraiNumeros = (equacao) => {
  let calc = []
  equacao.forEach((num,i) => calc.push(num.split('x')))
  return calc 
}

const reduzirIntegral = (equacao) => {
  let calc = []
  equacao.forEach((num,i) => calc.push(calcula(num)))
  return calc
}

const calculeIntegral = (equacao) => {
  let xs = []
  let multiplicacao = []
  equacao.forEach((num, i) => {
    xs.push(transformeX(num))
    multiplicacao.push(multiplicaPorFracao(num))
  })

  return (x, expoente, i) => {
    let resultado = 0
    expoente.forEach((el, index) => resultado += xs[index] * Math.pow(x, el[1]))
    return resultado 
  }
}
const integralDefinida = (equacao, lim) => {
  let calculos = []
  let reduzida = reduzirIntegral(extraiNumeros(equacao))
  // Acha a fórmula da Integral
  let resolveX = calculeIntegral(reduzida)
  // resolve o X com os valores do limite
  lim.forEach((limite, i) => calculos.push(resolveX(limite, reduzida, i)))
  return calculos
  // return calculos.reduce((antes, atual) => antes + atual)
}

const equacao = ['1x2', '+2x1', '+4']
console.log(integralDefinida(equacao, [3, 0]))

