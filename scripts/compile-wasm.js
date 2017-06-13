const {exec} = require("child_process");

// Pull config env variables to construct the command that sets up emcc to run
const prefix = "npm_package_config_";
const {
    [prefix + "emsdk_env"]: env,
    [prefix + "html_template"]: htmlTemplate,
    [prefix + "in_file"]: inFile,
    [prefix + "out_file"]: outFile,
} = process.env;
const command = `${env} && emcc ${inFile} -s WASM=1 -o ${outFile} --shell-file ${htmlTemplate}`

if (env === undefined) {
    throw new Error("Please define the path to the emsdk_env shell or bash script inside of "
        + "package.json. See config.emsdk_env property. Additionally, make sure that you are "
        + "invoking this file through an npm script.");
}

console.log(`Executing:\n${command}`);
exec(command, (err, stdout, stderr) => {
    if (err) console.log(err);
    else console.log(stdout);
});