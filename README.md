# postcss-pixel-adapter
a postcss pixel loader

# Usage
```js
// webpack loader
const PostCssPixelAdapter = reuqire('postcss-pixel-adapter');

module: {
	rules: [
		{
			test: /\.css$/,
			loader: 'postcss-loader',
			options: {
				plugins: [
					PostCssPixelAdapter
				]
			}
		}
	]
}
```

# Other