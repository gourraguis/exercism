//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, seconds) => {
  const orbitalPeriods = {
    earth: 1,
    mercury: .2408467,
    venus: .61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
  }
  const secondsPerYear = 60 * 60 * 24 * 365.25
  const earthAge = seconds / secondsPerYear

  return Number((earthAge / orbitalPeriods[planet]).toFixed(2))
};
