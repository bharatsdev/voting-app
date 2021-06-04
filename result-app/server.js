const app = require('express')();
const async = require('async');
const Pool = require('pg').Pool;
const http = require('http').Server(app);
const dbConfig = require('./src/config/db.config.js')

const socketIO = require('socket.io')(http, {
    cors: {
        origins: ['http://localhost:4200']
    },
    transports: ['polling']
})

const port = process.env.port || 3001

//DB connection
const dbPool = new Pool(
    {
        user: dbConfig.USER,
        password: dbConfig.PASSWORD,
        host: dbConfig.HOST,
        database: dbConfig.DB,
        port: dbConfig.PORT
    }
)

// socketIO.on('connection', (socket) => {
//     socket.on('new-vote', (response) => {
//         dbPool.query('SELECT * FROM vote', (error, results) => {
//             if (error) {
//                 throw error
//             }
//             console.log(socket.conn.transport.name);
//             console.log('Vote :: ' + results.rows)
//             socket.emit('new-vote', results.rows[0].count);
//         });
//     });
// });

socketIO.on('error', function (err_msg) {
    console.info("Connection Error:" + err_msg);
});

socketIO.on('disconnect', function (msg) {
    console.info("Someone disconnected :" + msg);
});

async.retry(
    { times: 1000, interval: 1000 },
    (callback) => {
        dbPool.connect(
            (err, client, done) => {
                if (err) {
                    console.log('waiting for db..!')
                }
                callback(err, client)
            }
        )

    },
    (err, client) => {
        if (err) {
            console.log('Giving Up...!')
        }
        console.log('connected to postgres db...')
        getVotes(client);

    }
)
getVotes=(client)=>{
    client.query('SELECT id, COUNT(count) AS count FROM vote GROUP BY id', [], (error, results) => {
        if (error) {
            console.error("Error performing query: " + err);
        }
        //console.log(socket.conn.transport.name);
        console.log('Vote :: ' + JSON.stringify( results.rows))
        socketIO.emit('voting-scores', results.rows[0].count);

        setTimeout(function() {getVotes(client) }, 1000);

    });
}
http.listen(port, () => {
    console.log(`started on port: ${port}`);
});