## Tabler Icons for React Native

<p align="center">
  <img src="https://raw.githubusercontent.com/tabler/tabler-icons/master/.github/packages/og-core.png" alt="Tabler Icons" width="838">
</p>

<p align="center">
    A set of <!--icons-count-->4962<!--/icons-count--> free MIT-licensed high-quality SVG icons for you to use in your web projects. Each icon is designed on a 24x24 grid and a 2px stroke.
<p>

<p align="center">
  <a href="https://tabler-icons.io/"><strong>Browse at tabler-icons.io &rarr;</strong></a>
</p>

## Installation

```shell
yarn add tabler-react-native
```

or

```shell
npm install tabler-react-native --save
```

or

```shell
pnpm install tabler-react-native
```

or just [download from GitHub](https://github.com/BurakGur/tabler-react-native/releases).

## Usage
It's build with ESmodules so it's completely tree-shakable. Each icon can be imported as a component.

```jsx
import { IconArrowLeft } from 'tabler-react-native/icons';

const App = () => {
  return (
      <View>
        <IconArrowLeft />
      </View>
  );
};

export default App;
```

You can pass additional props to adjust the icon.

```jsx
<IconArrowLeft color="red" size={48} />
```

### Props

| name          | type     | default      |
| ------------- | -------- | ------------ |
| `size`        | _Number_ | 24           |
| `color`       | _String_ | currentColor |
| `stroke`      | _Number_ | 2            |

## License

Tabler React Native is licensed under the [MIT License](https://github.com/BurakGur/tabler-react-native/blob/main/LICENSE).
