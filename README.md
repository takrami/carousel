# Carousel

Responsive Carousel based on React.

## How To Start

1. Clone the repository.

```sh
git clone git@github.com:takrami/carousel.git
```

2. cd into the project directory.

```sh
cd carousel
```

3. Install the packages.

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

```
npx cypress open
```

> Tests do not cover all scenarios. More test cases can be added.
> If you decided to change the app port. You also have to change the port in the following file `cypress/integration/spec.ts` line `9`. (This can be added to test env when it's configured for sure)

## How to use Slider component

`Slider` component can be used with the following parameters:
| parameter | type | default value |
| :------------ |:---------------| -----|
| slides | SlideInterface[] | - |
| col 2 is | centered | $12 |
| zebra stripes | are neat | $1 |
