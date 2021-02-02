const {readFileSync} = require('fs');

const {join} = require('path');

const connection = require('./connection')

const runBuild = ()=>{
    let sql = '';
    sql = readFileSync(join(__dirname , 'build.sql')).toString();
    if(process.env.NODE_ENV !== 'production'){
        sql += readFileSync(join(__dirname,'fakeData.js')).toString(); 
    }
    return connection.query(sql);
}

module.exports = {runBuild}

