# What Reacticons?

Reacticons are scalable file icons for ReactJS. They're hip, cute, customizeable, and (can be) animated.

## Using Reacticons in your project

First, of course, you need to `require` Reacticons.

```
var Reacticon = require('path/to/reacticon');
```

Boom, now you can use Reacticons where ever you want!

```
<Reacticon
  height="100"
  primaryColor="#2ECC40"
  type="table"
  label="xlxs"
  animate />
```

### Available `props`
Reacticons have quite a few `props` that can help you customize the appearance and behavior of the icons.

#### `width`
Type: String

#### `height`
Type: String
You'll need to define a `width` or a `height`, otherwise you won't be able to see your lovely new icon!

#### `type`
Type: String. One of 'text', 'table', 'image', 'code', 'slides'
Required. Defines the file type icon within the file icon.

#### `label`
Type: String
This is intended to be the file extension of the file represented by the icon. For example, `doc`, `xlsx`, `html`.

#### `bgColor`
Type: String
Default: `#fff`. Accepts a valid CSS color. Defines the color of the file image. The fold-over flap is derived from the main background color.

#### `primaryColor`
Type: String
Default: `#0074d9`. Accepts a valid CSS color. The file type icon is monochromatic. You can define the base color for this icon.

#### `strokeColor`
Type: String
Accepts a valid CSS color to draw a 1px border around the icon background.

#### `animate`
Type: Boolean
The file type icons can have cute little animations.

#### `progress`
Type: String
If there is a value for this `prop`, a progress bar will replace the label.

#### `isPorcessing`
Type: Boolean
Should the progress bar have a loading indicator style? If `progress` is not defined, the progress bar will be "processing" at 100%.

## Why is this useful?

Commonly, modern web applications make use of image sprite- or font-based icons. Font-based icons work particularly well becasue they're inheriently vector-based, however there are plenty of limitations. Here are two: icons can be difficult to animate and they're limited to only one color (unless you want to do some multi-icon layout gymnastics).

ReactJS makes it really easy to manage `SVG`s and include configurable `SVG`-based components in your project. Reacticons are `SVG` file icons that can be easily included in your project and colored, scaled, progress-bared and animated.

## Contributing

Reacticons are new to this world and I'm a designer. Please submit issues for any problems you may encounter. If you'd like to contribute, feel free to open an issue or pull request. Also, I'd love to hear from you if you use Reacticons in your project!
