# Lantern weather

Project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

Demo: https://woodybury.github.io/lantern-weather/

Created a quick & dirty Figma mockup for design/spec:

https://www.figma.com/file/C6Ut3eWeNLwok4YvphNfAT/weather?node-id=7%3A281

- [X] Can view current location weather using `navigator.geolocation`
- [X] Can select multiple location using the map view
- [X] Can toggle between metric and imperial units
- [X] State synced to local storage for ux on return sessions
- [X] Can remove location follows
- [X] Responsive styles

## Todos

- [ ] Show end user network loading and error states
- [ ] Finish tests for all utilities and interactions
- [ ] Validate API res schema
- [ ] Dedupe on api res instead of location select

## Develop

Clone repo:
`git clone git@github.com:WoodburyShortridge/lantern-weather.git`

Install deps:
`yarn`

Create .env
`cp .example.env .env`

Replace `<your key>` in `.env` with your API keys. For testing use `REACT_APP_API_KEY=0409bf076f4fd6cf39ecc9ea3f2420dd` & `REACT_APP_MAP_API_KEY=aVAVRWE6Ql0jY5cw7IHo`

## Build

`yarn build`

## Test

`yarn test`




