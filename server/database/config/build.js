const {readFileSync} = require('fs');

const {join} = require('path');

const connection = require('./connection')

const runBuild = ()=>{
    let sql = '';
    sql = readFileSync(join(__dirname , 'build.sql')).toString();
    const fakeData = readFileSync(join(__dirname, 'fakeData.sql')).toString(); 
    return connection.query(sql + fakeData);
  
};

module.exports = {runBuild}

