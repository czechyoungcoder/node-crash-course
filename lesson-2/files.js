const fs = require("fs");

// reading files
// fs.readFile("./docs/blog.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// writing files
// fs.writeFile("./docs/blog1.txt", "hello, world", () => {
//   console.log("file was written");
// });

// directories
// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) console.log(err);
//     console.log("folder created");
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     if (err) console.log(err);
//     console.log("folder deleted");
//   });
// }

// deleting files
// if (fs.existsSync("./docs/deleteme.txt")) {
//   fs.unlink("./docs/deleteme.txt", (err) => {
//     if (err) console.log(err);
//     console.log("file deleted");
//   });
// }
