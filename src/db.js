let users = [
    {
        id: 'u1',
        name: 'Hung',
        email: 'test@test.com',
        age: 10
    },
    {
        id: 'u2',
        name: 'HungVo',
        email: 'hung@test.com',
        age: 39
    }, {
        id: 'u3',
        name: 'zzzzz',
        email: 'zzz@zzz.com',
        age: 30
    }
]

let posts = [
    {
        id: 'p1',
        title: 'Mot',
        body: 'GraphQL Mot',
        published: true,
        author: 'u1',
        comments: ['c1']
    },
    {
        id: 'p2',
        title: 'Hai',
        body: 'GraphQL Hai',
        published: true,
        author: 'u2',
        comments: ['c2']
    },
    {
        id: 'p3',
        title: 'Ba',
        body: 'GraphQL Ba',
        published: false,
        author: 'u3',
        comments: ['c3', 'c4']
    }
]

let comments = [
    {
        id: 'c1',
        text: 'comment 1',
        author: 'u3',
        post: 'p1'

    },
    {
        id: 'c2',
        text: 'comment 2',
        author: 'u1',
        post: 'p2'
    },
    {
        id: 'c3',
        text: 'comment 3',
        author: 'u2',
        post: 'p3'
    },
    {
        id: 'c4',
        text: 'comment 4',
        author: 'u1',
        post: 'p3'
    }
]

const db = {
    users,
    posts,
    comments
}

export {db as default}