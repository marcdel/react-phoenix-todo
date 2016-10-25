export const TODO_ADDED = "TODO_ADDED"

export function todoAdded(text) {
  return {
    type: TODO_ADDED,
    text: text
  }
}
