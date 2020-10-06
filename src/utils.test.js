import { getCapitalized, getIdFromUrl, getAnimatedShinyImageFromId } from './utils';

describe('getCapitalized', () => {
  test('should capitalize single word', () => {
    var input = "hello";
    var output = getCapitalized(input);
    expect(output).toBe("Hello");
  });

  test('should capitalize multiple words', () => {
    var input = "hello world";
    var output = getCapitalized(input);
    expect(output).toBe("Hello world");
  });
});

describe('getIdFromUrl', () => {
  test('should split url into word list and send word at index 6 in list.', () => {
    var input = "this/will/split/at/the/sixth/slash";
    var output = getIdFromUrl(input);
    expect(output).toBe("slash");
  });
});

describe('getAnimatedShinyImageFrodId', () => {
  test('should give us url link based on what id we sent out', () => {
    var input = "10"
    var output = getAnimatedShinyImageFromId(input);
    expect(output).toBe("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/10.gif");
  })
})