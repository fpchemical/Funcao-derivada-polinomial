// PoC de Fórmula das Primitivas
// https://pt.wikipedia.org/wiki/Integral
// Porém ainda precisa ser melhorado


const transformeX = (nums) => nums[0]/nums[1] 

const calcula = (nums) => (nums.length === 1) 
  ? [parseInt(nums[0]), 1]
  : [parseInt(nums[0]), parseInt(nums[1])+1]

const extraiNumeros = (equacao) => {
  const calc = []
  equacao.forEach((num,i) => calc.push(num.split('x')))
  return calc 
}

const reduzirIntegral = (equacao) => {
  const calc = []
  equacao.forEach((num,i) => calc.push(calcula(num)))
  return calc
}

const calculeIntegral = (equacao) => {
  const xs = []
  equacao.forEach((num, i) => {
    xs.push(transformeX(num))
  })

  return (x, expoente, i) => {
    let resultado = 0
    expoente.forEach((el, index) => resultado += xs[index] * Math.pow(x, el[1]))
    return resultado 
  }
}

const integralDefinida = (equacao, lim) => {
  const calculos = []
  const reduzida = reduzirIntegral(extraiNumeros(equacao))
  // Acha a fórmula da Integral
  const resolveX = calculeIntegral(reduzida)
  // resolve o X com os valores do limite
  lim.forEach((limite, i) => calculos.push(resolveX(limite, reduzida, i)))
  return calculos
  // return calculos.reduce((antes, atual) => antes + atual)
}

const equacao = ['1x2', '+2x1', '+4']
console.log(integralDefinida(equacao, [3, 0]))

