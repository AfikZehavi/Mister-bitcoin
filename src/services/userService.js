
export const userService = {
    getUser,
}

const user = {
    name: 'Afik',
    coins: 100,
    moves: []
}

function getUser() {
    return user
}