
function makeAlert() {
  const arr = [1,2,4]
  return [...arr]
}

function clique () {
  console.log('CLIQUE')
  throw new Error('DAMNED');
}

export {
  makeAlert,
  clique
}