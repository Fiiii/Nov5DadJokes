import { success, failure } from '../libs/response-lib';
import { dadJoke } from '../libs/dadJokes/getTheJoke';
import { twitAJoke } from '../libs/twitter/twit';

export const handler = async () => {
  try {
    const jokeWithTags = await dadJoke();
    await twitAJoke(jokeWithTags);
    return success(jokeWithTags);
  } catch (error) {
    return failure(error);
  }
};
