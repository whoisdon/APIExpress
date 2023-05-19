import colors from "colors";

export default function log(message, type = types[0]) {
  const types = [
    "error",
    "system",
    "routes",
    "firebase",
    "mongoose",
    "success",
    "client",
    "mysql",
    "notice",
  ];

  const colorFormat = {
    error: ["[ ❌  Error ]".bgRed, "red"],
    system: ["[ 💻  System ]".bgBlue, "blue"],
    routes: ["[ 🤖  Routes ]".bgCyan, "cyan"],
    firebase: ["[ 🔥  Firebase ]".bgBlue, "blue"],
    mongoose: ["[ 📙  Mongoose ]".bgMagenta, "magenta"],
    success: ["[ ✔️  Success ]".bgGreen, "green"],
    client: ["[ 💁  Client ]".bgMagenta, "magenta"],
    mysql: ["[ 🏦  MySQL ]".gray, "zebra"],
    notice: ["[ 🔔  Notice ]".bgYellow + "⠀➜ ".italic.red, "yellow"],
  };

  if (!types.includes(type)) {
    type = types[0];
  }

  const [typeString, color] = colorFormat[type];

  console.log(`${typeString}⠀${colors[color](message)}`);
}
