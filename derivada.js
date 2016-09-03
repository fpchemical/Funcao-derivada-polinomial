
const calcula = (numeros) => {
  // let calc = [numeros[0]*numeros[1], numeros[1]-1]
  return [numeros[0]*numeros[1], numeros[1]-1]
}

const inicia = (equacao) => {
  let calc = []
  equacao.forEach((el,i) => {
    calc.push(calcula(el.split('x')))
  })
  return calc 
}

const derive = (equacao) => {
  let calc = []

  if(equacao[0][1]===1) return  equacao 
  equacao.forEach((el,i) => { 
    if(i===1 && el[1]===0) return calc.push(el)
    else calc.push(calcula(el))   
    if(calc[0][1] > 1) return derive(calc)
  })
  return calc
}

const deriv = (equacao) => {
  let calc2 = derive(inicia(equacao))
  let resutado = calc2[0][0] + 'x + ' + calc2[1][0]
  console.log('resutado', resutado)
}



const equacao = ['7x6', '+6x5', '+2x4', '+9x3', '+3x2', '+4x1']

deriv(equacao)