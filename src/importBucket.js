const AWS = require('aws-sdk')
const s3 = new AWS.S3()
module.exports.import = async (event) => {
    try {
        const bucketName = event.Records[0].s3.bucket.name
        console.log('bucket name ' + bucketName)
        for (const record of event.Records) {
            const key = record.s3.object.key
            console.log('key -- ', key)
            console.log('record -- ', record)
            await s3.getObject({
                Bucket: record.s3.bucket.name,
                Key: record.s3.object.key
            }).promise().then((data) => {
                // parsear el csv 
                //data = data.split(';')
                console.log('data ==',data)
                // guardar la data en la tabla 
            })
        }
    } catch (error) {
        console.log(error)
    }
}