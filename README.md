# Carousel

Responsive Carousel based on React.
Used technologies:

- React (as the main UI library)
- React router
- Typescript (typing)
- Styled-components (styling)
- Cypress (e2e test)
- i18n (internationalization)

## How To Start

1. Clone the repository.

```sh
git clone git@github.com:takrami/carousel.git
```

2. cd into the project directory.

```sh
cd carousel
```

3. Install the dependencies.

```sh
yarn
```

4. Start the development environment.

```sh
yarn start
```

## Production build

Simply run:

```sh
yarn build
```

The production build will be end up in `build` directory.

## Run e2e test

Rename `.env.example` to `.env`. Then run the following command:

> To run tests you need to start the project first.

```
npx cypress open
```

> Tests do not cover all scenarios. More test cases can be added.

> If you decided to change the app port. You also need to change the port in the following file `cypress/integration/spec.ts` line `9`. (This can be added to test env when it's configured)

## How to use Slider component

`Slider` component can be used with the following parameters:
| parameter | type | default | description
| :------------ |:---------------|:----------|:---|
| slides | SlideInterface[] | - | Contains array of slide objects. For more info about the properties checkout `SlideInterface` definition.
| showArrows | boolean | true | Hide or show next/previous arrows
| showDots | boolean | true | Hide or show slide bullets
| autoPlay | boolean | false | Will enable auto play for the carousel. The delay time is included as a property in each slide object. For more info about the properties checkout `SlideInterface`

## Latest lighthouse audit

![image](https://user-images.githubusercontent.com/29104089/116476931-37c4fd80-a87c-11eb-9ac9-8d3a6d283cc5.png)

## Todo

- [ ] Add more test cases.
- [ ] Add unit tests.
- [ ] Add state management to have better decoupled components.
- [ ] Add `slidesPerView` parameter.
- [ ] Add `slidesPerScreenSize` parameter.
- [ ] Add `onSlideChange` parameter.
- [ ] Add `onSlideEnd` parameter.
- [ ] Add `onSlideStart` parameter.
- [ ] Add `slidesLoop` parameter.

## Live Demo

https://simple-carousel-app.netlify.app/
