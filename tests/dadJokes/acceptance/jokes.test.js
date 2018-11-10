import { dadJoke } from '../../../libs/dadJokes/getTheJoke';
require('dotenv').config({ path: '.env.test' });

describe('Dad jokes Api', () => {
  describe('Get funny joke from api', () => {
    it('Returns a joke with tags', async () => {
      const jokeWithTags = await dadJoke();
      expect(typeof jokeWithTags).toBe('string');
      expect(jokeWithTags).toContain('#NoServerNovember #DadJokes #Serverless #Netguru');
    });
  });
});
