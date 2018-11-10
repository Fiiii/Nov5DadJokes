import axios from 'axios';

export const dadJoke = async () => {
  try {
    const { DAD_JOKES_API } = process.env;
    const response = await axios({
      method: 'get',
      url: DAD_JOKES_API,
      headers: {
        Accept: 'application/json'
      }
    });

    const jokeWithTags = attachTags(response.data.joke);

    return jokeWithTags;
  } catch (error) {
    throw new Error(error);
  }
};

const attachTags = (joke) => {
  return `${joke} \n #NoServerNovember #DadJokes #Serverless #Netguru \n https://github.com/Fiiii/Nov5DadJokes.git`;
};
