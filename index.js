 const Server = require('./models/server');
 const request = require('request')
 require('dotenv').config();

 const server = new Server();


 async function sendNotification(req, res) {
    let key = 'AAAAZUOM9Pk:APA91bHOcUa2xNWd_Bxz98eXMTv9pbNFd9HQLF1QqAwQaZoepCJP_w1NozAq1qeQr1bM7uwVr0m86B6o2H93fnGPf5WdE0bKl_gr4LvS16sgtW1KiY2dfKuPke2JBiAIld871aqTZlr5';
    token = 'drlZ4faRQ8C8-k8f2PSN4e:APA91bHUQuytz_4YQNLPVC5RXhDN872qOpIIn8QkvDBOHkMQcIXM7d_RVP6igVcHsE3bzBhl6Ue7bsKluEo7vo2RVEAhVgkaO0gYSw-u81H6uwf0usAGZoA2SXqgPbx09S2Ukvnkp9jm'
    request(
        {
            method: 'POST',
            uri:
                'https://fcm.googleapis.com/fcm/send',
            headers: {
                'content-type': 'application/json',
                Authorization: `key=${key}`,
                'apns-priority': 'high',
                content_available: true
            },
            body: {

                    to: token,
                    notification: {
                        body: 'Sodimac prueba mensajes',
                        title: 'Cliente en espera Verificador 1'
                    },
                    priority: "high",
                    android: {
                        notification: {
                            sound: 'default'
                        }
                    }
            },
            json: true
        },
        async function (error, response, body) {
            if (error) {
                console.log(error);
            }
            console.log(body);
        }
    );
}



server.exucute();




