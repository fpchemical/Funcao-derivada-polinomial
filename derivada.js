
const calcula = (nums) => [nums[0]*nums[1], nums[1]-1]

const extraiNumeros = (equacao) => {
  let calc = []
  equacao.forEach((num,i) => calc.push(num.split('x')))
  return calc 
}

const derive = (equacao) => {
  let calc = []

  if(equacao[0][1]===1) return  equacao 
  equacao.forEach((num,i) => { 
    if(i===1 && num[1]===0) return calc.push(num)
    else calc.push(calcula(num))   
    if(calc[0][1] > 1) return derive(calc)
  })
  return calc
}

const derivadaPolinomial = (equacao) => {
  let calculo = derive(extraiNumeros(equacao))
  let resutado = calculo[0][0] + 'x + ' + calculo[1][0]
  console.log('resutado', resutado)
}



const equacao = ['7x6', '+6x5', '+2x4', '+9x3', '+3x2', '+4x1']

derivadaPolinomial(equacao)