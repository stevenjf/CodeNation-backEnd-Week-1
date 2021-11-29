

const {Music, musicArr} = require("./utils");

const app = (args) => {
    switch (args[2]) {
        case "add":
            const music = new Music(args[3], args[4], args[5]);
            music.add();
            console.log(musicArr);
            break;
        case "add multi":
            const music1 = new Music(args[3], args[4], args[5]);
            const music2 = new Music(args[5], args[6], args[7]);
            music1.add();
            music2.add();
            console.log(musicArr);
            break;
        default: 
        console.log("Incorrect command.");
        break;
    }
};

app(process.argv);