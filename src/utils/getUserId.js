import jwt from 'jsonwebtoken'

const getUserId = ({request, connection}, requireAuth = true) => {

    const header = request ? request.headers.authorization : connection.context.Authrorization

    if (header) {
        const token = header.replace('Bearer ', '')

        const decoded = jwt.verify(token,'thisisverysecret')

        return decoded.userId
    }

    if (requireAuth) {
        throw new Error('Authentication required')
    }

    return null
    
    
}

export { getUserId as default}