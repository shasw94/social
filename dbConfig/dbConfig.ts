import mongoose from 'mongoose'

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('Database connected successfully');
        })

        connection.on('error', (err) => {
            console.log('MongoDB Connection error' + err)
            process.exit();
        })
    } catch (error) {
        console.log('Error');
        console.log(error);
    }
}