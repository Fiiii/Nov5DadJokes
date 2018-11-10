const Twit = require('twit');

export const twitAJoke = async (joke) => {
  const {
    consumer_key,
    consumer_secret,
    access_token,
    access_token_secret
  } = process.env;

  const Twitter = new Twit({
    consumer_key,
    consumer_secret,
    access_token,
    access_token_secret
  });

  try {
    await Twitter.post('statuses/update', { status: `Hello Serverless! \n ${joke}` });
  } catch (error) {
    throw new Error(error);
  }
};
