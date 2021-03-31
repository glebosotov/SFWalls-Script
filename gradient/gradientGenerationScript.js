// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: blue; icon-glyph: file-alt;

config = args.shortcutParameter;

if (config == null) {
  config = { colors: 7, gradientColor1: "#03045e", gradientColor2: "#caf0f8" };
}

/**
 * You may use this function with both 2 or 3 interval colors for your gradient.
 * For example, you want to have a gradient between Bootstrap's danger-warning-success colors.
 */
function colorGradient(fadeFraction, rgbColor1, rgbColor2, rgbColor3) {
  var color1 = rgbColor1;
  var color2 = rgbColor2;
  var fade = fadeFraction;

  // Do we have 3 colors for the gradient? Need to adjust the params.
  if (rgbColor3) {
    fade = fade * 2;

    // Find which interval to use and adjust the fade percentage
    if (fade >= 1) {
      fade -= 1;
      color1 = rgbColor2;
      color2 = rgbColor3;
    }
  }

  var diffRed = color2.red - color1.red;
  var diffGreen = color2.green - color1.green;
  var diffBlue = color2.blue - color1.blue;

  var gradient = {
    red: parseInt(Math.floor((color1.red + diffRed * fade) * 255), 10),
    green: parseInt(Math.floor((color1.green + diffGreen * fade) * 255), 10),
    blue: parseInt(Math.floor((color1.blue + diffBlue * fade) * 255), 10),
  };

  return (
    "#" +
    ("0" + gradient.red.toString(16)).slice(-2) +
    ("0" + gradient.green.toString(16)).slice(-2) +
    ("0" + gradient.blue.toString(16)).slice(-2)
  );
}

colorsArray = [];

for (let index = 0; index <= config["colors"]; index++) {
  colorsArray.push(
    colorGradient(
      index / config["colors"],
      new Color(config["gradientColor1"]),
      new Color(config["gradientColor2"])
    )
  );
}

resultingDict = {
  "Custom gradient": {
    colors: colorsArray,
    shuffle: false,
    fgShift: (config["colors"] / 2) | 0,
    bgShift: 0,
  },
};
// log(resultingDict);
return resultingDict;
Script.complete();
