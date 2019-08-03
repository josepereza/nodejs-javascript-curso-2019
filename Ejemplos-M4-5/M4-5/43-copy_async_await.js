// nombre del programa:  43-copy_async_await.js

// copy con promesas  y async - await -  Ej: node 43-copy_async_awiat.js  origen.txt  destino.txt



var fs = require('fs');
const orig = process.argv[2], dest = process.argv[3];

async function copy_with_await_example() {

    await new Promise( (resolve, reject) =>  
                             (process.argv.length != 4) ? reject('   syntax: "node copy <orig> <dest>"') : resolve() ); 

    let data = await new Promise( (resolve, reject) => fs.readFile( orig, 'utf8', (err, data) => err ? reject(err) : resolve(data) ));

    let res   = await new Promise( (resolve, reject) => fs.writeFile( dest, data, err => err  ? reject(err) : resolve('file copied') ));

    console.log("Result: " + res);
}

copy_with_await_example().catch ( err => console.log("Error: " + err));
