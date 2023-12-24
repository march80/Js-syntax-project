const generateRandomNumber = (num) => {
    //gets a number from 0 -> num - 1
    
    return Math.floor(Math.random() * num)
   
    
}
// create array to hold message
let message = [];

// object to hold message value
const collectiveWisdom = {
    signInfo: ['star', 'moon', 'sun', 'comet'],
    fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
  }

  //loop through the object and push value into array
  for(prop in collectiveWisdom){
    //get a random index for the object arrays
    let index = generateRandomNumber(collectiveWisdom[prop].length)

    switch(prop){
        case 'signInfo':
                message.push(`Your sign is: ${collectiveWisdom[prop][index]}`)
            break;

        case 'fortuneOutput':
            message.push(`Your luck is: ${collectiveWisdom[prop][index]}`)
            break;

        case 'advice':
            message.push(`Your advice to take is: ${collectiveWisdom[prop][index]}`)
            break;

        default:
            message.push(`Not enough info`)


        
    }
  }

  const formatMessage = (message) =>{
    let formattedMessage = message.join('\n')
    console.log(formattedMessage)

  }

  formatMessage(message)