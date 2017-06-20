function onIncrement() {
    return {type: 'INCREMENT'};
}
function onDecrement() {
    return {type: 'DECREMENT'}
}
export default {
    onIncrement,
    onDecrement
}