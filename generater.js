function sample(array) {
    const index = Math.floor(Math.random() * array.length)
    return array[index]
  }

function generateURL() {
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
    const upperCaseLetters = lowerCaseLetters.toUpperCase()
    const numbers = '1234567890'
   
    let collection = []

    collection = collection.concat(lowerCaseLetters.split(''))
    collection = collection.concat(upperCaseLetters.split(''))
    collection = collection.concat(numbers.split(''))

    let shortenURL= ''
    for (let i = 0; i < 5; i++) {
        shortenURL += sample(collection)
    }
    return shortenURL
}
module.exports = generateURL