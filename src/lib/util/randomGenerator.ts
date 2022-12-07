export const randomIdGenerator = () => {
    return `${Math.random() * 99}${new Date().getTime()}`
}