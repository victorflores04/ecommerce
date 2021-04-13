import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@gsas.com',
        password: bcrypt.hashSync('12345678', 10),
        isAdmin: true,
    },
    {
        name: 'Victor flores',
        email: 'victor@gsas.com',
        password: bcrypt.hashSync('12345678', 10),
    },
    {
        name: 'user prueba',
        email: 'user@gsas.com',
        password: bcrypt.hashSync('12345678', 10),
    },
]

export default users